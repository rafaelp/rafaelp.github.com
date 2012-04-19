--- 
layout: post
status: publish
published: true
title: "Como resolver o problema de lentid\xC3\xA3o do Rubygems com Github"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 248
wordpress_url: http://rafael.adm.br/?p=248
date: 2008-09-20 12:17:47 -03:00
categories: 
- Posts
tags: 
- rails
- ruby
- github
- gem
- rubygems
---
Toda vez que eu ia instalar uma nova gem, eu tinha que esperar a atualização dos metadados de todas as novidades do GitHub. Isso era um pé no saco pois tornava uma simples instalação muiiiiito lenta.

Encontrei <a href="http://github.com/blog/97-github-loves-rubygems-1-2">este post</a> no blog do GitHub que explica como resolver o problema.

Primeiro atualize o RubyGems para uma versão 1.2 ou mais nova.
<pre lang="bash">$ sudo gem update --system
$ gem sources -a http://gems.github.com</pre>

Depois instale a gem chamada defunkt-github
<pre lang="bash">$ sudo gem install defunkt-github</pre>

Até a próxima!

Palavras chaves para o pessoal encontrar essa solução, pois eu penei pra consegur: rubygems, slow, slowness, github, metadata, every time, update, ruby, lento, lentidão, instalação, atualização.
