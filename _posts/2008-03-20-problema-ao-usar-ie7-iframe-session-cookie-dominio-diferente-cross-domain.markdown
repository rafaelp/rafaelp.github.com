--- 
layout: post
status: publish
published: true
title: "Problema ao usar IE7 + Iframe + Session + Cookie + Dom\xC3\xADnio diferente (cross-domain)"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 177
wordpress_url: http://rafael.adm.br/p/problema-ao-usar-ie7-iframe-session-cookie-dominio-diferente-cross-domain/
date: 2008-03-20 11:49:27 -03:00
categories: 
- Posts
tags: 
- "programa\xC3\xA7\xC3\xA3o"
- dicas
- bug
- ie7
- ifreame
- session
- cookie
- cross-domain
---
Passei por um problema agora no sistema que faço para a <a href="http://www.telequality.com.br">Telequality</a> que é chato e não tem muita coisa escrita sobre.

Quando você usa um iframe, a página de dentro do iframe está em um domínio diferente da página que possui o código iframe, e essa página interna usa session com cookies, o IE7 por padrão ignora o cookie silenciosamente.

Isso pode acontecer no IE6 dependendo das configurações de segurança, mas não acontece por padrão, pois as configurações que vêm de fábrica são mais tranquilas do que aos do IE7.

Para corrigir o problema, é necessário enviar um header com as diretivas de segurança <a href="http://www.w3.org/P3P/">P3P</a> na página que é chamada dentro do iframe.

No meu caso era um PHP e por isso inclui a seguinte linha no código:

<pre lang="php">header('p3p: CP="CAO PSA OUR"');</pre>

A linha seguinte diz para o navegador que o site fornece acesso a própria conta de informação (CAO), que os dados analisados são somente "pseudo-analisados" o que significa que os dados estão conectados à sua persona on-line e não à sua identidade física (PSA) e que os dados não são fornecidos para quaisquer agências externas para uso de tais agências (OUR).

Com isso o IE para de frescura e aceita os cookies dentro do iframe.

Abraços e até a próxima.
