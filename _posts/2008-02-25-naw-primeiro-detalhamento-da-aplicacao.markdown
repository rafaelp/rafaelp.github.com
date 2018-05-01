---
title: 'NAW: Primeiro detalhamento da aplica&ccedil;&atilde;o'
date: 2008-02-25 14:52:41 Z
categories:
- Posts
tags:
- webapp
- Brainstorm
- marketing
- NAW
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 167
wordpress_url: http://rafael.adm.br/p/naw-primeiro-detalhamento-da-aplicacao/
---

Este post faz parte de uma s&eacute;rie chamada NAW (Nova Aplica&ccedil;&atilde;o Web) que visa acompanhar <a href="http://rafael.adm.br/p/que-tal-acompanhar-o-nascimento-de-um-servico-web/">a cria&ccedil;&atilde;o de um servi&ccedil;o web</a> da id&eacute;ia ao lan&ccedil;amento. <a href="http://rafael.adm.br/tag/naw">Todos os posts da s&eacute;rie</a> iniciam com as letras NAW.

<hr /><strong>Nome decidido</strong>

O nome da aplica&ccedil;&atilde;o j&aacute; est&aacute; definido. Ele foi resultado de um brainstorm que fiz com meu amigo Marcelo pelo Gtalk. Eu estive fazendo brainstorm de nomes com o pessoal que apresentei as id&eacute;ias,  no final chegamos a uns 4 nomes legais, mas o que foi sugerido pelo Marcelo emplacou. Todos gostaram e n&atilde;o foram contra e isso determinou a escolha. A decis&atilde;o foi feita ap&oacute;s todos responderem um e-mail que enviei no dia 11/02 perguntando se aprovavam o nome sugerido.

<strong>Detalhamento das caracter&iacute;sticas</strong>

Durante o Carnaval, tirei um dia para passar para o papel tudo que eu estava pensando sobre a NAW. N&atilde;o costumo trabalhar em viagens e f&eacute;rias, mas era de tarde, a galera estava tirando a soneca p&oacute;s almo&ccedil;o e eu j&aacute; tinha descan&ccedil;ado.

Escrevi sete p&aacute;ginas do meu caderno. Comecei listando as problem&aacute;ticas a serem resolvidas, o paradigma envolvido e algumas caracter&iacute;sticas. Abaixo listo o que pode ser divulgado:

<strong>Problemas</strong>

Quando digo problemas, n&atilde;o necessariamente s&atilde;o quest&otilde;es complicadas de serem resolvidas, mas situa&ccedil;&otilde;es que devem ser levadas em conta no momento do desenho da aplica&ccedil;&atilde;o. S&atilde;o elas:
<ul>
	<li>Processamento</li>
	<li>Storage</li>
	<li>Banda (transfer&ecirc;ncia de dados)</li>
	<li>Modalidade de cobran&ccedil;a (billing)</li>
	<li>Escalabilidade</li>
	<li>Pontualidade na informa&ccedil;&atilde;o (just-in-time-information)</li>
	<li>Interface com servi&ccedil;o de e-mail</li>
</ul>
Os tr&ecirc; primeiros itens s&atilde;o "problemas" b&aacute;sicos de qualquer aplica&ccedil;&atilde;o web. Os tr&ecirc;s &uacute;ltimos s&atilde;o caracter&iacute;sticas da NAW.

<strong>Caracter&iacute;sticas</strong>

Algumas caracter&iacute;sticas da estrutura do sistema para internacionaliza&ccedil;&atilde;o, n&atilde;o do sistema em si. S&atilde;o elas:
<ul>
	<li>Sistema de tradu&ccedil;&atilde;o on-line</li>
	<li>Escrito todo em ingl&ecirc;s (c&oacute;digo e interface)</li>
	<li>Pouco texto na interface (para facilitar tradu&ccedil;&atilde;o)</li>
	<li>Op&ccedil;&otilde;es de internacionaliza&ccedil;&atilde;o</li>
</ul>
J&aacute; estou acostumado com a maioria destes pr&eacute;-requisitos, se podemos chamar assim. Todo c&oacute;digo (de programa&ccedil;&atilde;o) que escrevo, de uns 5 anos pra c&aacute;, &eacute; em ingl&ecirc;s. Isso foi uma decis&atilde;o tomada que n&atilde;o me arrependo. As vari&aacute;veis, campos, etc, tudo em ingl&ecirc;s.

O <a href="http://bielbid.com.br">BielBid</a>, por exemplo, al&eacute;m de ter o c&oacute;digo em ingl&ecirc;s, teve a interface escrita em ingl&ecirc;s. Ou seja, foi escrito em ingl&ecirc;s e traduzido para o portugu&ecirc;s. Pretendo fazer desta maneira na NAW.

<strong>Anatomia</strong>

Ap&oacute;s levantar as caracter&iacute;sticas acima, comecei definindo as grandes entidades do sistema, como por exemplo, Conta e Usu&aacute;rios. Al&eacute;m destes dois, defini mais duas grandes entidades mestres que n&atilde;o posso divulgar ainda pois poderia explanar o que &eacute; a aplica&ccedil;&atilde;o e ainda est&aacute; muito cedo para isso.

Desenhei a rela&ccedil;&atilde;o entre as entidades, seus dados e escrevi um pouco do fluxo de dados para as a&ccedil;&otilde;es de cada entidade. Um dos fluxos foi o de Cria&ccedil;&atilde;o de Conta que est&aacute; relacionado &agrave;s entidades de Conta e Usu&aacute;rio.

No final das contas eu tive como resultado final uma grande vis&atilde;o geral da anatomia da aplica&ccedil;&atilde;o. Chamo de anatonia da aplica&ccedil;&atilde;o o seu funcionamento, com as entidades e dados que ser&atilde;o manipulados, as informa&ccedil;&otilde;es que ser&atilde;o obtidas e uma id&eacute;ia sobre como ser&aacute; a intera&ccedil;&atilde;o de uso.

Realizando este trabalho consegui enxergar com mais clareza o caminho para solucionar a quest&atilde;o da cobran&ccedil;a e comercializa&ccedil;&atilde;o do servi&ccedil;o.

<strong>Apresenta&ccedil;&atilde;o</strong>

O pr&oacute;ximo passo &eacute; passar este rascunho a limpo, criar uma apresenta&ccedil;&atilde;o, gerar um PDF e apresentar a id&eacute;ia mais detalhada para o pessoal convidado a desenvolver. Neste momento j&aacute; &eacute; necess&aacute;rio montar a equipe e distribuir as tarefas. Trabalhar sozinho nisso requer muito tempo livre e faz com que o andamento seja muito devagar.

Abra&ccedil;os e at&eacute; a pr&oacute;xima!
