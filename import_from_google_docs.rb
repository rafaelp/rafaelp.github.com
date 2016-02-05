#!/usr/bin/env ruby
# -*- encoding : utf-8 -*-
require 'rubygems'
require 'awesome_print'
require 'yaml'
require 'google/api_client'
require 'google_drive'
require 'uri'
require 'cgi'
require 'pry'
require './downmark_it'
require './extend_string'

def extract_images(content, slug)
  images = content.scan(/\!\[\]\((.*) \"\"\)+/)
  images.flatten!
  images.each_with_index do |image, i|
    dirname = "blog/images/posts/%02d-%02d-%02d" % [Date.today.year, Date.today.month, Date.today.day]
    FileUtils.mkdir_p(dirname)
    filename = "#{dirname}/#{slug}-#{i}.png"
    system("wget #{image} -q -O #{filename}")
    puts "Created image #{filename}"
    content.gsub!("![](#{image} \"\")","![](/#{filename})")
  end
  [content, images]
end

def extract_tags(content)
  tags = []
  tags = content.scan(/\#[\w-]+/)
  content = content.gsub(tags.join(" "),"")
  tags = tags.map do |tag| tag.delete("#") end
  [content, tags]
end

def decode_urls(content)
  changes = []
  content.scan(/\((https?[^\s]*)\)/) do |a,b|
    uri = URI(CGI::unescape(a))
    if uri.query
      query = CGI.parse(uri.query)
      final_url = query['q'].first
      changes << [a, final_url]
    end
  end
  changes.each do |pair|
    content = content.gsub(pair[0], pair[1]) unless pair[1].nil?
  end
  content
end

title = "Minha Segurança Pessoal Digital"

if ENV['RAFAELP_BLOG_ACCESS_TOKEN'].nil? or ENV['RAFAELP_BLOG_ACCESS_TOKEN'].empty?
  # Authorizes with OAuth and gets an access token.
  client = Google::APIClient.new
  auth = client.authorization
  auth.client_id = ENV['RAFAELP_BLOG_CLIENT_ID']
  auth.client_secret = ENV['RAFAELP_BLOG_CLIENT_SECRET']
  auth.scope = [
    "https://www.googleapis.com/auth/drive"
  ]
  auth.redirect_uri = "urn:ietf:wg:oauth:2.0:oob"
  print("1. Open this page:\n%s\n\n" % auth.authorization_uri)
  print("2. Enter the authorization code shown in the page: ")
  auth.code = $stdin.gets.chomp
  auth.fetch_access_token!
  access_token = auth.access_token

  print("Access Token: #{access_token}\n\n")
  ENV['RAFAELP_BLOG_ACCESS_TOKEN'] = access_token
end

session = GoogleDrive.login_with_oauth(ENV['RAFAELP_BLOG_ACCESS_TOKEN'])
file = session.file_by_title(title)
html = file.export_as_string("text/html")
doc = Hpricot(html)

html            = doc.search("//body").html
slug            = title.urlize({:downcase => true, :convert_spaces => true})
date            = Date.today
content         = DownmarkIt.to_markdown(html)
content, tags   = extract_tags(content)
content, images = extract_images(content, slug)
content         = decode_urls(content)
name            = "%02d-%02d-%02d-%s.markdown" % [date.year, date.month, date.day, slug]
data = {
  'layout'        => 'post',
  'status'        => 'publish',
  'published'     => true,
  'title'         => title,
  'slug'          => slug,
  'author'        => 'Rafael Lima',
  'author_login'  => 'admin',
  'author_email'  => 'contato@rafael.adm.br',
  'author_url'    => 'http://rafael.lima.myopenid.com/',
  'categories'    => ['Posts'],
  'tags'          => tags
}.delete_if { |k,v| v.nil? || v == ''}.to_yaml
File.open("_posts/#{name}", "w") do |f|
  f.puts data
  f.puts "---"
  f.puts content
end
puts "Created file _posts/#{name}"
