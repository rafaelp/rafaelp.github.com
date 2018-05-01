---
title: N&atilde;o use ajax para navega&ccedil;&atilde;o
date: 2006-04-21 11:04:37 -03:00
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- ajax
- navega&ccedil;&atilde;o
- web2.0
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 15
wordpress_url: http://rafael.adm.br/nao-use-ajax-para-navegacao/
---

Existe uma discuss&atilde;o grande sobre a utiliza&ccedil;&atilde;o do ajax, suas vantagens e defici&ecirc;ncias. O recente artigo da <a href="http://webinsider.uol.com.br/">Web Insider</a>, <a href="http://webinsider.uol.com.br/vernoticia.php/id/2801">"Ajax tamb&eacute;m enfrenta problemas. Veja quais s&atilde;o."</a> nos traz algumas desvantagens na utiliza&ccedil;&atilde;o do ajax. N&atilde;o acho que s&atilde;o desvantagens dependendo de como voc&ecirc; utiliza a tecnologia.

Se formor analisar, as maiores desvantagens est&atilde;o relacionadas com a utiliza&ccedil;&atilde;o do ajax para navega&ccedil;&atilde;o, ou seja, voc&ecirc; carregar apenas a primeira p&aacute;gina completa e fazer de todo link, uma requisi&ccedil;&atilde;o ajax, que carrega apenas o que precisa mudar na tela.

Pelo menos hoje, abril de 2006, eu diria que esta n&atilde;o &eacute; uma boa aplica&ccedil;&atilde;o do ajax. Eu discordo deste tipo de utiliza&ccedil;&atilde;o e acho que ajax deve ser utilizado para eventos de uma mesma p&aacute;gina, por exemplo, processamento de formul&aacute;rios, valida&ccedil;&otilde;es no servidor, inclus&atilde;o de um item na p&aacute;gina de listagem, etc...

Os links de navega&ccedil;&atilde;o devem permanecer levando o usu&aacute;rio para uma nova p&aacute;gina "completa". Na maioria dos casos o que permanece igual de uma p&aacute;gina para outra &eacute; apenas o header e o footer, nenhum deles gastam muita banda nem afetam consideravelmente o tempo de resposta da requisi&ccedil;&atilde;o. Na rela&ccedil;&atilde;o custo/benef&iacute;cio considero que voc&ecirc; ganha muito mais abrindo m&atilde;o desta pequena economia.
&Eacute; importante ressaltar que isso &eacute; v&aacute;lido para p&aacute;ginas bem escritas com o m&iacute;nimo de c&oacute;digo html e principalmente poucas requisi&ccedil;&otilde;es de stylesheets e javascripts.

Vamos simplificar as coisas e desenvolver aplica&ccedil;&otilde;es simples!

O que voc&ecirc; ganha evitando ajax na navega&ccedil;&atilde;o:
<ul>
	<li>Favoritos - Cada p&aacute;gina ter&aacute; seu pr&oacute;prio link, viabilizando a utiliza&ccedil;&atilde;o de bookmarks</li>
	<li>Bot&otilde;es Voltar e Atualizar - O sistema de navega&ccedil;&atilde;o padr&atilde;o dos navegadores ir&aacute; funcionar</li>
	<li>Logs de acesso do servidor web - Voc&ecirc; ter&aacute; seus logs limpos, prontos para serem analisados pelas ferramentas mais populares.</li>
</ul>
Eu n&atilde;o tenho certeza se os navegadores e servidores ir&atilde;o se adaptar para aceitar o ajax na navega&ccedil;&atilde;o. As URIs e o caminho que o usu&aacute;rio percorre entre elas s&atilde;o informa&ccedil;&otilde;es extremamente valiosas para os marketeiros de plant&atilde;o (l&ecirc;-se Google, Yahoo, e cia).
