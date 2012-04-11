--- 
layout: post
title: Simple tooltip helper for Ruby on Rails
wordpress_id: 53
wordpress_url: http://rafael.adm.br/p/simple-tooltip-helper-for-ruby-on-rails/
date: 2006-07-02 22:36:36 -03:00
---
A simple tooltip helper with span tag and title attrbute for Ruby on Rails framework.

<strong>app/helpers/application_helper.rb</strong>
<pre lang="ruby">def tooltip(content, options = {}, html_options = {}, *parameters_for_method_reference)
html_options[:title] = options[:tooltip]
html_options[:class] = html_options[:class] || 'tooltip'
content_tag("span", content, html_options)
end</pre>
<strong>app/views/foo/bar.rhtml</strong>
<pre lang="ruby">&lt; %= tooltip "Tags", { :tooltip =&gt; 'some keywords to categorize your data and help in future searches' }, :class =&gt; 'mytooltip' %&gt;</pre>
<strong>public/stylesheets/yourstyle.css</strong>
<pre lang="css">.mytooltip {
cursor: help;
color: green;
border-bottom: 1px dotted green
}</pre>
