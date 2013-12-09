#!/usr/bin/env ruby
# -*- encoding : utf-8 -*-
require 'rubygems'
require 'awesome_print'
require 'yaml'
require 'google_drive'
require './downmark_it'

def extract_tags(content)
  tags = []
  tags = content.scan(/\#[\w-]+/)
  content = content.gsub(tags.join(" "),"")
  tags = tags.map do |tag| tag.delete("#") end
  [content, tags]
end

title = "Olhe além do Bitcoin"

session = GoogleDrive.login("rafael.lima.paula@gmail.com", ENV['RAFAELP_BLOG_GOOGLE_DRIVE_PASSWORD'])
file = session.file_by_title(title)
html = file.download_to_string(:content_type => "text/html")
doc = Hpricot(html)

content       = doc.search("//body").html
slug          = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
date          = Date.today
content       = DownmarkIt.to_markdown(content)
content, tags = extract_tags(content)
name       = "%02d-%02d-%02d-%s.markdown" % [date.year, date.month, date.day, slug]
data = {
  'layout'        => 'post',
  'status'        => 'publish',
  'published'     => true,
  'title'         => title,
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