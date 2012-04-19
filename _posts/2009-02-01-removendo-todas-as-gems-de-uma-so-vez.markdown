--- 
layout: post
status: publish
published: true
title: "Removendo todas as gems de uma s\xC3\xB3 vez"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 276
wordpress_url: http://rafael.adm.br/?p=276
date: 2009-02-01 14:07:17 -02:00
categories: 
- Posts
tags: 
- rails
- ruby
- gem
- rubygems
---
Para remover todas as gems instaladas em um sistema basta rodar o comando abaixo:

<pre lang="bash">sudo gem uninstall --a -x --ignore-dependencies .+</pre>

Abraço e até a próxima.
