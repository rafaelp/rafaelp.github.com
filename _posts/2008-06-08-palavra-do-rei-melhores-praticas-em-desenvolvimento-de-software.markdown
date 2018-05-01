---
title: Palavra do Rei - melhores pr&aacute;ticas em desenvolvimento de software (proposta
  de meme)
date: 2008-06-08 21:45:13 -03:00
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- meme
- dicas
- equipe
- myfreecomm
- software
- melhores pr&aacute;ticas
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 203
wordpress_url: http://rafael.adm.br/?p=203
---

Na <a href="http://myfreecomm.com.br">Myfreecom</a> criamos uma s&eacute;rie de regras que s&atilde;o o in&iacute;cio do que vir&aacute; a ser o conjunto de melhores pr&aacute;ticas no desenvolvimento de software na empresa. "O Rei" &eacute; a intelig&ecirc;ncia superior resultante da opini&atilde;o pessoal de cada um em rela&ccedil;&atilde;o a desenvolvimento de software.

Todos n&oacute;s temos estas "melhores pr&aacute;ticas" definidas em nossa mente, mas nem sempre elas s&atilde;o iguais entre a equipe. Esta diferen&ccedil;a muitas vezes causa frusta&ccedil;&atilde;o, pois nem sempre as pr&aacute;ticas do companheiro de equipe atinge nossas espectativas, ou vice-versa.

O Rei da Myfreecomm diz:

<strong>Programa&ccedil;&atilde;o</strong>
<ul>
	<li><span style="font-size: small;">Todo o c&oacute;digo de programa&ccedil;&atilde;o deve ser escrito em ingl&ecirc;s.</span></li>
	<li><span style="font-size: small;">Os nomes de vari&aacute;veis s&atilde;o em ingl&ecirc;s.</span></li>
	<li><span style="font-size: small;">Os par&acirc;metros s&atilde;o em ingl&ecirc;s.</span></li>
	<li><span style="font-size: small;">N&atilde;o devemos usar abrevia&ccedil;&atilde;o em vari&aacute;veis e par&acirc;metros.</span></li>
	<li><span style="font-size: small;">Nunca uma vari&aacute;vel e par&acirc;metro ter&aacute; apenas uma letra, ela ser&aacute; sempre uma palavra (em ingl&ecirc;s) auto-explicativa (com excess&atilde;o de vari&aacute;veis locais em itera&ccedil;&atilde;o, exemplo cl&aacute;ssico a vari&aacute;vel "i").</span></li>
	<li><span style="font-size: small;">Nunca suponha em seu c&oacute;digo qual ser&aacute; o endere&ccedil;o de uma url ou localiza&ccedil;&atilde;o de arquivo. Mantenha suas fun&ccedil;&otilde;es parametrizadas. </span></li>
	<li><span style="font-size: small;">Nunca coloque o nome do produto ou do cliente em vari&aacute;veis ou nome de projetos.
</span></li>
</ul>
<strong>Deployment</strong>
<ul>
	<li><span style="font-size: small;"><a href="http://www.google.com/url?q=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDon%2527t_repeat_yourself&amp;sa=D&amp;sntz=1&amp;usg=AFrqEzenADUVbponFiGrl7YhqQr26yo7cw">Nunca duplique um c&oacute;digo</a>.</span></li>
	<li><span style="font-size: small;">Quando pensar em duplicar um c&oacute;digo, por precisar de uma solu&ccedil;&atilde;o r&aacute;pida e mais segura, Pare!</span></li>
	<li><span style="font-size: small;">Um c&oacute;digo deve sempre estar em um &Uacute;NICO lugar nos ambientes de produ&ccedil;&atilde;o.</span></li>
	<li><span style="font-size: small;">Uma hora ganha por duplicar o c&oacute;digo hoje, equivale a uma semana perdida amanh&atilde;.</span></li>
</ul>
<strong>Banco de Dados</strong>
<ul>
	<li><span style="font-size: small;">O banco de dados &eacute; sagrado, apenas uma programa&ccedil;&atilde;o (a dona do bd) deve ter permiss&atilde;o de acesso.</span></li>
	<li><span style="font-size: small;">N&atilde;o escreva qualquer programa&ccedil;&atilde;o que acesse direto o bd, al&eacute;m da dona, mesmo que seja apenas para leitura.</span></li>
	<li><span style="font-size: small;">Os nomes de banco de dados, tabelas e campos.. em ingl&ecirc;s.</span></li>
	<li><span style="font-size: small;">Nunca teste um c&oacute;digo em um banco de dados em produ&ccedil;&atilde;o, pois voc&ecirc; destruir&aacute; a integridade das informa&ccedil;&otilde;es do banco.</span></li>
</ul>
<strong>URL</strong>
<ul>
	<li><span style="font-size: small;">A defini&ccedil;&atilde;o de uma URL de acesso interno &eacute; um recurso caro. O custo de mudan&ccedil;a &eacute; muito alto.</span></li>
	<li><span style="font-size: small;">Ao definir uma URL de acesso interno, pense bem no escopo em que ela se encontra e abstraia o m&aacute;ximo poss&iacute;vel.</span></li>
	<li><span style="font-size: small;">N&atilde;o use caracter "_" em dom&iacute;nios e sub-dom&iacute;nios, o Internet Explorer vai te dar uma rasteira.</span></li>
	<li><span style="font-size: small;">Prefira "-" para substituir o espa&ccedil;o nos dom&iacute;nios e sub-dom&iacute;nios.</span></li>
</ul>
N&oacute;s acreditamos que esta lista &eacute; din&acirc;mica e nunca se completar&aacute;. Conforme formos trabalhando, aprendendo novas tecnologias, o Rei vai soltando mais regrinhas e a euipe vai mantendo a equipe com uma id&eacute;ia &uacute;nica. Sabemos que esta lista mesmo est&aacute; incompleta ainda...

Acreditamos tamb&eacute;m que n&atilde;o existe uma &uacute;nica lista "correta" e que cada empresa vai achar o seu conjunto de melhores pr&aacute;ticas, de acordo com a sua situa&ccedil;&atilde;o, mercado e vis&atilde;o.

N&atilde;o tenho d&uacute;vidas, que O Rei da <a href="http://www.improveit.com.br/en">Improve-it</a>, por exemplo, vai dizer muita coisa em rela&ccedil;&atilde;o &agrave; testes, BDD e afins...

E voc&ecirc;, o que acha destas regras, discorda de alguma? Alguma vez j&aacute; escreveu seu conjunto de melhores pr&aacute;ticas? O que o Rei da sua empresa diz?

Convido cada um postar em seu blog a sua lista de melhores pr&aacute;ticas e colocar um trackback para c&aacute;, que tal?

Seria um MEME interessante, talvez com o apoio de blogs mais fortes, que l&ecirc;em este, conseguimos come&ccedil;ar a trocar uma id&eacute;ia sobre esse assunto ;-)

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
