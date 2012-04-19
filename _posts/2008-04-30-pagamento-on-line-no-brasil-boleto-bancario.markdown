--- 
layout: post
status: publish
published: true
title: "Pagamento on-line no Brasil - Boleto Banc\xC3\xA1rio"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 184
wordpress_url: http://rafael.adm.br/p/pagamento-on-line-no-brasil-boleto-bancario/
date: 2008-04-30 17:47:54 -03:00
categories: 
- Posts
tags: 
- webapp
- e-commerce
- venda
- "cobran\xC3\xA7a"
- pagamento
---
<strong>Atualizado em 06/11/2009:</strong> O <a href="http://cobregratis.com.br/?utm_campaign=blogwatch&amp;utm_source=rafael.adm.br&amp;utm_medium=link&amp;utm_term=pagamento-on-line-no-brasil-boleto-bancario">Cobre Grátis</a> emite e gerencia boletos bancários gratuitamente.

Este post é uma tentativa de responder as perguntas do <a href="http://www.improveit.com.br/vinicius">Vinicius</a> feitas no <a href="http://blog.improveit.com.br">blog da Improve-It</a> no post entitulado <a href="http://blog.improveit.com.br/articles/2008/04/28/call-for-help">Call for Help</a>. O objetivo dele é justamente usar o poder do blog para fomentar discussão interessante para seu uso pessoal, uma iniciativa inteligente que eu apoio. As empresas poderiam criar seu <a href="http://blogempresa.com.br">Blog Empresa</a> e fazer isso também!

Vamos ao que interessa, vou abrir aqui uma parte do meu conhecimento adquirido no últimos anos com a <a href="http://bielsystems.com.br">BielSystems</a>.

Em seu post, <a href="http://www.improveit.com.br/vinicius">Vinicius</a> levanta as seguintes questões:
<ul>
	<li>Quais as modalidades de pagamento aceitas (ex: cartão, boleto etc)?</li>
	<li>Como funciona do ponto de vista comercial?</li>
	<li>Quais as taxas cobradas para cada modalidade de pagamento?</li>
	<li>Como funciona do ponto de vista técnico?</li>
</ul>
As modalidades de pagamento viáveis para serviços na web são boleto bancário, cartão de crédito, transferência on-line ou "bancos on-line". Chamo de bancos on-line estes serviços estilo <a href="http://paypal.com">PayPal</a>. No Brasil são eles: <a href="https://pagseguro.uol.com.br">PagSeguro</a> ou <a href="http://moip.com.br">MoIP</a>. Estes também viabilizam recebimento pelas outras formas de pagamento. No brasil existe também o débito automático, mas não se aplica para pequenas empresas que querem ganhar dinheiro com serviços na web.

<strong>Boleto Bancário</strong>

O boleto bancário é a forma de pagamento mais viável para serviços na web. As pessoas confiam mais e não depende delas colocarem dados críticos para efetuar a compra. Existe a vantagem que não há risco de fraude, uma vez pago, o dinheiro está na conta e ninguém mais tira de lá. Alguns boletos ficam bloqueados até o momento da compensação bancária o correto é só considerar o recebimento após a grana entrar no extrato.

A desvantagem do boleto bancário é que ele demora para cair na conta. Um pagamento feito hoje vai demorar em geral dois dias úteis para entrar na sua conta. Você tem duas opções, a primeira é liberar o serviço mesmo antes do boleto ser pago, mas este é um risco enorme e não aconselhável. Opte por esta opção apenas se você tiver todos os dados para contatar a pessoa e estrutura para realizar cobrança. A segunda opção, que é mais comun, é liberar o serviço após a compensação bancária. Quando você vende um serviço que o usuário compra por impulso ou deseja usufruir do serviço no momento da compra, este tempo é um fator determinante.

Para emitir boleto você precisa fechar um contrato de carteira de cobrança com o banco onde sua empresa possui conta. Existem dois tipos de cobrança, a simples e a registrada. A diferença é que na cobrança simples o banco só toma conhecimento do boleto que você gerou no momento que a pessoa efetua o pagamento enquanto na cobrança registrada, o boleto emitido é registrado no sistema do banco no momento da emissão. Para gerar um boleto na carteira de cobrança registrada é necessário usar o sistema do banco. Cada banco possui um sistema diferente. Se você deseja emitir o boleto bancário pelo seu sistema necessariamente precisará optar pela cobrança simples. Para serviços na web opte por cobrança simples mesmo.

Dica de segurança: Na cobrança simples, você preenche o boleto e o banco não tem como confirmar os dados digitados pelo cliente no momento do pagamento, dependendo de como seu software gerar a linha digitável. Se não houver valor fixado na linha digitável, a pessoa poderá optar por pagar apenas R$ 5,00 um boleto cujo valor é R$ 50,00. Sistemas com baixa automática devem contemplar esta situação.

Você vai precisar de um software para gerar o boleto. De preferência que possa ser automatizado com sua aplicação. Os primeiros boletos gerados por este software precisam ser homologados no banco. <span style="text-decoration: line-through;">Existem algumas opções na internet tais como </span><a href="http://cobrebem.com.br"><span style="text-decoration: line-through;">Cobre Bem</span></a><span style="text-decoration: line-through;">, </span><a href="http://www.braspag.com.br/"><span style="text-decoration: line-through;">Braspag</span></a><span style="text-decoration: line-through;"> e </span><a href="http://www.iboleto.com.br/"><span style="text-decoration: line-through;">iBoleto.</span></a>

<a href="http://www.iboleto.com.br/"></a><strong>O </strong><a href="http://cobregratis.com.br/?utm_campaign=blogwatch&amp;utm_source=rafael.adm.br&amp;utm_medium=link&amp;utm_term=pagamento-on-line-no-brasil-boleto-bancario"><strong>Cobre Grátis</strong></a><strong> parece ser a melhor opção, ele é usa sistema gratuita para emissão e gerenciamento de boletos bancários.</strong>

Na BielSystems usamos os serviços da Cobre Bem em conjunto com a nossa extranet desenvolvida "em casa". Além do sistema de geração do boleto, você vai precisar de um sistema de gerenciamento de boleto. A extranet da BielSystems cuida disso tudo. Enviamos o boleto em PDF por e-mail e realizamos a baixa automática de acordo com o arquivo retorno do banco. Abaixo uma captura de tela, qualquer semelhança com <a href="http://37signals.com">37signals</a> é pura coincidência!

<a href="http://rafael.adm.br/wp-content/uploads/2008/04/bielsystems-extranet.png"><img src="http://rafael.adm.br/wp-content/uploads/2008/04/bielsystems-extranet.png" alt="Extranet da BielSystems" width="504" height="300" /></a>

Nossa extranet é um web service que é acessado pelas nossas aplicações, ou seja, todo o processo está 100% automatizado, mas chegar neste ponto deu um trabalhão.

O banco disponibiliza o arquivo retorno com a listagem de boletos pagos. Dependendo como estiver seu sistema de gerenciamento você poderá dar baixa em cada boleto de forma automática, pelo arquivo chamado CNAB. Se você não tiver um sistema que faça isso, terá que baixar os boletos manualmente, entrando no banco, vendo  os boletos pagos no dia e baixando no seu sistema.

Embora exista um padrão FEBRABAN para este arquivo retorno, cada banco possui um layout diferente. Isso é um saco, eles conseguem estragar um negócio que deveria ser padrão. No primeiro vai parecer que é tudo igual, mas na prática, não é.

O custo com o banco de cada boleto bancário pago, na carteira simples, não será de menos de R$ 2,00. Em geral esse custo é de R$ 4,00 mas dependendo do volume, você pode negociar com seu gerente.

Na carteira simples, você pode emitir quantos boletos quiser sem custo com o banco. Você só paga para o banco quando o boleto for pago. Dependendo da solução para gerar boletos, você pode ter um custo unitário por boleto gerado.

Sobre boleto bancário é isso, acho que respondi todas as perguntas, penso em continuar com as próximas formas de pagamento e com as demais perguntas em próximos posts.

O que acham?

P.S. Se você deseja realizar cobrança por boleto bancário, dê uma olhada no <a href="http://cobregratis.com.br/?utm_campaign=blogwatch&amp;utm_source=rafael.adm.br&amp;utm_medium=link&amp;utm_term=pagamento-on-line-no-brasil-boleto-bancario">Cobre Grátis</a>.
