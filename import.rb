#!/usr/bin/env ruby
# -*- encoding : utf-8 -*-
require 'rubygems'
require 'simple-rss'
require 'open-uri'
require 'awesome_print'
require 'yaml'
require './downmark_it'

# FIX to warning: regexp match /.../n against to UTF-8 string
class SimpleRSS
  def unescape(content)
    if content =~ /([^-_.!~*'()a-zA-Z\d;\/?:@&=+$,\[\]]%)/u then
      CGI.unescape(content).gsub(/(<!\[CDATA\[|\]\]>)/u,'').strip
    else
      content.gsub(/(<!\[CDATA\[|\]\]>)/u,'').strip
    end
  end
end

rss = SimpleRSS.parse open('http://blogorafaelp.wordpress.com/feed/')
post = rss.items.first
ap post

slug       = post[:link].split("/").last
date       = post[:pubDate]
post_id    = post[:guid].split("?p=").last
content    = post[:content_encoded]
content.gsub!("<img alt=\"\" border=\"0\" src=\"http://stats.wordpress.com/b.gif?host=blogorafaelp.wordpress.com&#038;blog=60125236&#038;post=#{post_id}&#038;subd=blogorafaelp&#038;ref=&#038;feed=1\" width=\"1\" height=\"1\" />","")
content    = DownmarkIt.to_markdown content
name       = "%02d-%02d-%02d-%s.markdown" % [date.year, date.month, date.day, slug]
data = {
  'layout'        => 'post',
  'status'        => 'publish',
  'published'     => true,
  'title'         => post[:title].to_s,
  'author'        => 'Rafael Lima',
  'author_login'  => 'admin',
  'author_email'  => 'contato@rafael.adm.br',
  'author_url'    => 'http://rafael.lima.myopenid.com/',
  'categories'    => ['Posts'],
  'tags'          => [post[:category]]
}.delete_if { |k,v| v.nil? || v == ''}.to_yaml
File.open("_posts/#{name}", "w") do |f|
  f.puts data
  f.puts "---"
  f.puts content
end
puts "Created file _posts/#{name}"