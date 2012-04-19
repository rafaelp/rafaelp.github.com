---
layout: post
status: publish
published: true
title: Rodando scripts bin&aacute;rios 32bits em plataformas 64bits com linux baseado
  em Debian
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 325
wordpress_url: http://rafael.adm.br/?p=325
date: 2009-05-03 00:39:55.000000000 -03:00
categories:
- Posts
tags:
- web
- servidores
- servidor
- apache
- configura&ccedil;&atilde;o
- script
---
<strong> Atualizado:</strong> Pareceu o dia inteiro, quando escrevi isso, mas depois constatei que foram umas 5 horas.

Hoje eu passei <strong>o dia inteiro</strong> tentando colocar um script bin&aacute;rio escrito em C, para rodar no meu servidor novo. Depois de <a href="http://twitter.com/rafaelp/status/1683570361">quebrar muito a cabe&ccedil;a</a> entrei no chat do servi&ccedil;o de hospedagem, pois j&aacute; estava achando que era problema de hardware ou das m&aacute;quinas virtuais.

O suporte em princ&iacute;pio n&atilde;o ajudou muito mas no final, quando eu citei que conseguia fazer o script rodar em outro servidor, o atendente do suporte me perguntou se eu sabia se o outro servidor era 32bits.

S&oacute; neste momento que eu me liguei neste problema. Nem tinha pensando nisso at&eacute; ent&atilde;o. Entrei na p&aacute;gina do script e vi que ele era escrito para a plataforma 32bits.

Uma r&aacute;pida busca me levou para a p&aacute;gina <a href="http://alioth.debian.org/docman/view.php/30192/21/debian-amd64-howto.html#id292205">The Debian GNU/Linux AMD64 HOW-TO</a>

Como uso Ubuntu na m&aacute;quina virtual, fiz o primeiro passo que era instalar o pacote ia32-libs e <a href="http://twitter.com/rafaelp/status/1683587234">tudo funcionou</a>.
<pre lang="bash">apt-get install ia32-libs</pre>
A t&iacute;tulo de indexa&ccedil;&atilde;o nos sistemas de busca, colocarei abaixo os erros que encontrei durante o processo.

Premature end of script headers:
(2)No such file or directory: exec of /xxx failed
HTTP Error 500 - Internal server error

Como era um script cgi, mais algumas palavras chaves s&atilde;o relevantes: apache apache2 cgi-bin script Options ExecCGI script-alias SetHandler cgi-script

Por hoje chega!
