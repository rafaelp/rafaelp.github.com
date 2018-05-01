---
title: Page Up e Page Down no Terminal do Mac
date: 2008-09-09 03:07:01 Z
categories:
- Posts
tags:
- editor
- mac
- macos
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 239
wordpress_url: http://rafael.adm.br/?p=239
---

Cada vez que eu precisava editar um arquivo grande pelo terminal do mac estava sendo um parto. N&atilde;o conseguia de jeito nenhum usa o page up e page down.

Achei <a href="http://fdiv.net/2007/05/12/keybindings-in-macosx-terminal-app/">esse post</a> que fala sobre isso.

A solu&ccedil;&atilde;o &eacute; entrar na configura&ccedil;&atilde;o de Keyboard do Terminal e colocar para as teclas enviarem os seguintes strings:

End
\033[4~

Home
\033[1~

Page-Down 
\033[6~

Page-Up 
\033[5~

Agora sim!
