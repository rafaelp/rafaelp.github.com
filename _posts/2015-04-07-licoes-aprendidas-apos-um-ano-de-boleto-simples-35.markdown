---
title: Lições aprendidas após um ano de Boleto Simples 3/5
date: 2015-04-07 00:00:00 -03:00
categories:
- Posts
tags:
- boletosimples
- saas
- produto
- software
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
---

O [Boleto Simples](https://boletosimples.com.br) é um sistema de cobrança que permite qualquer pessoa receber dinheiro usando boleto bancário sem precisar ter a carteira de cobrança no banco. Depois de um ano do produto lançado no mercado, compartilho nessa série de 5 posts os maiores aprendizados que eu tive.
## Aprendizado 3: Investir na API &eacute; fundamental



A API é um dos pontos mais estratégicos para o Boleto Simples hoje. É natural que ao fazer um sistema Software as a Service a gente faça uma API para que os desenvolvedores possam integrar as suas aplicações à nossa. É mais natural ainda que façamos uma API merda.



Fazer uma API ruim é muito fácil :) Principalmente quando o Product Owner não é programador. É simplesmente impossível que de cara ele priorize tempo o suficiente para o investimento na API de modo que ela fique realmente muito boa.



Se [implementar métricas dá trabaho](http://rafael.adm.br/p/licoes-aprendidas-apos-um-ano-de-boleto-simples-25/), desenvolver uma API, dá muito mais. Mais uma vez eu tive que me superar. No Cobre Grátis temos uma API. Posso dizer que ela é boa. Está em produção e tem muita gente usando. Mesmo sendo boa, ela não chega aos pés da API do Boleto Simples.



Uma boa API precisa ter:


- <span>Um bom sistema de autentica&ccedil;&atilde;o, de prefer&ecirc;ncia OAuth 2;</span>
- <span>Implementar os v&aacute;rios fluxos poss&iacute;veis do OAuth (Authorization flow, Client Credentials flow, Implicit grant);</span>
- <span>Sistema de seguran&ccedil;a, baseado em escopos;</span>
- <span>Sistema de cache HTTP;</span>
- <span>API throttling com regras de limite de requisi&ccedil;&atilde;o e informa&ccedil;&otilde;es no header da resposta;</span>
- <span>Ambiente de sandbox para os desenvolvedores testarem as integra&ccedil;&otilde;es;</span>
- <span>Exemplo de c&oacute;digo nas mais diversas linguagens de programa&ccedil;&atilde;o;</span>
- <span>Bibliotecas de uso nas mais diversas linguagens de programa&ccedil;&atilde;o;</span>
- <span>Refer&ecirc;ncias de cada recurso, com modelo de dados e dicion&aacute;rio de dados;</span>
- <span>Controle de eventos que acontecem dentro do sistema;</span>
- <span>Sistema de webhooks que geram notifica&ccedil;&otilde;es para cada evento ocorrido;</span>
- <span>Sistema de retentativa de entregas no Webhook;</span>
- <span>Payloads bem definidos e documentados;</span>
- <span>Interface para debug das requisi&ccedil;&otilde;es realizadas na interface do usu&aacute;rio;</span>
- <span>Assinatura de seguran&ccedil;a no cabe&ccedil;alho das requisi&ccedil;&otilde;es;</span>
- <span>Uma excelente documenta&ccedil;&atilde;o, descrevendo os formatos, conven&ccedil;&otilde;es, bibliotecas, cada detalhe que est&aacute; implementado;</span>



A documentação da API do Boleto Simples tem quase tudo isso e está disponível em [http://api.boletosimples.com.br/](http://api.boletosimples.com.br/)



Embora tenha 95% dos recursos citados acima, ela não está ainda do jeito que eu acho que deveria :)



Uma API impecável, incentiva os desenvolvedores a "brincarem" com o seu sistema e viabiliza a estratégia de parceria que é o assunto do próximo post.



Esse foi o terceiro aprendizado que eu escolhi compartilhar. Os outros foram:

[Atendimento é tudo](http://rafael.adm.br/p/lies-aprendidas-aps-um-ano-de-boleto-simples-15/) e [Priorize o tracking das métricas](http://rafael.adm.br/p/licoes-aprendidas-apos-um-ano-de-boleto-simples-25/).



Em seguida vou publicar os próximos aprendizados. Para ser notificado quando os próximos posts forem publicados, [assine o RSS](https://feeds.feedburner.com/rafael_lima), ou [me acompanhe no Twitter](https://twitter.com/rafaelp).



Abraço e até a próxima!
