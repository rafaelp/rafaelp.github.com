---
layout: post
status: publish
published: true
title: Etiquetagem (sistema de tags) para navega&ccedil;&atilde;o
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 38
wordpress_url: http://rafael.adm.br/p/etiquetagem-sistema-de-tags-para-navegacao/
date: 2006-05-05 13:21:00.000000000 -03:00
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- navega&ccedil;&atilde;o
- tags
- usabilidade
---
Eu estava de frente para o sistema de gest&atilde;o, ou <a target="_blank" title="Defini&ccedil;&otilde;es de ERP no Google (nova janela)" href="http://www.google.com/search?hs=w5L&hl=en&lr=&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&q=define%3A+ERP&btnG=Search">ERP</a> como queiram chamar, Advanced Protheus da <a target="_blank" href="http://www.microsiga.com.br/">Microsiga</a> quando tive uma id&eacute;a. N&atilde;o sei ainda se &eacute; boa ou ruim, pois n&atilde;o apliquei em nenhum projeto, mas deixo meu post aqui para compartilhar.

Uma usu&aacute;ria do sistema estava me mostrando um problema relativo a uma sequ&ecirc;ncia de opera&ccedil;&otilde;es. Percebi a dificuldade que ela tinha de encontrar a op&ccedil;&atilde;o do menu para a tarefa que ela queria realizar. Era necess&aacute;rio escolher o m&oacute;dulo (Gest&atilde;o de Pessoal), clicar sobre a op&ccedil;&atilde;o no menu (Atualizar), depois abrir um sub-menu (Lan&ccedil;amentos), clicar sobre a tarefa (Marca&ccedil;&otilde;es), por fim, escolher um funcion&aacute;rio e clicar na a&ccedil;&atilde;o (Atualizar). Invariavelmente ela se perdia procurando aonde estava a tarefa desejada.
Pois bem, muito se fala na utiliza&ccedil;&atilde;o das <a target="_blank" title="Tags na Wikipedia (nova janela)" href="http://en.wikipedia.org/wiki/Tags">Tags</a>, ou em portugu&ecirc;s, sistema de etiquetagem, para categoriza&ccedil;&atilde;o de determinados itens em uma base de dados. O <a target="_blank" href="http://flickr.com/photos/tags/">flickr utiliza tags</a> para as fotos, o <a target="_blank" href="http://del.icio.us/help/tags">del.icio.us para os links</a>, cada um para os itens que manipula no seu banco de dados.

O que eu ainda n&atilde;o vi foi a utiliza&ccedil;&atilde;o de tags para navega&ccedil;&atilde;o e minha id&eacute;ia abrange este aspecto. Basicamente &eacute; permitir que cada usu&aacute;rio "tagueie" cada tela ou a&ccedil;&atilde;o no sistema e utilize um sistema de busca para chegar na tela da a&ccedil;&atilde;o desejada. As telas/a&ccedil;&otilde;es j&aacute; viriam com umas tags padr&otilde;es.
No gerenciamento de usu&aacute;rios, m&oacute;dulo que praticamente todos os sistemas t&ecirc;m, ter&iacute;amos as seguintes aplica&ccedil;&otilde;es com suas respectivas tags padr&otilde;es:
<ul>
	<li>Inclus&atilde;o de usu&aacute;rio -> novo, incluir, inclus&atilde;o, cadastro, cadastrar, cadastramento, criar, usu&aacute;rio, usu&aacute;rios, pessoa, acesso.</li>
	<li>Altera&ccedil;&atilde;o de usu&aacute;rio -> editar, alterar, modificar,  mudar, dado, informa&ccedil;&atilde;o, dados, informa&ccedil;&otilde;es, cadastro, usu&aacute;rio, usu&aacute;rios, pessoa, acesso.</li>
	<li>Listagem de usu&aacute;rios -> listar, lista, listagem, ver, mostrar, todos, usu&aacute;rios</li>
</ul>
Estas seriam as tags padr&otilde;es que poderiam ser modificadas por cada usu&aacute;rio.

Na navega&ccedil;&atilde;o, ao inv&eacute;s de menus, submenus, telas e mais telas, ter&iacute;amos um form, parecido com o de busca, que perguntaria o seguinte:

"O que voc&ecirc; gostaria de fazer?"

Este form em si eu j&aacute; vi, acho que no site da Microsoft inclusive, mas ele n&atilde;o buscava em tags definidas pelo pr&oacute;prio usu&aacute;rio.

Ent&atilde;o uma pessoa digitaria: <strong>cadastrar</strong> <strong>novo</strong> <strong>usu&aacute;rio,</strong> outra buscaria: <strong>incluir</strong> <strong>pessoa</strong> e uma terceira poderia buscar: ir para o <strong>cadastro</strong> de <strong>usu&aacute;rios</strong>

N&atilde;o importa, as tr&ecirc;s cairiam na aplica&ccedil;&atilde;o Inclus&atilde;o de Usu&aacute;rios, por que nos tr&ecirc;s casos as tags fornecidas s&atilde;o necess&aacute;rias para identificar a aplica&ccedil;&atilde;o, uma vez que o sistema n&atilde;o tenha outras telas/a&ccedil;&otilde;es com as mesmas tags.
Caso outra pessoa coloque apenas <strong>usu&aacute;rio</strong> no form, ou seja, uma tag comum para diversas aplica&ccedil;&otilde;es, uma p&aacute;gina com um "resultado da busca" apareceria listando as tr&ecirc;s telas/a&ccedil;&otilde;es que t&ecirc;m a tag <strong>usu&aacute;rio</strong> em comum, s&atilde;o elas inclus&atilde;o, altera&ccedil;&atilde;o e listagem.
O sistema tamb&eacute;m poderia se modificar com o tempo, exemplos:

1) As tags padr&otilde;es a princ&iacute;pio poderiam ser definidas pelo autor do sistema (desenvolvedor), mas com o tempo poderiam ser a reuni&atilde;o das tags mais populares.

2) Se a maior parte dos usu&aacute;rios buscam por <strong>cadastrar novo usu&aacute;rio</strong>, por que n&atilde;o trocar o t&iacute;tulo da aplica&ccedil;&atilde;o de "Inclus&atilde;o de Usu&aacute;rios" para "Cadastrar Novo Usu&aacute;rio" !?

3) Aprendendo com a utiliza&ccedil;&atilde;o, por exemplo:

A pessoa busca <strong>adicionar</strong> <strong>usu&aacute;rios</strong>

A palavra <strong>adicionar</strong> n&atilde;o &eacute; tag em nenhuma das aplica&ccedil;&otilde;es do gerenciamento de usu&aacute;rios, ent&atilde;o neste caso, a tela de resultado da busca apareceria com as tr&ecirc;s op&ccedil;&otilde;es. O detalhe &eacute; que ap&oacute;s clicar na inclus&atilde;o, o sistema poderia perguntar:

"Voc&ecirc; gostaria de associar a tag <strong>adicionar</strong> &agrave; aplica&ccedil;&atilde;o Inclus&atilde;o de Usu&aacute;rios?"

Clicando em sim, da pr&oacute;xima vez que aquela pessoa colocar <strong>adicionar usu&aacute;rios</strong> no form, o sistema j&aacute; vai redirecion&aacute;-la diretamente para a aplica&ccedil;&atilde;o de Inclus&atilde;o de Usu&aacute;rios.

Conversei com <a href="http://viniciusbraga.com">meu amigo Vinis</a> sobre esta id&eacute;ia, e ele me disse que a princ&iacute;pio parecia estranho trocar um clique do menu, pela digita&ccedil;&atilde;o de 10 a 20 caracteres mais um clique.

Repito, n&atilde;o sei, por que n&atilde;o testei ainda. Embora n&atilde;o descarte a id&eacute;ia, acredito que para uma aplica&ccedil;&atilde;o simples, com poucas op&ccedil;&otilde;es e um menu pequeno, essa id&eacute;ia possa n&atilde;o funcionar mas acho que para um sistema de gest&atilde;o como o da Microsiga isso seria uma m&atilde;o na roda!

Obs:

1) Se isso funcionar pode ter certeza que farei um plugin para o Rails ;-)

2) Se isso j&aacute; existe, me avisem!
