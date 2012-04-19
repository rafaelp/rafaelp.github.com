--- 
layout: post
status: publish
published: true
title: "Etiquetagem (sistema de tags) para navega\xC3\xA7\xC3\xA3o"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 38
wordpress_url: http://rafael.adm.br/p/etiquetagem-sistema-de-tags-para-navegacao/
date: 2006-05-05 13:21:00 -03:00
categories: 
- Posts
tags: 
- desenvolvimento
- "programa\xC3\xA7\xC3\xA3o"
- "navega\xC3\xA7\xC3\xA3o"
- tags
- usabilidade
---
Eu estava de frente para o sistema de gestão, ou <a target="_blank" title="Definições de ERP no Google (nova janela)" href="http://www.google.com/search?hs=w5L&hl=en&lr=&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&q=define%3A+ERP&btnG=Search">ERP</a> como queiram chamar, Advanced Protheus da <a target="_blank" href="http://www.microsiga.com.br/">Microsiga</a> quando tive uma idéa. Não sei ainda se é boa ou ruim, pois não apliquei em nenhum projeto, mas deixo meu post aqui para compartilhar.

Uma usuária do sistema estava me mostrando um problema relativo a uma sequência de operações. Percebi a dificuldade que ela tinha de encontrar a opção do menu para a tarefa que ela queria realizar. Era necessário escolher o módulo (Gestão de Pessoal), clicar sobre a opção no menu (Atualizar), depois abrir um sub-menu (Lançamentos), clicar sobre a tarefa (Marcações), por fim, escolher um funcionário e clicar na ação (Atualizar). Invariavelmente ela se perdia procurando aonde estava a tarefa desejada.
Pois bem, muito se fala na utilização das <a target="_blank" title="Tags na Wikipedia (nova janela)" href="http://en.wikipedia.org/wiki/Tags">Tags</a>, ou em português, sistema de etiquetagem, para categorização de determinados itens em uma base de dados. O <a target="_blank" href="http://flickr.com/photos/tags/">flickr utiliza tags</a> para as fotos, o <a target="_blank" href="http://del.icio.us/help/tags">del.icio.us para os links</a>, cada um para os itens que manipula no seu banco de dados.

O que eu ainda não vi foi a utilização de tags para navegação e minha idéia abrange este aspecto. Basicamente é permitir que cada usuário "tagueie" cada tela ou ação no sistema e utilize um sistema de busca para chegar na tela da ação desejada. As telas/ações já viriam com umas tags padrões.
No gerenciamento de usuários, módulo que praticamente todos os sistemas têm, teríamos as seguintes aplicações com suas respectivas tags padrões:
<ul>
	<li>Inclusão de usuário -> novo, incluir, inclusão, cadastro, cadastrar, cadastramento, criar, usuário, usuários, pessoa, acesso.</li>
	<li>Alteração de usuário -> editar, alterar, modificar,  mudar, dado, informação, dados, informações, cadastro, usuário, usuários, pessoa, acesso.</li>
	<li>Listagem de usuários -> listar, lista, listagem, ver, mostrar, todos, usuários</li>
</ul>
Estas seriam as tags padrões que poderiam ser modificadas por cada usuário.

Na navegação, ao invés de menus, submenus, telas e mais telas, teríamos um form, parecido com o de busca, que perguntaria o seguinte:

"O que você gostaria de fazer?"

Este form em si eu já vi, acho que no site da Microsoft inclusive, mas ele não buscava em tags definidas pelo próprio usuário.

Então uma pessoa digitaria: <strong>cadastrar</strong> <strong>novo</strong> <strong>usuário,</strong> outra buscaria: <strong>incluir</strong> <strong>pessoa</strong> e uma terceira poderia buscar: ir para o <strong>cadastro</strong> de <strong>usuários</strong>

Não importa, as três cairiam na aplicação Inclusão de Usuários, por que nos três casos as tags fornecidas são necessárias para identificar a aplicação, uma vez que o sistema não tenha outras telas/ações com as mesmas tags.
Caso outra pessoa coloque apenas <strong>usuário</strong> no form, ou seja, uma tag comum para diversas aplicações, uma página com um "resultado da busca" apareceria listando as três telas/ações que têm a tag <strong>usuário</strong> em comum, são elas inclusão, alteração e listagem.
O sistema também poderia se modificar com o tempo, exemplos:

1) As tags padrões a princípio poderiam ser definidas pelo autor do sistema (desenvolvedor), mas com o tempo poderiam ser a reunião das tags mais populares.

2) Se a maior parte dos usuários buscam por <strong>cadastrar novo usuário</strong>, por que não trocar o título da aplicação de "Inclusão de Usuários" para "Cadastrar Novo Usuário" !?

3) Aprendendo com a utilização, por exemplo:

A pessoa busca <strong>adicionar</strong> <strong>usuários</strong>

A palavra <strong>adicionar</strong> não é tag em nenhuma das aplicações do gerenciamento de usuários, então neste caso, a tela de resultado da busca apareceria com as três opções. O detalhe é que após clicar na inclusão, o sistema poderia perguntar:

"Você gostaria de associar a tag <strong>adicionar</strong> à aplicação Inclusão de Usuários?"

Clicando em sim, da próxima vez que aquela pessoa colocar <strong>adicionar usuários</strong> no form, o sistema já vai redirecioná-la diretamente para a aplicação de Inclusão de Usuários.

Conversei com <a href="http://viniciusbraga.com">meu amigo Vinis</a> sobre esta idéia, e ele me disse que a princípio parecia estranho trocar um clique do menu, pela digitação de 10 a 20 caracteres mais um clique.

Repito, não sei, por que não testei ainda. Embora não descarte a idéia, acredito que para uma aplicação simples, com poucas opções e um menu pequeno, essa idéia possa não funcionar mas acho que para um sistema de gestão como o da Microsiga isso seria uma mão na roda!

Obs:

1) Se isso funcionar pode ter certeza que farei um plugin para o Rails ;-)

2) Se isso já existe, me avisem!
