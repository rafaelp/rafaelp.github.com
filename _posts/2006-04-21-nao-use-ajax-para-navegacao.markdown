--- 
layout: post
status: publish
published: true
title: "N\xC3\xA3o use ajax para navega\xC3\xA7\xC3\xA3o"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 15
wordpress_url: http://rafael.adm.br/nao-use-ajax-para-navegacao/
date: 2006-04-21 11:04:37 -03:00
categories: 
- Posts
tags: 
- desenvolvimento
- "programa\xC3\xA7\xC3\xA3o"
- ajax
- "navega\xC3\xA7\xC3\xA3o"
- web2.0
---
Existe uma discussão grande sobre a utilização do ajax, suas vantagens e deficiências. O recente artigo da <a href="http://webinsider.uol.com.br/">Web Insider</a>, <a href="http://webinsider.uol.com.br/vernoticia.php/id/2801">"Ajax também enfrenta problemas. Veja quais são."</a> nos traz algumas desvantagens na utilização do ajax. Não acho que são desvantagens dependendo de como você utiliza a tecnologia.

Se formor analisar, as maiores desvantagens estão relacionadas com a utilização do ajax para navegação, ou seja, você carregar apenas a primeira página completa e fazer de todo link, uma requisição ajax, que carrega apenas o que precisa mudar na tela.

Pelo menos hoje, abril de 2006, eu diria que esta não é uma boa aplicação do ajax. Eu discordo deste tipo de utilização e acho que ajax deve ser utilizado para eventos de uma mesma página, por exemplo, processamento de formulários, validações no servidor, inclusão de um item na página de listagem, etc...

Os links de navegação devem permanecer levando o usuário para uma nova página "completa". Na maioria dos casos o que permanece igual de uma página para outra é apenas o header e o footer, nenhum deles gastam muita banda nem afetam consideravelmente o tempo de resposta da requisição. Na relação custo/benefício considero que você ganha muito mais abrindo mão desta pequena economia.
É importante ressaltar que isso é válido para páginas bem escritas com o mínimo de código html e principalmente poucas requisições de stylesheets e javascripts.

Vamos simplificar as coisas e desenvolver aplicações simples!

O que você ganha evitando ajax na navegação:
<ul>
	<li>Favoritos - Cada página terá seu próprio link, viabilizando a utilização de bookmarks</li>
	<li>Botões Voltar e Atualizar - O sistema de navegação padrão dos navegadores irá funcionar</li>
	<li>Logs de acesso do servidor web - Você terá seus logs limpos, prontos para serem analisados pelas ferramentas mais populares.</li>
</ul>
Eu não tenho certeza se os navegadores e servidores irão se adaptar para aceitar o ajax na navegação. As URIs e o caminho que o usuário percorre entre elas são informações extremamente valiosas para os marketeiros de plantão (lê-se Google, Yahoo, e cia).
