--- 
layout: post
status: publish
published: true
title: "Cuidado ao fazer migra\xC3\xA7\xC3\xA3o de reposit\xC3\xB3rio subversion"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 315
wordpress_url: http://rafael.adm.br/?p=315
date: 2009-04-22 10:22:40 -03:00
categories: 
- Posts
tags: 
- servidor
- svn
- subversion
- apache
- "configura\xC3\xA7\xC3\xA3o"
- "migra\xC3\xA7\xC3\xA3o"
---
Este final de semana eu fiz uma migração de um servidor subversion. Como eu esperava, teria algumas dores de cabeça pois o subversion é muito sensível. Fiz muitos testes durane o processo e consegui uma maneira que funcionasse.

No final das contas consegui migrar todo o repositório de um servidor para outro e manter a mesma URL de modo que ficasse transparente para os clients, evitando a necessidade de rodar um "svn switch --relocate" em cada working copy.

O problema é que quando fui usar hoje, dois dias depois, <strong>eu consegui acessar o repositório pela web, mas não consegui fazer um checkout.</strong>

A Lei de Murphy está aí para isso :-)

Depois de perquisar um pouqinho, descobri que foi uma configuração que fiz por último e que é uma verdadeira pegadinha. No caso eu estou usando o Apache2 com mod_dav.

A pegadinha é que você não pode configurar o DocumentRoot com o mesmo path do SVNParentPath. Tem outros casos que causam o mesmo problema, basicamente <strong>o fato de existir um diretório no DocumentRoot com o mesmo nome do repositório controlado pelo DAV gera um conflito e o servidor se perde.</strong>

Mais informações sobre isso podem ser encontradas em: <a href="http://subversion.tigris.org/faq.html#301-error">http://subversion.tigris.org/faq.html#301-error</a>

Espero que seja útil!

Abraços e até a próxima.
