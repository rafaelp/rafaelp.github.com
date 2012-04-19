---
layout: post
status: publish
published: true
title: A import&acirc;ncia da escolha das palavras certas no desenvolvimento de sistemas
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 424
wordpress_url: http://rafael.adm.br/?p=424
date: 2009-11-05 14:04:03.000000000 -02:00
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- dicas
- sistema
---
Estamos desenvolvendo na <a href="http://myfreecomm.com.br">Myfreecomm</a> um sistema de cobran&ccedil;a que est&aacute; ficando muito interessante. Ele ir&aacute; resolver um problema real e trar&aacute; muita conveni&ecirc;ncia no dia-a-dia das empresas que realizam cobran&ccedil;a com integra&ccedil;&atilde;o com os bancos.

O sistema est&aacute; quase pronto e estamos neste momento definindo aqueles detalhes que fazem toda a diferen&ccedil;a.

<strong>A concep&ccedil;&atilde;o foi baseada em um fluxo &uacute;nico de uso, de forma que os itens de menu contemplassem as a&ccedil;&otilde;es que o usu&aacute;rio ir&aacute; realizar, como se o sistema todos fosse um grande wizard. As p&aacute;ginas acess&oacute;rias s&atilde;o acessadas apenas por links contextuais. N&atilde;o temos menu e submenu, nem breadcrumb. E te digo, fazer o sistema assim &eacute; um desafio!</strong>

A interface ficou bem simples, sem muitas op&ccedil;&otilde;es e com links no lugar certo e na hora certa. Quando fazemos sistemas deste g&ecirc;nero as palavras e termos utilizados nos itens de menu, nos t&iacute;tulos e nos links s&atilde;o muito importantes. &Eacute; preciso que o usu&aacute;rio consiga se situar de forma r&aacute;pida e entenda o que ir&aacute; acontecer a cada clique.

O Allan &eacute; o respons&aacute;vel por fazer com que o sistema seja entendido pelos usu&aacute;rios. Ele est&aacute; escrevendo o manual, pensando em que lugares existir&atilde;o links para o manual, quais s&atilde;o os pontos que podem gerar d&uacute;vidas, etc. E nesse processo ele est&aacute; revendo os termos utilizados a todo momento. Inclusive nas intera&ccedil;&otilde;es chegamos a perceber e incluir na hist&oacute;rias novos status para determinada entidade e tudo.

Hoje ele levantou uma bola que gerou uma discuss&atilde;o muito saud&aacute;vel. Uma das a&ccedil;&otilde;es do usu&aacute;rio no sistema &eacute; juntar v&aacute;rias cobran&ccedil;as para que elas sejam enviadas para o sistema do banco. At&eacute; hoje, o termos utilizado para esse conjunto de cobran&ccedil;as era <strong>Remessa</strong>. T&iacute;nhamos termos tais como: Preparar Remessa, Enviar Remessa, Remessas Pendentes e Remessas Enviadas.

A quest&atilde;o levantada foi: <strong>"N&atilde;o deveria ser Lote ao inv&eacute;s de Remessa?"</strong>

A conclus&atilde;o imediata depois de um r&aacute;pido brainstorm foi de que tanto faz, afinal d&aacute; no mesmo, lote e remessa s&atilde;o a mesma coisa. Bem, depois de muita conversa e esclarecimento sobre entidades, estados, tempos, etc chegamos a uma opini&atilde;o diferente.

Buscamos defini&ccedil;&otilde;es de <a href="http://www.google.com.br/search?q=define%3A+lote">lote</a> e <a href="http://www.google.com.br/search?q=define%3A+remessa">remessa</a> no Google, depois fomos aos dicion&aacute;rios <a href="http://www.priberam.pt/DLPO/default.aspx?pal=remessa">priberam</a> e <a href="http://www.dicionariodoaurelio.com/dicionario.php?P=Remessa">Aur&eacute;lio</a>. Mais alguns minutos de discuss&atilde;o e desenho foram neecess&aacute;rios para concluirmos que Remessa &eacute; algo que foi enviado, ou seja, que j&aacute; passou pelo processo de envio. Se existe algo que pode ser remetido, mas ainda n&atilde;o o foi, isso n&atilde;o pode ser chamado de Remessa.

Donde se conclu&iacute; que&nbsp; dizer "Enviar Remessa" est&aacute; errado e o termo "Remessa enviada" &eacute; um pleonasmo. <a href="http://twitter.com/rafaelp/status/5451280083">Se &eacute; Remessa, &eacute; por que j&aacute; foi enviado.</a>

No meio da discuss&atilde;o chegamos a lembrar que muitas vezes n&atilde;o importa o "certo" e "errado" na gram&aacute;tica formal e que o mais importante &eacute; o entendimento do usu&aacute;rio. Mas &eacute; o que eu digo, se podemos usar o correto de acordo com a gram&aacute;tica sem afetar o entendimento do usu&aacute;rio, melhor. Se, usando o termo gramaticalmente corrento, ainda assim facilitamos o entendimento do usu&aacute;rio, como foi o caso, melhor ainda!

Por fim decidimos usar o termo Lote ao inv&eacute;s de Remessa e mudaremos para "Preparar Lote", "Enviar Lote", "Lotes pendentes" , "Lotes enviados" e outros termos presentes na interface. Como <a href="http://rafael.adm.br/p/palavra-do-rei-melhores-praticas-em-desenvolvimento-de-software/">escrevemos todo c&oacute;digo de programa&ccedil;&atilde;o em ingl&ecirc;s</a>, n&atilde;o tivemos maiores problemas.

Essa experi&ecirc;ncia foi muito interessante, pois foi legal estudar e discutir sobre o significado destas palavras e foi incr&iacute;vel perceber como uma mudan&ccedil;a simples pode ao mesmo tempo melhorar o sistema e facilitar nosso trabalho. Ficar&aacute; mais f&aacute;cil agora escrever o manual. &Eacute; aquela velha hist&oacute;ria: <strong>Se est&aacute; dif&iacute;cil, est&aacute; errado!</strong>

Uma vez eu li um post da <a href="http://37signals.com/svn/">37signals</a> extamente sobre isso. Agora eu entendo perfeitamente o que eles queriam passar com o post, e &eacute; o que eu espero deixar de recado tamb&eacute;m.

<strong>A defini&ccedil;&atilde;o de termos corretos e f&aacute;ceis de serem compreendidos pelo usu&aacute;rio &eacute; fundamental para a boa usabilidade do sistema.</strong>

Al&eacute;m disso, escolher as palavras certas facilita a compreens&atilde;o da rela&ccedil;&atilde;o do que elas representam com o sistema como um todo.

S&atilde;o diversos fatores que tornam um sistema bom ou ruim, dif&iacute;cil ou f&aacute;cil de usar e complexo ou simples. Usar palavras corretas e de simples entendimento &eacute; um fator muito importante. &Agrave;s vezes parece que est&aacute; tudo bom, e que as palavras est&atilde;o certas e ser&atilde;o compreendidas, mas nem sempre &eacute; verdade.

Pense no sistema que voc&ecirc; usa ou est&aacute; desenvolvendo. Ser&aacute; que mudando alguns termos n&atilde;o ficaria muito mais f&aacute;cil de usar? Voc&ecirc; tem algum caso similar? Deixe sua hist&oacute;ria nos coment&aacute;rios!

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
