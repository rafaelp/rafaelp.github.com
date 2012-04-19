--- 
layout: post
status: publish
published: true
title: Arquitetura de servidores para aplica&ccedil;&otilde;es Rails
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 156
wordpress_url: http://rafael.adm.br/p/arquitetura-de-servidores-para-aplicacoes-rails/
date: 2008-01-11 14:01:07 -02:00
categories: 
- Posts
tags: 
- rails
- webapp
- servidores
- tend&ecirc;ncias
- web-services
- datacenter
---
Eu estudei ontem v&aacute;rias op&ccedil;&otilde;es de arquitetura para aplica&ccedil;&otilde;es web, focando um pouco em Rails. Eu queria chegar h&aacute; uma op&ccedil;&atilde;o econ&ocirc;mica que tivesse alta performance, alta disponibilidade e fosse altamente escal&aacute;vel.

Encontrei este excelente slide entitulado  <a href="http://www.slideshare.net/tim.lossen.de/how-to-build-a-stateoftheart-rails-cluster">How to build a state-of-art rails cluster</a>.

Tendo em m&atilde;os as informa&ccedil;&otilde;es do slide, entrei no <a href="https://www.cari.net">site do Datacenter Cari.net</a> e montrei uma cesta de compras com 5 servidores sendo 2 load balancers (web), 2 de aplica&ccedil;&atilde;o (app) e um de banco de dados (db).

N&atilde;o saiu caro, fiquei empolgado com a solu&ccedil;&atilde;o. Se eu n&atilde;o me engano algo em torno de $550/m&ecirc;s e um setup de $1.000.

Depois disso continuei lendo sobre outras op&ccedil;&otilde;es e cai no <a href="http://www.amazon.com/b/ref=sc_fe_l_2?ie=UTF8&node=201590011&no=3435361&me=A36L942TSJ2AJA">Amazon Elastic Compute Cloud</a> ou Amazon EC2 ou s&oacute; EC2. Eles disponibilizam m&aacute;quinas virtuais dedicadas por $0,10 por m&aacute;quina por minuto + uma micharia por consumo de banda, ou seja, voc&ecirc; pode ter o equivalente a um processador 1.7gh com 1.75GB RAM 160GB RAM e 250Mb/s de Banda por apenas $72/m&ecirc;s.

Com a grana da primeira op&ccedil;&atilde;o &eacute; poss&iacute;vel pagar tranq&uuml;ilamente 7 m&aacute;quinas virtuais na Amazon e sem custo de setup.

Encontrei o projeto <a href="http://ec2onrails.rubyforge.org/">EC on Rails</a> que &eacute; uma imagem para o EC2 que j&aacute; vem com tudo instalado para voc&ecirc; hospedar um site em Rails. J&aacute; vem inclusive com os gems e rake tasks que facilitam o deploy e gerenciamento da m&aacute;quina virtual.

Fique mais empolgado ainda, mas como nem tudo &eacute; m&aacute;gica, n&atilde;o demorou muito para eu encontrar as restri&ccedil;&otilde;es. O EC2 n&atilde;o possui IP fixo nem storage persistente. Isso quer dizer que toda vez que a m&aacute;quina virtual for reiniciada ela ter&aacute; um novo IP e o disco estar&aacute; "vazio", ou seja, somente com a imagem, sem nenhum arquivo criado durante a utiliza&ccedil;&atilde;o anterior.

O problema do IP fixo pode ser contornado com o <a href="http://weoceo.weogeo.com/">WeoCEO</a>, sistema de load balancing e escalonamento para EC2. N&atilde;o deixe de ver o <a href="http://weoceo.weogeo.com/video/">v&iacute;deo</a>. Este custa $0,05 por m&aacute;quina por minuto de uso.

A quest&atilde;o da falta de storage permanente a princ&iacute;pio pode ser contornada com o <a href="http://www.amazon.com/gp/browse.html?node=16427261">S3</a>, web service da Amazon para storage.&nbsp; <a href="http://www.slideshare.net/martin.rehfeld/s3-and-ec2-rails-scenarios">Este slide</a> mostra algumas op&ccedil;&otilde;es para o banco de dados, que &eacute; o problema maior. Todas elas ainda s&atilde;o experimentais. Por enquanto a solu&ccedil;&atilde;o &eacute; copiar o banco de dados todo para o S# de tempos em tempos, mas usando esta op&ccedil;&atilde;o, em caso de falhas, voc&ecirc; perde tudo que foi feito do momento do &uacute;ltimo backup at&eacute; o momento da falha, o que &eacute; inaceit&aacute;vel para sistemas em produ&ccedil;&atilde;o.

Resumindo, o EC2 &eacute; uma grande promessa para arquiteturas de aplica&ccedil;&otilde;es web em produ&ccedil;&atilde;o, mas por enquanto &eacute; aconselh&aacute;vel utilizar apenas para ambientes de qualidade (staging).

A princ&iacute;pio o uso do EC2 deve ser realizado apena para processamento, ou seja, recebe dados, processa e joga pra fora. Caso voc&ecirc; precise hospedar uma solu&ccedil;&atilde;o database-driven, procure os servidores dedicados.

Este foi um resumo do que estudei ontem, espero que possa ser &uacute;til de alguma forma.
