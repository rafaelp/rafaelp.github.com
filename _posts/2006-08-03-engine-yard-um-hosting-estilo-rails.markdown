--- 
layout: post
status: publish
published: true
title: "Engine Yard: Um hosting estilo Rails"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 63
wordpress_url: http://rafael.adm.br/p/engine-yard-um-hosting-estilo-rails/
date: 2006-08-03 01:21:42 -03:00
categories: 
- Posts
tags: 
- desenvolvimento
- "programa\xC3\xA7\xC3\xA3o"
- rails
- Tecnologia
- servidores
- infra-estrutura
---
Estou muito perto de lançar o <a href="http://bielbid.com.br">sistema web de e-Procurement BielBid</a> e estive estudando mais a fundo a questão do deployment, que significa colocar o site on-line ou subir para o(s) servidor(es) de produção.

Achei diversos blogs, artigos e livros interessantes, dando diversas <a href="http://duncandavidson.com/essay/2005/12/railsdeployment">lições</a>, sobre o <a href="http://manuals.rubyonrails.com/read/book/17">Capistrano</a>, <a href="http://railsbench.rubyforge.org/">Railsbench</a>, <a href="http://www.fepus.net/ruby1line.txt">commands</a>, e mais.

Porém um site me chamou a atenção: <a href="http://engineyard.com">Engine Yard</a>.

Ultimamente andei meio impressionado com o número de novas aplicações web que estão surgindo. O <a href="http://www.postbubble.com/">PostBubble</a> apresenta diariamente novas aplicações, na maioria das vezes, mais de uma por dia. Refletindo um pouco mais comecei a pensar sobre a oportunidade de mercado em atender este público, desenvolvedores de aplicações web.

Comecei a relacionar os serviços que eu mesmo contrataria, dentre eles a maioria relativo à infra-estrutua, ou seja, <a href="http://www.hyperspin.com/">monitoramente dos servidores</a>, <a href="http://heartbeat.highgroove.com/">monitoramento da aplicação</a>, segurança, etc.

<strong>O Engine Yard é justamente uma solução completa de hospedagem (deployment solution) para aplicação Rails.</strong>

Eles comercializam os chamados <em>slices</em>. Cada <em>slice</em> possui:
<ul>
	<li>Conexão à internet redundante</li>
	<li>Switch redundante</li>
	<li>Load Balance redundante</li>
	<li>Servidor Web redundante</li>
	<li>MySql redundante</li>
</ul>

Resumindo: Toda a estrutura de servidores HA Cluster (<a href="http://en.wikipedia.org/wiki/High-availability_cluster">High Availablility Cluster</a>)

O ideal é contratar 3 <em>slices</em>. Um para o ambiente de qualidade (staging environment) e dois para o ambiente de produção (production environment), que estariam sendo espelhados e controlados pelo load balancing, de forma que não haja nenhum ponto de falha.

<strong>A idéia é garantir que sua aplicação estará sempre on-line e oferecer um suporte completo de infra-estrutura de servidores.</strong>

Eu andava procurando isto a bastante tempo! Não tinha achado ainda nenhuma empresa com uma solução pronta e completa.

Desvantagens:
<ul>
	<li>Não são servidores dedicados</li>
	<li>Você não tem senha de root</li>
	<li><strike>Novos pacotes e gems devem ser solicitados antes para instalação</strike></li>
</ul>

<strong>Atualizado 03/08/2006:</strong>

<blockquote>Você não precisa solicitar pacotes e gems, haverá uma interface web de administração que fará tudo por você, esceto nos casos de pacotes ou gems que nunca foram solicitados antes por ninguém.

"You can do almost everything you need to do from the web
interface, so you may not even need us to "install packages", unless
it is something that has never been requested by anyone and we
actually have not put it on the cluster before."</blockquote>

Embora existam estas <strike>três</strike> duas desvantagens, após trocar 14 emails e tirar praticamente todas as dúvidas, cheguei a conclusão que a proposta é boa. A idéia e te deixar despreocupado e a vontade para solicitar, que eles estão dispostos a instalar tudo que você precise.

<strong>"We're trying to make Rails hosting as cool as Rails itself."</strong>

"Nós estamos tentando fazer o host tão legal (elegante) como o próprio Rails"

Prova disso é o fato de oferecerem, inclusive, as receitas para o Capistrano (Rake tasks).

Confesso que gostei muito da proposta e não foi à toa que escrevi este post afim de divulgar. Não tenho nenhuma relação de amizade e conhecimento com ninguém do Engine Yard, passei a conhecê-los hoje quando entrei em contato para tirar minha dúvidas sobre o serviço.

Espero que gostem e a dica seja útil!
