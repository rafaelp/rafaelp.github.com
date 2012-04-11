--- 
layout: post
title: "Patch para o Globalize funcionar com template handler n\xC3\xA3o nativo"
wordpress_id: 180
wordpress_url: http://rafael.adm.br/p/patch-para-o-globalize-funcionar-com-template-handler-nao-nativo/
date: 2008-04-07 21:03:53 -03:00
---
Quando usamos o <a href="http://www.globalize-rails.org">Globalize 1.2</a>, plugin de internacionalização para <a href="http://rubyonrails.com">Rails</a>, com parsers de templates não nativos, tais como <a href="http://www.liquidmarkup.org/">Liquid</a>, <a href="http://haml.hamptoncatlin.com/">HAML</a> ou <a href="http://github.com/Squeegy/fleximage/wikis">FlexImage</a> caimos num bug que pode tirar o sono de qualquer um.

Tudo funciona bem até o momento que chamamos o Locale.set do Globalize. Neste momento o Globalize ativa um locale para a aplicação e passa a usar sua própria rotina que substitui o render_file do próprio Rails.

O problema é que estes parsers utilizam extensões de arquivos próprias e a rotina do Globalize só entende as extensões nativas do Rails como possíveis extensões para arquivos de view.

Os handlers citamos acima utilizam as extensões .liquid, .haml e .flexi respectivamente enquanto as extensões nativas são rjs, rhtml e rxml.

Para fazer o Globalize entender as extensões dos novos handlers ativados, altere a linha 8 no arquivo <strong>vendor/plugins/globalize-1.2/lib/globalize/rails/action_view.rb</strong>, trocando isso:
<pre lang="ruby">@@re_extension = /\.(rjs|rhtml|rxml|flexi)$/</pre>
por isso:
<pre lang="ruby">@@re_extension = Regexp.new "\.(#{ActionView::Base.template_handler_extensions.join("|")})$"</pre>
Agora o Globalize vai funcionar bem com qualquer template handler!

Abraços e até a próxima.
