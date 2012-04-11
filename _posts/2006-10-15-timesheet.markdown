--- 
layout: post
title: Timesheet
wordpress_id: 94
wordpress_url: http://rafael.adm.br/p/timesheet/
date: 2006-10-15 18:21:57 -03:00
---
O <a href="http://simplesideias.com.br">Nando Vieira</a> está desenvolvendo um sistema de <a href="http://simplesideias.com.br/timesheet/">Timesheet para linux</a>. Ele pergunta no final do post se existe alguma funcionalidade que você gostaria que tivesse.

Vou escrever aqui como um sistema de timesheet funcionaria perfeitamente para mim. Quem sabe ele não se anima em fazer parecido com o que eu imagino!!!

<strong>Primeiramente vou colocar uma funcionalidade que eu gostaria que NÃO tivesse: controle de tarefas.</strong>

Durante um dia de trabalho eu me envolvo com cerca de 5 projetos diferentes dos 10 (aproximadamente) que estou criando/mantendo. Mal consigo realizar tudo que preciso para os projetos, imagina escrever cada tarefa que estou realizando em cada projeto. Para mim, e acredito que para a maioria dos profissionais, registrar cada tarefa é um trabalho utópico. Não conheço ninguém que realmente faça. Deixem seus comentários, se eu estiver enganado.

No meu ponto de vista, defendendo a idéia de simplicidade, acho que o utilitário deva realizar o controle apenas de horas gastas no projeto, independete da tarefa. Então, teria um cadastro de projetos, sendo que cada projeto possui apenas um título, um ícone e uma flag, para controle se ele é um projeto ativo e aparecerá na lista, ou não. Posteriormente, poderia ser incluído o custo da hora para o projeto, etc..

Concordo com o Nando quando ele diz:

<blockquote><strong>"A idéia é fazer com que ele sempre fique no tray, para me lembrar que tem uma tarefa em execução. Assim, posso alternar entre elas de maneira muito simples."</strong></blockquote>

Então acho que o programa, quando executado, deve entrar no estado de "inatividade", com nenhum projeto selecionado.

Quando você clicar no ícone do programa que estará no tray, aparecerá o menu de contexto com a lista dos projetos que você tem cadastrado e que estão com a flag de visíveis (ou ativos). Clicando em um projeto, o sistema começa a contar o tempo para aquele projeto e o ícone no tray muda para o ícone do projeto. Assim, só de olhar, você já sabe para qual projeto o timesheet está contando.

Recebeu um e-mail urgente e vai começar a trabalhar em outro projeto. Dois cliques resolvem o problema, um clique para abrir o menu de contexto e outro clique para selecionar o projeto para o qual vai começar a trabalhar. O programa então para a contagem do projeto anterior e começa uma nova contagem para o projeto selecionado.

Acabou de trabalhar, selecione a opção de "Nenhum" que estará logo abaixo da lista de projetos no menu de contexto.

Desta maneira, a utilização fica viável, são apenas dois cliques para passar de um projeto para o outro e isso não interfere o trabalho no dia-a-dia.

Por fim, opções de relatório de horas investidas no projeto para um range de data e um "XMLzinho" de exportação vão bem.

Bem, está é minha contribuição, fiquem a vontade para criticar!

Abraço a todos.

P.S. Nando, me empolguei com a idéia, quem sabe não podemos evoluir a ferramente para uma aplicação web, com relatórios na web e tudo mais? Se você se interessar, podemos fazer um estudo de viabilidade!

<strong>Atualizado (15/10/2006 às 08:31 PM):</strong> O <a href="http://www.slimtimer.com">SlimTimer</a> faz exatamente o que eu descrevi neste post, ele possui integração com o <a href="http://www.3d3r.com/bubbles/">Bubbles</a> que permite colocá-lo no tray (somente para windows).
