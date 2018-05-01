---
title: Better gsub method for Prototype library.
date: 2006-07-14 20:32:04 Z
categories:
- Posts
tags:
- programa&ccedil;&atilde;o
- rails
- ruby
- javascript
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 57
wordpress_url: http://rafael.adm.br/p/better-gsub-method-for-prototype-library/
---

Today I needed to use the method <strong>gsub</strong> implemented by the <a href="http://prototype.conio.net/">Prototype</a>, the javascript library used by <a href="http://rubyonrails.com/">Rails</a>. I perceived that it was a little different of <a href="http://corelib.rubyonrails.com/classes/String.html#M001538">ruby's one</a>.

<strong>The ruby method return a array if called without replacement string, but prototype's doesn't.</strong>

So, I wrote my own gsub method to be used with prototype that return an array when called without replacement string.

Enjoy!

[js]
// Code by Rafael Lima (http://rafael.adm.br)
Object.extend(String.prototype, {
  gsub: function(pattern, replacement) {
    var result = new Array(), source = this, match;
    var replace = (undefined != replacement)
    if (replace) {
      replacement = arguments.callee.prepareReplacement(replacement);
    }

    while (source.length > 0) {
      if (match = source.match(pattern)) {
        result[result.length] = source.slice(0, match.index) + ((replace) ? (replacement(match) || '').toString() : match[0] );
        source  = source.slice(match.index + match[0].length);
      } else {
        result[result.length] = source, source = '';
      }
    }
    return (replace) ? result.join('') : result;
  }
});
[/js]
