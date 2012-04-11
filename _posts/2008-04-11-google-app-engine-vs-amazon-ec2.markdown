--- 
layout: post
title: Google App Engine vs Amazon EC2
wordpress_id: 181
wordpress_url: http://rafael.adm.br/p/google-app-engine-vs-amazon-ec2/
date: 2008-04-11 15:56:40 -03:00
---
O Google lançou nesta semana o <a href="http://code.google.com/appengine/">Google App Engine</a> que é uma plataforma de <a href="http://en.wikipedia.org/wiki/Cloud_computing">Cloud Computing</a> para qualquer desenvolvedor realizar o deploy da sua aplicação de forma simples num ambiente escalável. A novidade já está causando burburinhos lá fora e realmente tem motivos para tal.

<strong>Você já imaginou desenvolver uma aplicação e oferecê-la ao mundo com a estrutura do Google?</strong>

Esta é a proposta! Entenda mais abaixo por que fiquei surpreendido com o App Engine.

Recentemente, escrevendo sobre <a href="http://rafael.adm.br/p/arquitetura-de-servidores-para-aplicacoes-rails/">Arquitetura de servidores para aplicações Rails</a>, citei o Amazon EC2, serviço de virtualização da Amazon Webservices. Quando conheci o EC2 fiquei bastante impressionado em ver como esse tipo de recurso está cada vez mais fácil de ser contratado e utilizado. Como previsto pelo pessoal do <a href="http://www.mit.edu">MIT</a> TI vai se tornar uma commodity como água e luz. A Amazon foi pioneira no serviço e Cloud Computing e fez um ótimo trabalho.

<strong>O EC2 é realmente um caso de sucesso e está bastante consolidado, mas o App Engine sai muito na frente nessa corrida justamente por causa da amplitude dos serviços do Google.</strong>

Em termos técnicos poderíamos dizer que a Amazon e o Google são excelentes e ambos estão fornecendo serviços de infra-estrutura para o desenvolvedor, mas por que o App Engine sai muito na frente?

Além de oferecer máquinas virtuais, o App Engine oferece a estrutura da tecnologia desenvolvida e usada pelo Google nos seus aplicativos para qualquer desenvolvedor.

Está incluso no "pacote" do App Engine:
<ul>
	<li>Framework de desenvolvimento - Bibliotecas e frameworks para facilitar a programação.</li>
	<li>Datastore - Mesma tecnologia usada pelo Gmai</li>
	<li>Google Accounts - Seu usuário poderá ser autenticado para usar sua aplicação com a conta do Google</li>
	<li>Relatórios - Um sistema similar ao Google Analytics que informa?a sobre as estatísticas do servidor, ou seja, uso de banda, processamento, memória e demais recursos.</li>
	<li>Conta Grátis - Você poderá utilizar gratuitamente com limite de uso para 5 milhoões de pageviews/mês e 500 MB</li>
</ul>
Estes são os aspectos que diferenciam o App Engine do EC2. O principal deles é a conta grátis, pois na Amazon, mesmo o valor sendo baixo, você já começa pagando e  apelo de não pagar NADA é de fato bem mais forte do que o utilizado pela Amazon no seu lançamento de que você paga MUITO POUCO.

<strong>Eu tenho algumas restrições quanto ao uso de alguns recursos do App Engine, mas dependendo de como as coisas caminharem, pode ser que este serviço se torne irresistível, como é o caso do próprio Analytics, que todo mundo usa.</strong>

Depois dessa análise, arrisco dizer que ambos os serviços não são concorrentes diretos. Acho que a tendência é que o App Engine abocanhe apenas as aplicações web enquanto o EC2 tome conta do resto de aplicativos e processamento que não estejam ligados à sites. Embora a Amazon estivesse caminhando para atender fortemente as aplicações we.

Vamos esperar para ver qual vai ser o resultado de mais uma briga de gigantes!

Abraços e até a próxima.
