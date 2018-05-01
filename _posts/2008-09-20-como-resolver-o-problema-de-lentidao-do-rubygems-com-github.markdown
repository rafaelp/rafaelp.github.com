---
title: Como resolver o problema de lentid&atilde;o do Rubygems com Github
date: 2008-09-20 15:17:47 Z
categories:
- Posts
tags:
- rails
- ruby
- github
- gem
- rubygems
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 248
wordpress_url: http://rafael.adm.br/?p=248
---

Toda vez que eu ia instalar uma nova gem, eu tinha que esperar a atualiza&ccedil;&atilde;o dos metadados de todas as novidades do GitHub. Isso era um p&eacute; no saco pois tornava uma simples instala&ccedil;&atilde;o muiiiiito lenta.

Encontrei <a href="http://github.com/blog/97-github-loves-rubygems-1-2">este post</a> no blog do GitHub que explica como resolver o problema.

Primeiro atualize o RubyGems para uma vers&atilde;o 1.2 ou mais nova.
<pre lang="bash">$ sudo gem update --system
$ gem sources -a http://gems.github.com</pre>

Depois instale a gem chamada defunkt-github
<pre lang="bash">$ sudo gem install defunkt-github</pre>

At&eacute; a pr&oacute;xima!

Palavras chaves para o pessoal encontrar essa solu&ccedil;&atilde;o, pois eu penei pra consegur: rubygems, slow, slowness, github, metadata, every time, update, ruby, lento, lentid&atilde;o, instala&ccedil;&atilde;o, atualiza&ccedil;&atilde;o.
