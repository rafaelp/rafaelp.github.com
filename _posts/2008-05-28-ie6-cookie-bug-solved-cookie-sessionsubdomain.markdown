---
title: IE 6 Cookie bug - Setting cookies fails when the hostname of the server contains
  an underscore.
date: 2008-05-28 13:44:42 -03:00
categories:
- Posts
tags:
- dicas
- bug
- session
- cookie
- ie6
- ie
- solved
- trick
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 201
wordpress_url: http://rafael.adm.br/?p=201
---

<strong>Setting  	cookies fails when the hostname of the server contains an underscore. </strong>

<span id="PostView1"><span class="normalTextSmall">This happens because  	the machine name contains an underscore, technically prohibited by DNS rules  	(LetterDigitsHyphen) and hence blocked. This issue is mostly relevant for  	Intranet sites; most DNS systems will prohibit use of underscores in  	hostnames due to the LDH rule.  See 	<a href="http://support.microsoft.com/kb/909264"> http://support.microsoft.com/kb/909264</a> for more info.</span></span>

Source: <a href="http://www.enhanceie.com/ie/bugs.asp">http://www.enhanceie.com/ie/bugs.asp</a>

***

Passei horas tentando descobrir este bug! Na verdade estava usando o Drupal e foi um parto at&eacute; descobrir que o problema n&atilde;o tinha nada haver com ele.

Depois percebi que um simples script que setava uma vari&aacute;vel na session n&atilde;o funcionava no IE6. Depois de algumas buscas e principalmente da ajuda do meu amigo Cesar descobrimos o link acima.

<strong>Resumo: N&atilde;o utilize undescore "_" em subdom&iacute;nios.</strong>

Isso &eacute; o maravilhoso IE!

Por essas e outras que <a href="http://rafael.adm.br/p/a-microsoft-continua-uma-merda/">eu amo a Microsoft</a>.
