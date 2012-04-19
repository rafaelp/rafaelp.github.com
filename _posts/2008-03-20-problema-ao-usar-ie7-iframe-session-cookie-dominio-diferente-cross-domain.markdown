---
layout: post
status: publish
published: true
title: Problema ao usar IE7 + Iframe + Session + Cookie + Dom&iacute;nio diferente
  (cross-domain)
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 177
wordpress_url: http://rafael.adm.br/p/problema-ao-usar-ie7-iframe-session-cookie-dominio-diferente-cross-domain/
date: 2008-03-20 11:49:27.000000000 -03:00
categories:
- Posts
tags:
- programa&ccedil;&atilde;o
- dicas
- bug
- ie7
- ifreame
- session
- cookie
- cross-domain
---
Passei por um problema agora no sistema que fa&ccedil;o para a <a href="http://www.telequality.com.br">Telequality</a> que &eacute; chato e n&atilde;o tem muita coisa escrita sobre.

Quando voc&ecirc; usa um iframe, a p&aacute;gina de dentro do iframe est&aacute; em um dom&iacute;nio diferente da p&aacute;gina que possui o c&oacute;digo iframe, e essa p&aacute;gina interna usa session com cookies, o IE7 por padr&atilde;o ignora o cookie silenciosamente.

Isso pode acontecer no IE6 dependendo das configura&ccedil;&otilde;es de seguran&ccedil;a, mas n&atilde;o acontece por padr&atilde;o, pois as configura&ccedil;&otilde;es que v&ecirc;m de f&aacute;brica s&atilde;o mais tranquilas do que aos do IE7.

Para corrigir o problema, &eacute; necess&aacute;rio enviar um header com as diretivas de seguran&ccedil;a <a href="http://www.w3.org/P3P/">P3P</a> na p&aacute;gina que &eacute; chamada dentro do iframe.

No meu caso era um PHP e por isso inclui a seguinte linha no c&oacute;digo:

<pre lang="php">header('p3p: CP="CAO PSA OUR"');</pre>

A linha seguinte diz para o navegador que o site fornece acesso a pr&oacute;pria conta de informa&ccedil;&atilde;o (CAO), que os dados analisados s&atilde;o somente "pseudo-analisados" o que significa que os dados est&atilde;o conectados &agrave; sua persona on-line e n&atilde;o &agrave; sua identidade f&iacute;sica (PSA) e que os dados n&atilde;o s&atilde;o fornecidos para quaisquer ag&ecirc;ncias externas para uso de tais ag&ecirc;ncias (OUR).

Com isso o IE para de frescura e aceita os cookies dentro do iframe.

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
