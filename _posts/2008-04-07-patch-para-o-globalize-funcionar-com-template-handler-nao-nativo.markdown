---
title: Patch para o Globalize funcionar com template handler n&atilde;o nativo
date: 2008-04-07 21:03:53 -03:00
categories:
- Posts
tags:
- programa&ccedil;&atilde;o
- rails
- globalize
- dicas
- bug
- globalization
- patch
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 180
wordpress_url: http://rafael.adm.br/p/patch-para-o-globalize-funcionar-com-template-handler-nao-nativo/
---

Quando usamos o <a href="http://www.globalize-rails.org">Globalize 1.2</a>, plugin de internacionaliza&ccedil;&atilde;o para <a href="http://rubyonrails.com">Rails</a>, com parsers de templates n&atilde;o nativos, tais como <a href="http://www.liquidmarkup.org/">Liquid</a>, <a href="http://haml.hamptoncatlin.com/">HAML</a> ou <a href="http://github.com/Squeegy/fleximage/wikis">FlexImage</a> caimos num bug que pode tirar o sono de qualquer um.

Tudo funciona bem at&eacute; o momento que chamamos o Locale.set do Globalize. Neste momento o Globalize ativa um locale para a aplica&ccedil;&atilde;o e passa a usar sua pr&oacute;pria rotina que substitui o render_file do pr&oacute;prio Rails.

O problema &eacute; que estes parsers utilizam extens&otilde;es de arquivos pr&oacute;prias e a rotina do Globalize s&oacute; entende as extens&otilde;es nativas do Rails como poss&iacute;veis extens&otilde;es para arquivos de view.

Os handlers citamos acima utilizam as extens&otilde;es .liquid, .haml e .flexi respectivamente enquanto as extens&otilde;es nativas s&atilde;o rjs, rhtml e rxml.

Para fazer o Globalize entender as extens&otilde;es dos novos handlers ativados, altere a linha 8 no arquivo <strong>vendor/plugins/globalize-1.2/lib/globalize/rails/action_view.rb</strong>, trocando isso:
<pre lang="ruby">@@re_extension = /\.(rjs|rhtml|rxml|flexi)$/</pre>
por isso:
<pre lang="ruby">@@re_extension = Regexp.new "\.(#{ActionView::Base.template_handler_extensions.join("|")})$"</pre>
Agora o Globalize vai funcionar bem com qualquer template handler!

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
