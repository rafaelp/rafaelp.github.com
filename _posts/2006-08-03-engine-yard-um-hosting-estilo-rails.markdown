---
title: 'Engine Yard: Um hosting estilo Rails'
date: 2006-08-03 01:21:42 -03:00
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- rails
- Tecnologia
- servidores
- infra-estrutura
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 63
wordpress_url: http://rafael.adm.br/p/engine-yard-um-hosting-estilo-rails/
---

Estou muito perto de lan&ccedil;ar o <a href="http://bielbid.com.br">sistema web de e-Procurement BielBid</a> e estive estudando mais a fundo a quest&atilde;o do deployment, que significa colocar o site on-line ou subir para o(s) servidor(es) de produ&ccedil;&atilde;o.

Achei diversos blogs, artigos e livros interessantes, dando diversas <a href="http://duncandavidson.com/essay/2005/12/railsdeployment">li&ccedil;&otilde;es</a>, sobre o <a href="http://manuals.rubyonrails.com/read/book/17">Capistrano</a>, <a href="http://railsbench.rubyforge.org/">Railsbench</a>, <a href="http://www.fepus.net/ruby1line.txt">commands</a>, e mais.

Por&eacute;m um site me chamou a aten&ccedil;&atilde;o: <a href="http://engineyard.com">Engine Yard</a>.

Ultimamente andei meio impressionado com o n&uacute;mero de novas aplica&ccedil;&otilde;es web que est&atilde;o surgindo. O <a href="http://www.postbubble.com/">PostBubble</a> apresenta diariamente novas aplica&ccedil;&otilde;es, na maioria das vezes, mais de uma por dia. Refletindo um pouco mais comecei a pensar sobre a oportunidade de mercado em atender este p&uacute;blico, desenvolvedores de aplica&ccedil;&otilde;es web.

Comecei a relacionar os servi&ccedil;os que eu mesmo contrataria, dentre eles a maioria relativo &agrave; infra-estrutua, ou seja, <a href="http://www.hyperspin.com/">monitoramente dos servidores</a>, <a href="http://heartbeat.highgroove.com/">monitoramento da aplica&ccedil;&atilde;o</a>, seguran&ccedil;a, etc.

<strong>O Engine Yard &eacute; justamente uma solu&ccedil;&atilde;o completa de hospedagem (deployment solution) para aplica&ccedil;&atilde;o Rails.</strong>

Eles comercializam os chamados <em>slices</em>. Cada <em>slice</em> possui:
<ul>
	<li>Conex&atilde;o &agrave; internet redundante</li>
	<li>Switch redundante</li>
	<li>Load Balance redundante</li>
	<li>Servidor Web redundante</li>
	<li>MySql redundante</li>
</ul>

Resumindo: Toda a estrutura de servidores HA Cluster (<a href="http://en.wikipedia.org/wiki/High-availability_cluster">High Availablility Cluster</a>)

O ideal &eacute; contratar 3 <em>slices</em>. Um para o ambiente de qualidade (staging environment) e dois para o ambiente de produ&ccedil;&atilde;o (production environment), que estariam sendo espelhados e controlados pelo load balancing, de forma que n&atilde;o haja nenhum ponto de falha.

<strong>A id&eacute;ia &eacute; garantir que sua aplica&ccedil;&atilde;o estar&aacute; sempre on-line e oferecer um suporte completo de infra-estrutura de servidores.</strong>

Eu andava procurando isto a bastante tempo! N&atilde;o tinha achado ainda nenhuma empresa com uma solu&ccedil;&atilde;o pronta e completa.

Desvantagens:
<ul>
	<li>N&atilde;o s&atilde;o servidores dedicados</li>
	<li>Voc&ecirc; n&atilde;o tem senha de root</li>
	<li><strike>Novos pacotes e gems devem ser solicitados antes para instala&ccedil;&atilde;o</strike></li>
</ul>

<strong>Atualizado 03/08/2006:</strong>

<blockquote>Voc&ecirc; n&atilde;o precisa solicitar pacotes e gems, haver&aacute; uma interface web de administra&ccedil;&atilde;o que far&aacute; tudo por voc&ecirc;, esceto nos casos de pacotes ou gems que nunca foram solicitados antes por ningu&eacute;m.

"You can do almost everything you need to do from the web
interface, so you may not even need us to "install packages", unless
it is something that has never been requested by anyone and we
actually have not put it on the cluster before."</blockquote>

Embora existam estas <strike>tr&ecirc;s</strike> duas desvantagens, ap&oacute;s trocar 14 emails e tirar praticamente todas as d&uacute;vidas, cheguei a conclus&atilde;o que a proposta &eacute; boa. A id&eacute;ia e te deixar despreocupado e a vontade para solicitar, que eles est&atilde;o dispostos a instalar tudo que voc&ecirc; precise.

<strong>"We're trying to make Rails hosting as cool as Rails itself."</strong>

"N&oacute;s estamos tentando fazer o host t&atilde;o legal (elegante) como o pr&oacute;prio Rails"

Prova disso &eacute; o fato de oferecerem, inclusive, as receitas para o Capistrano (Rake tasks).

Confesso que gostei muito da proposta e n&atilde;o foi &agrave; toa que escrevi este post afim de divulgar. N&atilde;o tenho nenhuma rela&ccedil;&atilde;o de amizade e conhecimento com ningu&eacute;m do Engine Yard, passei a conhec&ecirc;-los hoje quando entrei em contato para tirar minha d&uacute;vidas sobre o servi&ccedil;o.

Espero que gostem e a dica seja &uacute;til!
