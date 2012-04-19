--- 
layout: post
status: publish
published: true
title: Experimentos de Lean Startup realizados no Cobre Gr&aacute;tis
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 571
wordpress_url: http://rafael.adm.br/?p=571
date: 2011-08-17 18:51:08 -03:00
categories: 
- Posts
tags: 
- webapp
- startup
- leanstartup
- split testing
- lean
---
Nos &uacute;ltimos tempos venho aplicando bastante as t&eacute;cnicas de Lean Startup em meus neg&oacute;cios e tenho tido bons resultados. Nas &uacute;ltimas semanas, eu fiz alguns testes no <a href="http://cobregratis.com.br">Cobre Gr&aacute;tis</a> e compartilho neste post o processo, as ferramentas usadas e o resultado de um destes testes realizados.

Eu estava pensando maneiras de converter mais visitantes em usu&aacute;rios no Cobre Gr&aacute;tis, ou seja, fazer com que as pessoas que visitassem o site, criassem uma conta para experimentar o aplicativo. Uma das ideias que tive, foi retirar o link de Planos e Pre&ccedil;os no menu superior. Desta forma, eu estaria reduzindo as interfer&ecirc;ncias da tela e com menos op&ccedil;&otilde;es de cliques eu acreditava que o caminho natural para o usu&aacute;rio seria criar a conta.

Al&eacute;m disso eu pensei assim: "Se o usu&aacute;rio quer mesmo usar o sistema, ele vai se inscrever. Se ele quiser saber o pre&ccedil;o, ele vai criar uma conta para saber o pre&ccedil;o."

Essa era a minha hip&oacute;tese que precisava ser validada:
<strong>Retirar o link de Planos e Pre&ccedil;os aumentar&aacute; o n&uacute;mero de contas criadas</strong>

Em rela&ccedil;&atilde;o &agrave; esta hip&oacute;tese, eu fiz dois tipos de teste. No primeiro teste eu usei uma aplicativo chamado <a href="http://verifyapp.com">Verify</a> que permite fazer testes de interface. Achei a proposta muito bacana e resolvi test&aacute;-lo.

Funciona da seguinte maneira. Quando a pessoa acessa o link para realizar o teste, ela l&ecirc; uma pergunta e tem um bot&atilde;o de prosseguir. Ao clicar em prosseguir, uma imagem aparece bem grande e ela tem que clicar em algum lugar da tela. O sistema registra o tempo e o clique e depois gera um relat&oacute;rio.

No meu teste eu fiz a seguinte pergunta:
<strong>Voc&ecirc; deseja saber quanto custa o Cobre Gr&aacute;tis, onde voc&ecirc; clica?</strong>

Ao prosseguir, a pessoa via a seguinte tela (clique na imagem para ampliar).
<a href="http://rafael.adm.br/wp-content/uploads/2011/08/cobregratis-sem-link.jpg"><img src="http://rafael.adm.br/wp-content/uploads/2011/08/cobregratis-sem-link-134x300.jpg" alt="" title="cobregratis-sem-link" width="134" height="300" class="aligncenter size-medium wp-image-573" /></a>

Liberei o link da pesquisa no meu Twitter e esperei as 24h para o resultado.
A pesquisa recebeu 142 visitas, mas somente 49 prosseguiram.
O resultado parecia validar a minha hip&oacute;tese, 3 pessoas clicaram no screenshot, 2 em Acessar Conta, 2 no logo, mas a grande maioria clicou em Criar Conta (onde eu imaginava mesmo).
Analisando melhor, eu vi que as pessoas ficaram na d&uacute;vida. O Verify marca quanto tempo demorou para a pessoa clicar e pude constatar que antes dos primeiros 10 segundos houveram apenas 3 cliques.

Veja imagem parcial do resultado (clique na imagem para ampliar).
<a href="http://rafael.adm.br/wp-content/uploads/2011/08/cobregratis-resultado-verify-leanstartup.png"><img src="http://rafael.adm.br/wp-content/uploads/2011/08/cobregratis-resultado-verify-leanstartup-300x163.png" alt="" title="cobregratis-resultado-verify-leanstartup" width="300" height="163" class="aligncenter size-medium wp-image-589" /></a>

Foi bem interessante este experimento, mas ele n&atilde;o foi o suficiente. Eu precisava saber se realmente retirar o link iria aumentar as convers&otilde;es.

Parti para um segundo teste, um teste A/B. Nos testes A/B voc&ecirc; cria duas varia&ccedil;&otilde;es da sua p&aacute;gina, mede determinadas a&ccedil;&otilde;es dos usu&aacute;rios afim de identificar qual varia&ccedil;&atilde;o performa melhor.

Utilizei uma ferramenta chamada <a href="http://optimizely.com">Optimizely</a>. O Optimizely possui uma interface onde voc&ecirc; pode alterar o conte&uacute;do atual do seu site, criar varia&ccedil;&otilde;es e definir as a&ccedil;&otilde;es dos usu&aacute;rios que voc&ecirc; deseja medir. Ele funciona com o seu site onde ele estiver, basta que voc&ecirc; inclua o snippet de c&oacute;digo javascript que ele fornece.

No meu caso foi simples, eu tinha a p&aacute;gina base, com o link de planos e pre&ccedil;os e uma varia&ccedil;&atilde;o onde eu retirava o link. Eu medi a quantidade de pessoas que chegavam na p&aacute;gina "Conta criada com sucesso" que aparece logo ap&oacute;s digitar o e-mail e clicar em Criar Conta.

Este teste rodou com 517 visitantes dentre os quais 277 visualizaram a p&aacute;gina original (com link) e 240 visualizaram a varia&ccedil;&atilde;o (sem link).

<strong>O resultado foi surpreendente!!!</strong>

A taxa de convers&atilde;o da p&aacute;gina original foi de 22,4% enquanto a taxa de convers&atilde;o da p&aacute;gina sem o link, que eu achei que iria ser melhor, foi de apenas 16,3%. Ou seja, o n&uacute;mero de contas criadas foi 27,4% pior, na p&aacute;gina sem o link.

Veja o gr&aacute;fico do resultado (clique na imagem para ampliar).
<a href="http://rafael.adm.br/wp-content/uploads/2011/08/cobregratis-resultado-teste-ab-leanstartup.png"><img src="http://rafael.adm.br/wp-content/uploads/2011/08/cobregratis-resultado-teste-ab-leanstartup-300x163.png" alt="" title="cobregratis-resultado-teste-ab-leanstartup" width="300" height="163" class="aligncenter size-medium wp-image-580" /></a>

Depois deste teste eu deixei o link ali quietinho e o pr&oacute;ximo passo &eacute; trabalhar na p&aacute;gina de planos e pre&ccedil;os em si.

<strong>Conclus&atilde;o: Eu estava errado!</strong>

Isso aconteceu comigo e acontece muito por a&iacute;. De fato &eacute; o conjunto dessas "certezas sem fundamento" que acabam destruindo muitos neg&oacute;cios. &Eacute; muito importante validar cada elemento da vis&atilde;o do empreendedor.

Fiquei muito feliz e satisfeito com este teste, tamb&eacute;m constatei na pr&aacute;tica o valor em adotar as t&eacute;cnicas de Lean Startup. &Eacute; por isso que estou compartilhando este conhecimento adquirido atrav&eacute;s de <a href="http://workshop.bootstrappers.com.br/">workshops online</a> e <a href="http://bit.ly/leanstartup-bsb">workshops presenciais</a>.

Espero que este teste sirva de incentivo para voc&ecirc; come&ccedil;ar a validar as hip&oacute;teses do seu neg&oacute;cio!

Abra&ccedil;o e at&eacute; a pr&oacute;xima.

