---
title: CSS Browser Selector
date: 2006-07-20 02:29:24 Z
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- tweak
- web
- snippet
- css
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 58
wordpress_url: http://rafael.adm.br/p/css-browser-selector/
---

Simple trick to help you on CSS hacks!

<strong>Official Page:</strong>
<a href="/css_browser_selector/">http://rafael.adm.br/css_browser_selector/</a>

EXAMPLE
<p>With this script you can set a different background color of one div for each browser.</p>
<ul>
<li>Internet Explorer - yellow</li>

<li>Firefox - gray</li>
<li>Opera - green</li>
<li>Konqueror - blue</li>
<li>Safari - black</li>
</ul>

Source of this example:
<pre>
<div class="example">
</pre>
<br />
<pre>
<style type="text/css">
.ie .example {
  background-color: yellow
}
.gecko .example {
  background-color: gray
}
.opera .example {
  background-color: green
}
.konqueror .example {
  background-color: blue
}
.safari .example {
  background-color: black
}
.example {
  width: 100px;
  height: 100px;
}
</style>

</pre>

DOWNLOAD

<p><a href="http://rafael.adm.br/css_browser_selector/css_browser_selector.js.txt">css_browser_selector.js.txt</a> (> 1KB)
</p><p>Rename this file from .js.txt to .js before using</p>

USAGE

1. Copy and paste the line above, inside <head> and </head> tag
<p><script src="css_browser_selector.js" type="text/javascript"></script></p>

2. Set the CSS attributes putting the code of the browser
<p>Examples:</p>

<ul>
<li>html.gecko div#header { margin: 1em; }</li>
<li>.opera #header { margin: 1.2em; }</li>
<li>.ie .mylink { font-weight: bold; }</li>
</ul>

Available Browser Codes:
<ul>
<li>ie - Internet Explorer</li>
<li>gecko - Mozilla, Firefox, Camino</li>
<li>opera - Opera</li>
<li>konqueror - Konqueror</li>
<li>safari - Safari</li>
</ul>

INSPIRATION

<p>Original idea by 37 signals.</p>
<p><a href="http://37signals.com/svn/archives2/browser_selectors_in_css.php">http://37signals.com/svn/archives2/browser_selectors_in_css.php</a></p>

TO DO

<ul>
<li>Rails plugin</li>

</ul>

LICENSE

<p><a href="http://creativecommons.org/licenses/by/2.5/">http://creativecommons.org/licenses/by/2.5/</a></p>

AUTHOR

<p>Rafael Lima (<a href="http://rafael.adm.br">http://rafael.adm.br</a>)</p>

KEYWORDS

css javascript script cascading style sheet cross browser cross-browser browsers bug ie internet explorer konqueror safari opera firefox hack tip trick
