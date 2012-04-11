--- 
layout: post
title: Programador lento
wordpress_id: 437
wordpress_url: http://rafael.adm.br/?p=437
date: 2009-12-22 08:34:44 -02:00
---
Na <a href="http://myfreecomm.com.br">Myfreecomm</a> temos alguns programadores lentos, graças a Deus. Conversando sobre isso com o <a href="http://henriquebastos.net">Henrique</a>, ele disse que merecia um post. Atendendo a pedidos, aí está.

Depois de bastante tempo sem programar, eu passei dois dias escrevendo um pequeno sistema para integrar a parte de pagamento de uma aplicação com o <a href="http://paypal.com">Paypal</a>.

O fato de ter voltado a programar, depois de mais de um ano apenas gerenciando projetos e equipes, e estudando metodologias ágeis, me fez optar por escrever uma aplicação 100% testada, em Ruby, utilizando Sinatra. Gostaria de aproveitar para agradecer o <a href="http://rafaelss.com/">Rafael Souza</a> que me ajudou bastante no início.

A escolha de Ruby (ao invés de Python por exempo) e Sinatra (ao invés de Rails por exemplo), não importa. O que importa é que eu poderia fazer tudo “scriptado” (aka cuspido), mas achei que não deveria. O primeiro motivo é que se trata de um middleware para um processo crítico que não pode falhar, o pagamento. Segundo, por que na minha cabeça não fazia sentido cuspir um código e fazer funcionar o mais rápido possível.

Isso me fez pensar sobre o paradoxo da qualidade x velocidade. A conclusão que tirei das minhas reflexões é que os programadores que se dizem lentos, na verdade não são lentos.

Para você dizer que alguém é lento, você tem que comparar com outra pessoa. Lentidão é relativo. Você não é lento e ponto final, você pode ser lento se comparado com outras pessoas.

Minha conclusão foi que na verdade o “programador lento” faz as coisas no tempo em que elas realmente precisam para serem feitas da maneira que funciona. Na verdade, os outros que são rápidos de mais. Adianta ser rápido e ter bug?

Analisando sob essa ótica, e considerando a premissa de que a maioria das pessoas (rápidas) fazem errado, vide relatório Chaos Report do Standish Group, posso dizer que programadores lentos são bem-vindos.

Hoje, eu vejo essa característica como um sintoma de que ele programa com boas práticas e com o cuidado necessário para o software funcionar.

No final da conversa eu disse para o Henrique: <strong>“Se em uma entrevista de emprego, um programador me diz que é lento, eu vou vê-lo com bons olhos”</strong>.

Abraço e até a próxima.
