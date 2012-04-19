--- 
layout: post
status: publish
published: true
title: "Montando uma sistem\xC3\xA1tica de deploy para o Podcast"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 216
wordpress_url: http://rafael.adm.br/?p=216
date: 2008-08-27 21:58:45 -03:00
categories: 
- Posts
tags: 
- dicas
- podcast
- mac
- macos
- "automatiza\xC3\xA7\xC3\xA3o"
---
Todos nós sabemos que um projeto de software que não possui um deploy seguro e automático acaba falhando em algum momento. O deploy é o ato de colocar o que foi desenvolvido em produção.

Os projetos que não possuem um bom sistema de deploy, acabam acumulando muitas tarefas antes de virar para produção. Isso ocorre por não justificar gastar, por exemplo, o dobro de tempo gasto no que foi desenvolvido somente para fazer a entrega.

Ai sabe como é que é, o tudao.tar.gz demora pra ser enviado, problemas de falta de arquivo, ninguém dorme, e aquela história de sempre.

Se você está desenvolvendo para web, utilize o <a href="http://capify.org">Capistrano</a>. Mas este post não é sobre isso.

Essa introdução é uma justificativa para o sistema de deploy que eu montei para o meu <a href="http://rafael.adm.br/voltandopracasa">podcast Voltando pra Casa</a>.

Desde que tive <a href="http://rafael.adm.br/p/a-ideia/">a idéia de fazer o podcast</a>, eu sabia que se eu não montasse um esquema automatizado para a publicação, acabaria não mantendo com a freqüência desejada de um podcast por dia.

Comecei a pensar no fluxo necessário e cheguei à seguinte proposta:
<ol>
	<li>Gravo no meu Celular Nokia N95 os arquivos</li>
	<li>Ao ligar o MacBook o script de sincronização (de contatos e agenda) rodaria também a sincronização dos audios gravados. (isso ainda não rolou)</li>
	<li>Um programa escrito em Ruby e Shoes abriria perguntando quais arquivos eu desejo publicar. (isso não vai rolar, usei a abordagem de workflow por diretório)</li>
	<li>Ao selecionar os arquivos, eles entram em fila para serem processados.</li>
	<li>A rotina de processamento, faz um mix colocando um wav padrão no início e no final de cada arquivo.</li>
	<li>Os arquivos já mixados são convertidos de .wav para .mp3</li>
	<li>Em seguida, as tags ID3 são aplicadas em cada arquivos convertido</li>
	<li>Eles são enviados por ftp para o meu servidor de hospedagem</li>
	<li>Um post é criado no WordPress pelo XML-RPC e salvo como rascunho</li>
	<li>O firefox é aberto na página do post para eu editá-lo e publicá-lo</li>
</ol>
Resumindo, minha interação se restringe a escolher quais arquivos gravados no celular serão convertidos em podcast e depois publicar no momento que achar oportuno.

Desta maneira a chance de eu conseguir manter este podcast aumenta bastante!

Vou publicar este script em breve no GitHub em <a href="http://github.com/rafaelp/podcast-deployment">http://github.com/rafaelp/podcast-deployment</a>

Abraços e até a próxima.
