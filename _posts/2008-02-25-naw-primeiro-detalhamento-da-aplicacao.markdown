--- 
layout: post
status: publish
published: true
title: "NAW: Primeiro detalhamento da aplica\xC3\xA7\xC3\xA3o"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 167
wordpress_url: http://rafael.adm.br/p/naw-primeiro-detalhamento-da-aplicacao/
date: 2008-02-25 11:52:41 -03:00
categories: 
- Posts
tags: 
- webapp
- Brainstorm
- marketing
- NAW
---
Este post faz parte de uma série chamada NAW (Nova Aplicação Web) que visa acompanhar <a href="http://rafael.adm.br/p/que-tal-acompanhar-o-nascimento-de-um-servico-web/">a criação de um serviço web</a> da idéia ao lançamento. <a href="http://rafael.adm.br/tag/naw">Todos os posts da série</a> iniciam com as letras NAW.

<hr /><strong>Nome decidido</strong>

O nome da aplicação já está definido. Ele foi resultado de um brainstorm que fiz com meu amigo Marcelo pelo Gtalk. Eu estive fazendo brainstorm de nomes com o pessoal que apresentei as idéias,  no final chegamos a uns 4 nomes legais, mas o que foi sugerido pelo Marcelo emplacou. Todos gostaram e não foram contra e isso determinou a escolha. A decisão foi feita após todos responderem um e-mail que enviei no dia 11/02 perguntando se aprovavam o nome sugerido.

<strong>Detalhamento das características</strong>

Durante o Carnaval, tirei um dia para passar para o papel tudo que eu estava pensando sobre a NAW. Não costumo trabalhar em viagens e férias, mas era de tarde, a galera estava tirando a soneca pós almoço e eu já tinha descançado.

Escrevi sete páginas do meu caderno. Comecei listando as problemáticas a serem resolvidas, o paradigma envolvido e algumas características. Abaixo listo o que pode ser divulgado:

<strong>Problemas</strong>

Quando digo problemas, não necessariamente são questões complicadas de serem resolvidas, mas situações que devem ser levadas em conta no momento do desenho da aplicação. São elas:
<ul>
	<li>Processamento</li>
	<li>Storage</li>
	<li>Banda (transferência de dados)</li>
	<li>Modalidade de cobrança (billing)</li>
	<li>Escalabilidade</li>
	<li>Pontualidade na informação (just-in-time-information)</li>
	<li>Interface com serviço de e-mail</li>
</ul>
Os trê primeiros itens são "problemas" básicos de qualquer aplicação web. Os três últimos são características da NAW.

<strong>Características</strong>

Algumas características da estrutura do sistema para internacionalização, não do sistema em si. São elas:
<ul>
	<li>Sistema de tradução on-line</li>
	<li>Escrito todo em inglês (código e interface)</li>
	<li>Pouco texto na interface (para facilitar tradução)</li>
	<li>Opções de internacionalização</li>
</ul>
Já estou acostumado com a maioria destes pré-requisitos, se podemos chamar assim. Todo código (de programação) que escrevo, de uns 5 anos pra cá, é em inglês. Isso foi uma decisão tomada que não me arrependo. As variáveis, campos, etc, tudo em inglês.

O <a href="http://bielbid.com.br">BielBid</a>, por exemplo, além de ter o código em inglês, teve a interface escrita em inglês. Ou seja, foi escrito em inglês e traduzido para o português. Pretendo fazer desta maneira na NAW.

<strong>Anatomia</strong>

Após levantar as características acima, comecei definindo as grandes entidades do sistema, como por exemplo, Conta e Usuários. Além destes dois, defini mais duas grandes entidades mestres que não posso divulgar ainda pois poderia explanar o que é a aplicação e ainda está muito cedo para isso.

Desenhei a relação entre as entidades, seus dados e escrevi um pouco do fluxo de dados para as ações de cada entidade. Um dos fluxos foi o de Criação de Conta que está relacionado às entidades de Conta e Usuário.

No final das contas eu tive como resultado final uma grande visão geral da anatomia da aplicação. Chamo de anatonia da aplicação o seu funcionamento, com as entidades e dados que serão manipulados, as informações que serão obtidas e uma idéia sobre como será a interação de uso.

Realizando este trabalho consegui enxergar com mais clareza o caminho para solucionar a questão da cobrança e comercialização do serviço.

<strong>Apresentação</strong>

O próximo passo é passar este rascunho a limpo, criar uma apresentação, gerar um PDF e apresentar a idéia mais detalhada para o pessoal convidado a desenvolver. Neste momento já é necessário montar a equipe e distribuir as tarefas. Trabalhar sozinho nisso requer muito tempo livre e faz com que o andamento seja muito devagar.

Abraços e até a próxima!
