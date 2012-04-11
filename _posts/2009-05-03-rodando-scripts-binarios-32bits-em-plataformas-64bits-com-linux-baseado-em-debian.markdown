--- 
layout: post
title: "Rodando scripts bin\xC3\xA1rios 32bits em plataformas 64bits com linux baseado em Debian"
wordpress_id: 325
wordpress_url: http://rafael.adm.br/?p=325
date: 2009-05-03 00:39:55 -03:00
---
<strong> Atualizado:</strong> Pareceu o dia inteiro, quando escrevi isso, mas depois constatei que foram umas 5 horas.

Hoje eu passei <strong>o dia inteiro</strong> tentando colocar um script binário escrito em C, para rodar no meu servidor novo. Depois de <a href="http://twitter.com/rafaelp/status/1683570361">quebrar muito a cabeça</a> entrei no chat do serviço de hospedagem, pois já estava achando que era problema de hardware ou das máquinas virtuais.

O suporte em princípio não ajudou muito mas no final, quando eu citei que conseguia fazer o script rodar em outro servidor, o atendente do suporte me perguntou se eu sabia se o outro servidor era 32bits.

Só neste momento que eu me liguei neste problema. Nem tinha pensando nisso até então. Entrei na página do script e vi que ele era escrito para a plataforma 32bits.

Uma rápida busca me levou para a página <a href="http://alioth.debian.org/docman/view.php/30192/21/debian-amd64-howto.html#id292205">The Debian GNU/Linux AMD64 HOW-TO</a>

Como uso Ubuntu na máquina virtual, fiz o primeiro passo que era instalar o pacote ia32-libs e <a href="http://twitter.com/rafaelp/status/1683587234">tudo funcionou</a>.
<pre lang="bash">apt-get install ia32-libs</pre>
A título de indexação nos sistemas de busca, colocarei abaixo os erros que encontrei durante o processo.

Premature end of script headers:
(2)No such file or directory: exec of /xxx failed
HTTP Error 500 - Internal server error

Como era um script cgi, mais algumas palavras chaves são relevantes: apache apache2 cgi-bin script Options ExecCGI script-alias SetHandler cgi-script

Por hoje chega!
