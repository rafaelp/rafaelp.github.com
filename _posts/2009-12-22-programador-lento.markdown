---
title: Programador lento
date: 2009-12-22 10:34:44 Z
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- c&oacute;digo
- programador
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 437
wordpress_url: http://rafael.adm.br/?p=437
---

Na <a href="http://myfreecomm.com.br">Myfreecomm</a> temos alguns programadores lentos, gra&ccedil;as a Deus. Conversando sobre isso com o <a href="http://henriquebastos.net">Henrique</a>, ele disse que merecia um post. Atendendo a pedidos, a&iacute; est&aacute;.

Depois de bastante tempo sem programar, eu passei dois dias escrevendo um pequeno sistema para integrar a parte de pagamento de uma aplica&ccedil;&atilde;o com o <a href="http://paypal.com">Paypal</a>.

O fato de ter voltado a programar, depois de mais de um ano apenas gerenciando projetos e equipes, e estudando metodologias &aacute;geis, me fez optar por escrever uma aplica&ccedil;&atilde;o 100% testada, em Ruby, utilizando Sinatra. Gostaria de aproveitar para agradecer o <a href="http://rafaelss.com/">Rafael Souza</a> que me ajudou bastante no in&iacute;cio.

A escolha de Ruby (ao inv&eacute;s de Python por exempo) e Sinatra (ao inv&eacute;s de Rails por exemplo), n&atilde;o importa. O que importa &eacute; que eu poderia fazer tudo &ldquo;scriptado&rdquo; (aka cuspido), mas achei que n&atilde;o deveria. O primeiro motivo &eacute; que se trata de um middleware para um processo cr&iacute;tico que n&atilde;o pode falhar, o pagamento. Segundo, por que na minha cabe&ccedil;a n&atilde;o fazia sentido cuspir um c&oacute;digo e fazer funcionar o mais r&aacute;pido poss&iacute;vel.

Isso me fez pensar sobre o paradoxo da qualidade x velocidade. A conclus&atilde;o que tirei das minhas reflex&otilde;es &eacute; que os programadores que se dizem lentos, na verdade n&atilde;o s&atilde;o lentos.

Para voc&ecirc; dizer que algu&eacute;m &eacute; lento, voc&ecirc; tem que comparar com outra pessoa. Lentid&atilde;o &eacute; relativo. Voc&ecirc; n&atilde;o &eacute; lento e ponto final, voc&ecirc; pode ser lento se comparado com outras pessoas.

Minha conclus&atilde;o foi que na verdade o &ldquo;programador lento&rdquo; faz as coisas no tempo em que elas realmente precisam para serem feitas da maneira que funciona. Na verdade, os outros que s&atilde;o r&aacute;pidos de mais. Adianta ser r&aacute;pido e ter bug?

Analisando sob essa &oacute;tica, e considerando a premissa de que a maioria das pessoas (r&aacute;pidas) fazem errado, vide relat&oacute;rio Chaos Report do Standish Group, posso dizer que programadores lentos s&atilde;o bem-vindos.

Hoje, eu vejo essa caracter&iacute;stica como um sintoma de que ele programa com boas pr&aacute;ticas e com o cuidado necess&aacute;rio para o software funcionar.

No final da conversa eu disse para o Henrique: <strong>&ldquo;Se em uma entrevista de emprego, um programador me diz que &eacute; lento, eu vou v&ecirc;-lo com bons olhos&rdquo;</strong>.

Abra&ccedil;o e at&eacute; a pr&oacute;xima.
