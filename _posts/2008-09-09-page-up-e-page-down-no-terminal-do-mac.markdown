--- 
layout: post
status: publish
published: true
title: Page Up e Page Down no Terminal do Mac
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 239
wordpress_url: http://rafael.adm.br/?p=239
date: 2008-09-09 00:07:01 -03:00
categories: 
- Posts
tags: 
- editor
- mac
- macos
---
Cada vez que eu precisava editar um arquivo grande pelo terminal do mac estava sendo um parto. Não conseguia de jeito nenhum usa o page up e page down.

Achei <a href="http://fdiv.net/2007/05/12/keybindings-in-macosx-terminal-app/">esse post</a> que fala sobre isso.

A solução é entrar na configuração de Keyboard do Terminal e colocar para as teclas enviarem os seguintes strings:

End
\033[4~

Home
\033[1~

Page-Down 
\033[6~

Page-Up 
\033[5~

Agora sim!
