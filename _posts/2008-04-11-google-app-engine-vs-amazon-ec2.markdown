--- 
layout: post
status: publish
published: true
title: Google App Engine vs Amazon EC2
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 181
wordpress_url: http://rafael.adm.br/p/google-app-engine-vs-amazon-ec2/
date: 2008-04-11 15:56:40 -03:00
categories: 
- Posts
tags: 
- webapp
- servidores
- tend&ecirc;ncias
- web-services
- datacenter
- escalabilidade
---
O Google lan&ccedil;ou nesta semana o <a href="http://code.google.com/appengine/">Google App Engine</a> que &eacute; uma plataforma de <a href="http://en.wikipedia.org/wiki/Cloud_computing">Cloud Computing</a> para qualquer desenvolvedor realizar o deploy da sua aplica&ccedil;&atilde;o de forma simples num ambiente escal&aacute;vel. A novidade j&aacute; est&aacute; causando burburinhos l&aacute; fora e realmente tem motivos para tal.

<strong>Voc&ecirc; j&aacute; imaginou desenvolver uma aplica&ccedil;&atilde;o e oferec&ecirc;-la ao mundo com a estrutura do Google?</strong>

Esta &eacute; a proposta! Entenda mais abaixo por que fiquei surpreendido com o App Engine.

Recentemente, escrevendo sobre <a href="http://rafael.adm.br/p/arquitetura-de-servidores-para-aplicacoes-rails/">Arquitetura de servidores para aplica&ccedil;&otilde;es Rails</a>, citei o Amazon EC2, servi&ccedil;o de virtualiza&ccedil;&atilde;o da Amazon Webservices. Quando conheci o EC2 fiquei bastante impressionado em ver como esse tipo de recurso est&aacute; cada vez mais f&aacute;cil de ser contratado e utilizado. Como previsto pelo pessoal do <a href="http://www.mit.edu">MIT</a> TI vai se tornar uma commodity como &aacute;gua e luz. A Amazon foi pioneira no servi&ccedil;o e Cloud Computing e fez um &oacute;timo trabalho.

<strong>O EC2 &eacute; realmente um caso de sucesso e est&aacute; bastante consolidado, mas o App Engine sai muito na frente nessa corrida justamente por causa da amplitude dos servi&ccedil;os do Google.</strong>

Em termos t&eacute;cnicos poder&iacute;amos dizer que a Amazon e o Google s&atilde;o excelentes e ambos est&atilde;o fornecendo servi&ccedil;os de infra-estrutura para o desenvolvedor, mas por que o App Engine sai muito na frente?

Al&eacute;m de oferecer m&aacute;quinas virtuais, o App Engine oferece a estrutura da tecnologia desenvolvida e usada pelo Google nos seus aplicativos para qualquer desenvolvedor.

Est&aacute; incluso no "pacote" do App Engine:
<ul>
	<li>Framework de desenvolvimento - Bibliotecas e frameworks para facilitar a programa&ccedil;&atilde;o.</li>
	<li>Datastore - Mesma tecnologia usada pelo Gmai</li>
	<li>Google Accounts - Seu usu&aacute;rio poder&aacute; ser autenticado para usar sua aplica&ccedil;&atilde;o com a conta do Google</li>
	<li>Relat&oacute;rios - Um sistema similar ao Google Analytics que informa?a sobre as estat&iacute;sticas do servidor, ou seja, uso de banda, processamento, mem&oacute;ria e demais recursos.</li>
	<li>Conta Gr&aacute;tis - Voc&ecirc; poder&aacute; utilizar gratuitamente com limite de uso para 5 milho&otilde;es de pageviews/m&ecirc;s e 500 MB</li>
</ul>
Estes s&atilde;o os aspectos que diferenciam o App Engine do EC2. O principal deles &eacute; a conta gr&aacute;tis, pois na Amazon, mesmo o valor sendo baixo, voc&ecirc; j&aacute; come&ccedil;a pagando e&nbsp; apelo de n&atilde;o pagar NADA &eacute; de fato bem mais forte do que o utilizado pela Amazon no seu lan&ccedil;amento de que voc&ecirc; paga MUITO POUCO.

<strong>Eu tenho algumas restri&ccedil;&otilde;es quanto ao uso de alguns recursos do App Engine, mas dependendo de como as coisas caminharem, pode ser que este servi&ccedil;o se torne irresist&iacute;vel, como &eacute; o caso do pr&oacute;prio Analytics, que todo mundo usa.</strong>

Depois dessa an&aacute;lise, arrisco dizer que ambos os servi&ccedil;os n&atilde;o s&atilde;o concorrentes diretos. Acho que a tend&ecirc;ncia &eacute; que o App Engine abocanhe apenas as aplica&ccedil;&otilde;es web enquanto o EC2 tome conta do resto de aplicativos e processamento que n&atilde;o estejam ligados &agrave; sites. Embora a Amazon estivesse caminhando para atender fortemente as aplica&ccedil;&otilde;es we.

Vamos esperar para ver qual vai ser o resultado de mais uma briga de gigantes!

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
