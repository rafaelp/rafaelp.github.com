--- 
layout: post
status: publish
published: true
title: Montando uma sistem&aacute;tica de deploy para o Podcast
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 216
wordpress_url: http://rafael.adm.br/?p=216
date: 2008-08-27 21:58:45 -03:00
categories: 
- Posts
tags: 
- dicas
- podcast
- mac
- macos
- automatiza&ccedil;&atilde;o
---
Todos n&oacute;s sabemos que um projeto de software que n&atilde;o possui um deploy seguro e autom&aacute;tico acaba falhando em algum momento. O deploy &eacute; o ato de colocar o que foi desenvolvido em produ&ccedil;&atilde;o.

Os projetos que n&atilde;o possuem um bom sistema de deploy, acabam acumulando muitas tarefas antes de virar para produ&ccedil;&atilde;o. Isso ocorre por n&atilde;o justificar gastar, por exemplo, o dobro de tempo gasto no que foi desenvolvido somente para fazer a entrega.

Ai sabe como &eacute; que &eacute;, o tudao.tar.gz demora pra ser enviado, problemas de falta de arquivo, ningu&eacute;m dorme, e aquela hist&oacute;ria de sempre.

Se voc&ecirc; est&aacute; desenvolvendo para web, utilize o <a href="http://capify.org">Capistrano</a>. Mas este post n&atilde;o &eacute; sobre isso.

Essa introdu&ccedil;&atilde;o &eacute; uma justificativa para o sistema de deploy que eu montei para o meu <a href="http://rafael.adm.br/voltandopracasa">podcast Voltando pra Casa</a>.

Desde que tive <a href="http://rafael.adm.br/p/a-ideia/">a id&eacute;ia de fazer o podcast</a>, eu sabia que se eu n&atilde;o montasse um esquema automatizado para a publica&ccedil;&atilde;o, acabaria n&atilde;o mantendo com a freq&uuml;&ecirc;ncia desejada de um podcast por dia.

Comecei a pensar no fluxo necess&aacute;rio e cheguei &agrave; seguinte proposta:
<ol>
	<li>Gravo no meu Celular Nokia N95 os arquivos</li>
	<li>Ao ligar o MacBook o script de sincroniza&ccedil;&atilde;o (de contatos e agenda) rodaria tamb&eacute;m a sincroniza&ccedil;&atilde;o dos audios gravados. (isso ainda n&atilde;o rolou)</li>
	<li>Um programa escrito em Ruby e Shoes abriria perguntando quais arquivos eu desejo publicar. (isso n&atilde;o vai rolar, usei a abordagem de workflow por diret&oacute;rio)</li>
	<li>Ao selecionar os arquivos, eles entram em fila para serem processados.</li>
	<li>A rotina de processamento, faz um mix colocando um wav padr&atilde;o no in&iacute;cio e no final de cada arquivo.</li>
	<li>Os arquivos j&aacute; mixados s&atilde;o convertidos de .wav para .mp3</li>
	<li>Em seguida, as tags ID3 s&atilde;o aplicadas em cada arquivos convertido</li>
	<li>Eles s&atilde;o enviados por ftp para o meu servidor de hospedagem</li>
	<li>Um post &eacute; criado no WordPress pelo XML-RPC e salvo como rascunho</li>
	<li>O firefox &eacute; aberto na p&aacute;gina do post para eu edit&aacute;-lo e public&aacute;-lo</li>
</ol>
Resumindo, minha intera&ccedil;&atilde;o se restringe a escolher quais arquivos gravados no celular ser&atilde;o convertidos em podcast e depois publicar no momento que achar oportuno.

Desta maneira a chance de eu conseguir manter este podcast aumenta bastante!

Vou publicar este script em breve no GitHub em <a href="http://github.com/rafaelp/podcast-deployment">http://github.com/rafaelp/podcast-deployment</a>

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
