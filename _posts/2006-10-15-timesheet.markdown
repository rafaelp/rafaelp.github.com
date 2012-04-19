--- 
layout: post
status: publish
published: true
title: Timesheet
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 94
wordpress_url: http://rafael.adm.br/p/timesheet/
date: 2006-10-15 18:21:57 -03:00
categories: 
- Posts
tags: 
- desenvolvimento
- programa&ccedil;&atilde;o
- usabilidade
- simplicidade
---
O <a href="http://simplesideias.com.br">Nando Vieira</a> est&aacute; desenvolvendo um sistema de <a href="http://simplesideias.com.br/timesheet/">Timesheet para linux</a>. Ele pergunta no final do post se existe alguma funcionalidade que voc&ecirc; gostaria que tivesse.

Vou escrever aqui como um sistema de timesheet funcionaria perfeitamente para mim. Quem sabe ele n&atilde;o se anima em fazer parecido com o que eu imagino!!!

<strong>Primeiramente vou colocar uma funcionalidade que eu gostaria que N&Atilde;O tivesse: controle de tarefas.</strong>

Durante um dia de trabalho eu me envolvo com cerca de 5 projetos diferentes dos 10 (aproximadamente) que estou criando/mantendo. Mal consigo realizar tudo que preciso para os projetos, imagina escrever cada tarefa que estou realizando em cada projeto. Para mim, e acredito que para a maioria dos profissionais, registrar cada tarefa &eacute; um trabalho ut&oacute;pico. N&atilde;o conhe&ccedil;o ningu&eacute;m que realmente fa&ccedil;a. Deixem seus coment&aacute;rios, se eu estiver enganado.

No meu ponto de vista, defendendo a id&eacute;ia de simplicidade, acho que o utilit&aacute;rio deva realizar o controle apenas de horas gastas no projeto, independete da tarefa. Ent&atilde;o, teria um cadastro de projetos, sendo que cada projeto possui apenas um t&iacute;tulo, um &iacute;cone e uma flag, para controle se ele &eacute; um projeto ativo e aparecer&aacute; na lista, ou n&atilde;o. Posteriormente, poderia ser inclu&iacute;do o custo da hora para o projeto, etc..

Concordo com o Nando quando ele diz:

<blockquote><strong>"A id&eacute;ia &eacute; fazer com que ele sempre fique no tray, para me lembrar que tem uma tarefa em execu&ccedil;&atilde;o. Assim, posso alternar entre elas de maneira muito simples."</strong></blockquote>

Ent&atilde;o acho que o programa, quando executado, deve entrar no estado de "inatividade", com nenhum projeto selecionado.

Quando voc&ecirc; clicar no &iacute;cone do programa que estar&aacute; no tray, aparecer&aacute; o menu de contexto com a lista dos projetos que voc&ecirc; tem cadastrado e que est&atilde;o com a flag de vis&iacute;veis (ou ativos). Clicando em um projeto, o sistema come&ccedil;a a contar o tempo para aquele projeto e o &iacute;cone no tray muda para o &iacute;cone do projeto. Assim, s&oacute; de olhar, voc&ecirc; j&aacute; sabe para qual projeto o timesheet est&aacute; contando.

Recebeu um e-mail urgente e vai come&ccedil;ar a trabalhar em outro projeto. Dois cliques resolvem o problema, um clique para abrir o menu de contexto e outro clique para selecionar o projeto para o qual vai come&ccedil;ar a trabalhar. O programa ent&atilde;o para a contagem do projeto anterior e come&ccedil;a uma nova contagem para o projeto selecionado.

Acabou de trabalhar, selecione a op&ccedil;&atilde;o de "Nenhum" que estar&aacute; logo abaixo da lista de projetos no menu de contexto.

Desta maneira, a utiliza&ccedil;&atilde;o fica vi&aacute;vel, s&atilde;o apenas dois cliques para passar de um projeto para o outro e isso n&atilde;o interfere o trabalho no dia-a-dia.

Por fim, op&ccedil;&otilde;es de relat&oacute;rio de horas investidas no projeto para um range de data e um "XMLzinho" de exporta&ccedil;&atilde;o v&atilde;o bem.

Bem, est&aacute; &eacute; minha contribui&ccedil;&atilde;o, fiquem a vontade para criticar!

Abra&ccedil;o a todos.

P.S. Nando, me empolguei com a id&eacute;ia, quem sabe n&atilde;o podemos evoluir a ferramente para uma aplica&ccedil;&atilde;o web, com relat&oacute;rios na web e tudo mais? Se voc&ecirc; se interessar, podemos fazer um estudo de viabilidade!

<strong>Atualizado (15/10/2006 &agrave;s 08:31 PM):</strong> O <a href="http://www.slimtimer.com">SlimTimer</a> faz exatamente o que eu descrevi neste post, ele possui integra&ccedil;&atilde;o com o <a href="http://www.3d3r.com/bubbles/">Bubbles</a> que permite coloc&aacute;-lo no tray (somente para windows).
