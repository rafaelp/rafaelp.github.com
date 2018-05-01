---
title: Pagamento on-line no Brasil - Boleto Banc&aacute;rio
date: 2008-04-30 17:47:54 -03:00
categories:
- Posts
tags:
- webapp
- e-commerce
- venda
- cobran&ccedil;a
- pagamento
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 184
wordpress_url: http://rafael.adm.br/p/pagamento-on-line-no-brasil-boleto-bancario/
---

<strong>Atualizado em 06/11/2009:</strong> O <a href="http://cobregratis.com.br/?utm_campaign=blogwatch&amp;utm_source=rafael.adm.br&amp;utm_medium=link&amp;utm_term=pagamento-on-line-no-brasil-boleto-bancario">Cobre Gr&aacute;tis</a> emite e gerencia boletos banc&aacute;rios gratuitamente.

Este post &eacute; uma tentativa de responder as perguntas do <a href="http://www.improveit.com.br/vinicius">Vinicius</a> feitas no <a href="http://blog.improveit.com.br">blog da Improve-It</a> no post entitulado <a href="http://blog.improveit.com.br/articles/2008/04/28/call-for-help">Call for Help</a>. O objetivo dele &eacute; justamente usar o poder do blog para fomentar discuss&atilde;o interessante para seu uso pessoal, uma iniciativa inteligente que eu apoio. As empresas poderiam criar seu <a href="http://blogempresa.com.br">Blog Empresa</a> e fazer isso tamb&eacute;m!

Vamos ao que interessa, vou abrir aqui uma parte do meu conhecimento adquirido no &uacute;ltimos anos com a <a href="http://bielsystems.com.br">BielSystems</a>.

Em seu post, <a href="http://www.improveit.com.br/vinicius">Vinicius</a> levanta as seguintes quest&otilde;es:
<ul>
	<li>Quais as modalidades de pagamento aceitas (ex: cart&atilde;o, boleto etc)?</li>
	<li>Como funciona do ponto de vista comercial?</li>
	<li>Quais as taxas cobradas para cada modalidade de pagamento?</li>
	<li>Como funciona do ponto de vista t&eacute;cnico?</li>
</ul>
As modalidades de pagamento vi&aacute;veis para servi&ccedil;os na web s&atilde;o boleto banc&aacute;rio, cart&atilde;o de cr&eacute;dito, transfer&ecirc;ncia on-line ou "bancos on-line". Chamo de bancos on-line estes servi&ccedil;os estilo <a href="http://paypal.com">PayPal</a>. No Brasil s&atilde;o eles: <a href="https://pagseguro.uol.com.br">PagSeguro</a> ou <a href="http://moip.com.br">MoIP</a>. Estes tamb&eacute;m viabilizam recebimento pelas outras formas de pagamento. No brasil existe tamb&eacute;m o d&eacute;bito autom&aacute;tico, mas n&atilde;o se aplica para pequenas empresas que querem ganhar dinheiro com servi&ccedil;os na web.

<strong>Boleto Banc&aacute;rio</strong>

O boleto banc&aacute;rio &eacute; a forma de pagamento mais vi&aacute;vel para servi&ccedil;os na web. As pessoas confiam mais e n&atilde;o depende delas colocarem dados cr&iacute;ticos para efetuar a compra. Existe a vantagem que n&atilde;o h&aacute; risco de fraude, uma vez pago, o dinheiro est&aacute; na conta e ningu&eacute;m mais tira de l&aacute;. Alguns boletos ficam bloqueados at&eacute; o momento da compensa&ccedil;&atilde;o banc&aacute;ria o correto &eacute; s&oacute; considerar o recebimento ap&oacute;s a grana entrar no extrato.

A desvantagem do boleto banc&aacute;rio &eacute; que ele demora para cair na conta. Um pagamento feito hoje vai demorar em geral dois dias &uacute;teis para entrar na sua conta. Voc&ecirc; tem duas op&ccedil;&otilde;es, a primeira &eacute; liberar o servi&ccedil;o mesmo antes do boleto ser pago, mas este &eacute; um risco enorme e n&atilde;o aconselh&aacute;vel. Opte por esta op&ccedil;&atilde;o apenas se voc&ecirc; tiver todos os dados para contatar a pessoa e estrutura para realizar cobran&ccedil;a. A segunda op&ccedil;&atilde;o, que &eacute; mais comun, &eacute; liberar o servi&ccedil;o ap&oacute;s a compensa&ccedil;&atilde;o banc&aacute;ria. Quando voc&ecirc; vende um servi&ccedil;o que o usu&aacute;rio compra por impulso ou deseja usufruir do servi&ccedil;o no momento da compra, este tempo &eacute; um fator determinante.

Para emitir boleto voc&ecirc; precisa fechar um contrato de carteira de cobran&ccedil;a com o banco onde sua empresa possui conta. Existem dois tipos de cobran&ccedil;a, a simples e a registrada. A diferen&ccedil;a &eacute; que na cobran&ccedil;a simples o banco s&oacute; toma conhecimento do boleto que voc&ecirc; gerou no momento que a pessoa efetua o pagamento enquanto na cobran&ccedil;a registrada, o boleto emitido &eacute; registrado no sistema do banco no momento da emiss&atilde;o. Para gerar um boleto na carteira de cobran&ccedil;a registrada &eacute; necess&aacute;rio usar o sistema do banco. Cada banco possui um sistema diferente. Se voc&ecirc; deseja emitir o boleto banc&aacute;rio pelo seu sistema necessariamente precisar&aacute; optar pela cobran&ccedil;a simples. Para servi&ccedil;os na web opte por cobran&ccedil;a simples mesmo.

Dica de seguran&ccedil;a: Na cobran&ccedil;a simples, voc&ecirc; preenche o boleto e o banco n&atilde;o tem como confirmar os dados digitados pelo cliente no momento do pagamento, dependendo de como seu software gerar a linha digit&aacute;vel. Se n&atilde;o houver valor fixado na linha digit&aacute;vel, a pessoa poder&aacute; optar por pagar apenas R$ 5,00 um boleto cujo valor &eacute; R$ 50,00. Sistemas com baixa autom&aacute;tica devem contemplar esta situa&ccedil;&atilde;o.

Voc&ecirc; vai precisar de um software para gerar o boleto. De prefer&ecirc;ncia que possa ser automatizado com sua aplica&ccedil;&atilde;o. Os primeiros boletos gerados por este software precisam ser homologados no banco. <span style="text-decoration: line-through;">Existem algumas op&ccedil;&otilde;es na internet tais como </span><a href="http://cobrebem.com.br"><span style="text-decoration: line-through;">Cobre Bem</span></a><span style="text-decoration: line-through;">, </span><a href="http://www.braspag.com.br/"><span style="text-decoration: line-through;">Braspag</span></a><span style="text-decoration: line-through;"> e </span><a href="http://www.iboleto.com.br/"><span style="text-decoration: line-through;">iBoleto.</span></a>

<a href="http://www.iboleto.com.br/"></a><strong>O </strong><a href="http://cobregratis.com.br/?utm_campaign=blogwatch&amp;utm_source=rafael.adm.br&amp;utm_medium=link&amp;utm_term=pagamento-on-line-no-brasil-boleto-bancario"><strong>Cobre Gr&aacute;tis</strong></a><strong> parece ser a melhor op&ccedil;&atilde;o, ele &eacute; usa sistema gratuita para emiss&atilde;o e gerenciamento de boletos banc&aacute;rios.</strong>

Na BielSystems usamos os servi&ccedil;os da Cobre Bem em conjunto com a nossa extranet desenvolvida "em casa". Al&eacute;m do sistema de gera&ccedil;&atilde;o do boleto, voc&ecirc; vai precisar de um sistema de gerenciamento de boleto. A extranet da BielSystems cuida disso tudo. Enviamos o boleto em PDF por e-mail e realizamos a baixa autom&aacute;tica de acordo com o arquivo retorno do banco. Abaixo uma captura de tela, qualquer semelhan&ccedil;a com <a href="http://37signals.com">37signals</a> &eacute; pura coincid&ecirc;ncia!

<a href="http://rafael.adm.br/wp-content/uploads/2008/04/bielsystems-extranet.png"><img src="http://rafael.adm.br/wp-content/uploads/2008/04/bielsystems-extranet.png" alt="Extranet da BielSystems" width="504" height="300" /></a>

Nossa extranet &eacute; um web service que &eacute; acessado pelas nossas aplica&ccedil;&otilde;es, ou seja, todo o processo est&aacute; 100% automatizado, mas chegar neste ponto deu um trabalh&atilde;o.

O banco disponibiliza o arquivo retorno com a listagem de boletos pagos. Dependendo como estiver seu sistema de gerenciamento voc&ecirc; poder&aacute; dar baixa em cada boleto de forma autom&aacute;tica, pelo arquivo chamado CNAB. Se voc&ecirc; n&atilde;o tiver um sistema que fa&ccedil;a isso, ter&aacute; que baixar os boletos manualmente, entrando no banco, vendo  os boletos pagos no dia e baixando no seu sistema.

Embora exista um padr&atilde;o FEBRABAN para este arquivo retorno, cada banco possui um layout diferente. Isso &eacute; um saco, eles conseguem estragar um neg&oacute;cio que deveria ser padr&atilde;o. No primeiro vai parecer que &eacute; tudo igual, mas na pr&aacute;tica, n&atilde;o &eacute;.

O custo com o banco de cada boleto banc&aacute;rio pago, na carteira simples, n&atilde;o ser&aacute; de menos de R$ 2,00. Em geral esse custo &eacute; de R$ 4,00 mas dependendo do volume, voc&ecirc; pode negociar com seu gerente.

Na carteira simples, voc&ecirc; pode emitir quantos boletos quiser sem custo com o banco. Voc&ecirc; s&oacute; paga para o banco quando o boleto for pago. Dependendo da solu&ccedil;&atilde;o para gerar boletos, voc&ecirc; pode ter um custo unit&aacute;rio por boleto gerado.

Sobre boleto banc&aacute;rio &eacute; isso, acho que respondi todas as perguntas, penso em continuar com as pr&oacute;ximas formas de pagamento e com as demais perguntas em pr&oacute;ximos posts.

O que acham?

P.S. Se voc&ecirc; deseja realizar cobran&ccedil;a por boleto banc&aacute;rio, d&ecirc; uma olhada no&nbsp;<a href="http://cobregratis.com.br/?utm_campaign=blogwatch&amp;utm_source=rafael.adm.br&amp;utm_medium=link&amp;utm_term=pagamento-on-line-no-brasil-boleto-bancario">Cobre Gr&aacute;tis</a>.
