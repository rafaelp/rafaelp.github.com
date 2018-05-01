---
title: Cuidado ao fazer migra&ccedil;&atilde;o de reposit&oacute;rio subversion
date: 2009-04-22 13:22:40 Z
categories:
- Posts
tags:
- servidor
- svn
- subversion
- apache
- configura&ccedil;&atilde;o
- migra&ccedil;&atilde;o
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 315
wordpress_url: http://rafael.adm.br/?p=315
---

Este final de semana eu fiz uma migra&ccedil;&atilde;o de um servidor subversion. Como eu esperava, teria algumas dores de cabe&ccedil;a pois o subversion &eacute; muito sens&iacute;vel. Fiz muitos testes durane o processo e consegui uma maneira que funcionasse.

No final das contas consegui migrar todo o reposit&oacute;rio de um servidor para outro e manter a mesma URL de modo que ficasse transparente para os clients, evitando a necessidade de rodar um "svn switch --relocate" em cada working copy.

O problema &eacute; que quando fui usar hoje, dois dias depois, <strong>eu consegui acessar o reposit&oacute;rio pela web, mas n&atilde;o consegui fazer um checkout.</strong>

A Lei de Murphy est&aacute; a&iacute; para isso :-)

Depois de perquisar um pouqinho, descobri que foi uma configura&ccedil;&atilde;o que fiz por &uacute;ltimo e que &eacute; uma verdadeira pegadinha. No caso eu estou usando o Apache2 com mod_dav.

A pegadinha &eacute; que voc&ecirc; n&atilde;o pode configurar o DocumentRoot com o mesmo path do SVNParentPath. Tem outros casos que causam o mesmo problema, basicamente <strong>o fato de existir um diret&oacute;rio no DocumentRoot com o mesmo nome do reposit&oacute;rio controlado pelo DAV gera um conflito e o servidor se perde.</strong>

Mais informa&ccedil;&otilde;es sobre isso podem ser encontradas em: <a href="http://subversion.tigris.org/faq.html#301-error">http://subversion.tigris.org/faq.html#301-error</a>

Espero que seja &uacute;til!

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
