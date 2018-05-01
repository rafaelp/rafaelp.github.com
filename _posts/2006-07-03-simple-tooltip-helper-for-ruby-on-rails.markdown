---
title: Simple tooltip helper for Ruby on Rails
date: 2006-07-03 01:36:36 Z
categories:
- Posts
tags:
- rails
- ruby
- snippet
- helper
- tooltip
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 53
wordpress_url: http://rafael.adm.br/p/simple-tooltip-helper-for-ruby-on-rails/
---

A simple tooltip helper with span tag and title attrbute for Ruby on Rails framework.

<strong>app/helpers/application_helper.rb</strong>
<pre lang="ruby">def tooltip(content, options = {}, html_options = {}, *parameters_for_method_reference)
html_options[:title] = options[:tooltip]
html_options[:class] = html_options[:class] || 'tooltip'
content_tag("span", content, html_options)
end</pre>
<strong>app/views/foo/bar.rhtml</strong>
<pre lang="ruby">< %= tooltip "Tags", { :tooltip => 'some keywords to categorize your data and help in future searches' }, :class => 'mytooltip' %></pre>
<strong>public/stylesheets/yourstyle.css</strong>
<pre lang="css">.mytooltip {
cursor: help;
color: green;
border-bottom: 1px dotted green
}</pre>
