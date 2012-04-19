--- 
layout: post
status: publish
published: true
title: Pagamento on-line no Brasil - Bancos Online
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 394
wordpress_url: http://rafael.adm.br/?p=394
date: 2009-09-29 22:38:39 -03:00
categories: 
- Posts
tags: 
- webapp
- e-commerce
- venda
- "cobran\xC3\xA7a"
- pagamento
---
Se você possui um negócio na internet, cujo modelo de remuneração seja baseado em venda de licença ou créditos para o usuário final, você irá precisar de uma infra-estrutura de pagamento online.

Sendo uma empresa privada, aqui no Brasil, você tem as seguintes opções viáveis para recebimento de dinheiro:
<ul>
	<li>Boleto Bancário</li>
	<li>Cartão de Crédito</li>
	<li>Transferência Online (integração com os bancos convencionais)</li>
	<li>Serviços de Pagamento Online</li>
</ul>
Eu já falei bastante sobre <a href="http://rafael.adm.br/p/pagamento-on-line-no-brasil-boleto-bancario/">recebimento por boleto bancário em um post anterior</a> agora é a vez dos serviços de pagamento online
<h3>O que são os serviços de pagamento online ou bancos online?</h3>
Um banco online é um serviço de processamento dos pagamentos realizados pelos seus clientes nas compras de seus produtos ou serviços através da internet.

No exterior os bancos online mais famosos são <a href="http://paypal.com">Paypal</a> e <a href="http://checkout.google.com">Google Checkout</a>.

No Brasil eu conheço o <a href="http://pagseguro.com.br">PagSeguro</a>, <a href="http://pagamentodigital.com.br">Pagamento Digital</a> e <a href="http://moip.com.br">MoIP</a>.

Ao utilizar um banco online você não precisa fechar um contrato com seu banco "convencional" para recebimento de boleto bancário, nem realizar afiliação às operadoras de cartão de crédito para cobrança por cartão.

Os bancos online brasileiros oferecem os mais variados meios de pagamentos. Se você se conecta a um banco online, você poderá receber dinheiro pelos meios de pagamento que ele oferece.
<h3>Quais as vantagens e desvantagens?</h3>
As principais <strong>vantagens</strong> são:
<ul>
	<li>Velocidade na implementação - A burocracia de fechar uma contrato de cobrança com o banco e afiliação com as operadoras de cartão de crédito é relativamente alto quando comparado à inscrição a um banco online.</li>
	<li>Facilidade de implementação - A integração com os bancos online através de api e formulários prontos é bem fácil e não requer muito tempo de desenvolvimento.</li>
	<li>Sistema anti-fraude - Os bancos online já possuem sistema anti-fraude, então não é necessário realizar este controle nem contratar serviços específicos.</li>
	<li>PCI Compliance - Quando você vai armazenar números de cartão de crédito, é necessário ter um compliance de segurança que aumenta os custos da sua infra-estrutura, utilizando banco online não é necessário se preocupar com isso, pois você não irá armazenar os números de cartão de crédito.</li>
	<li>Manutenção - Você não precisa manter um sistema a mais somente para cuidar dos pagamentos.</li>
</ul>
As principais <strong>desvantagens</strong> são:
<ul>
	<li>Dois cadastros - Seu cliente precisa ter ou abrir uma conta no banco online. No final das contas ele precisará se cadastrar duas vezes, uma vez no seu site e outra no banco online.</li>
	<li>Processo externo - No momento que o cliente vai realizar a compra, ele é "catapultado" para o site do banco online onde coloca os dados de pagamento,  para depois retornar para o seu site. Embora possa dar segurança, fica mais difícil a venda por impulso. Não é possível solicitar os dados na sua interface e processar o pagamento internamente.</li>
	<li>Dependência externa - Um dos processos mais importantes do seu negócio fica sob a responsabilidade de outra empresa e fora do seu controle. Caso haja alguma problema no sistema do banco online, você fica impossibilitado de faturar.</li>
	<li>Custo - As taxas cobradas são relativamente altas por transação e dependendo do volume tornam a solução proibitiva.</li>
</ul>
<h3>Quanto vai custar o serviço de pagamento online?</h3>
Para fazer as contas de quanto o serviço vai custar, você precisa ter em mãos as seguintes informações:

<strong>a) Número de Transações Mensais</strong> - Número de compras realizadas em média por mês. Se você não tem esse número, precisa trabalhar com projeção de venda. Quantas vendas você estima que serão realizadas por mês?

<strong>b) Ticket Médio</strong> - O ticket médio é o valor médio das transações, ou seja, se você somar todas as compras realizadas e dividir pelo número de transações, você terá o ticket médio. Se você não tem esse número mas sabe que vai vender seu serviço por R$ 99,00/mês, por exemplo, esse será exatamente o valor do seu ticket médio.

<strong>c) Faturamento Mensal</strong> - O faturamento mensal é o valor bruto de todas as vendas realizadas no mês. Se você não tem esse número ainda, pode chegar a uma valor aproximado através da multiplicação do Número de Transações Mensais pelo Ticket Médio.

<strong>d) % de Venda por Método de Pagamento</strong> - Quantos % das vendas são realizadas por boleto bancário? Quantos % das vendas são realizadas por cartão de crédito? Em geral, no <a href="http://emailfax.com.br">EmailFax</a>, as pessoas querem usufruir do serviço logo após realizarem a compra, por conta disso 78,1% das transações pagas foram realizadas com cartão de crédito e 21,9% com boleto bancário. O boleto bancário demora dois dias para compensar e por isso o serviço não é liberado instantaneamente como ocorre com a compra realizada no cartão.

Com estes valores em mãos utilize o quadro comparativo com as taxas dos três principais bancos online do Brasil e calcule quanto você irá gastar por mês com o serviço.
<object style="margin:0px" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="355" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="src" value="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=bancosonline-090928210833-phpapp01&amp;rel=0&amp;stripped_title=tarifas-dos-bancos-online-no-brasil" /><param name="allowfullscreen" value="true" /><embed style="margin:0px" type="application/x-shockwave-flash" width="425" height="355" src="http://static.slidesharecdn.com/swf/ssplayer2.swf?doc=bancosonline-090928210833-phpapp01&amp;rel=0&amp;stripped_title=tarifas-dos-bancos-online-no-brasil" allowscriptaccess="always" allowfullscreen="true"></embed></object>
<a href="http://www.slideshare.net/rafael_lima/tarifas-dos-bancos-online-no-brasil">Visualizar no Slideshare</a> | <a href="http://www.slideshare.net/rafael_lima/tarifas-dos-bancos-online-no-brasil/download">Download do PDF</a>

Considerando que:
<strong>NTM</strong> = Número de Transações Mensais
<strong>FM</strong> = Faturamento Mensal
<strong>TRT</strong> = Tarifa de recebimento por transação
<strong>RTB</strong> = Custo do Recebimento em TEF e Boletos (para o volume do Faturamento Mensal)
<strong>RTC</strong> = Custo do Recebimento em Cartão de Crédito (para o volume do Faturamento Mensal)
<strong>PVB</strong> = % venda por boleto
<strong>PVC</strong> = % venda por cartão<strong>
</strong>

A formula para saber o custo (<strong>C</strong>) é basicamente a seguinte:

<strong>C = (TRT * NTM) + (RTB * PVB * FM) + (RTC * PVC * FM)</strong>
<h3>Vale a pena utilizar um banco online?</h3>
Bem, para dizer se vale a pena ou não, é necessário comparar com a outra opção que é montar uma infra-estrutura própria, mas a explicação desta outra opção fica para uma próxima oportunidade.

Considerando apenas o fator custo, posso adiantar que, se você tem um serviço com ticket médio de R$ 99/mês, uma média de 200 transações mensais e cobra apenas por boleto bancário, um banco online é mais vantajoso. Caso chegue a 500 transações começa a valer a penas pensar em uma estrutura própria.

No caso de R$ 99/mês, 500 transações e cobrança por cartão de crédito e boleto bancário, muito provavelmente uma estrutura própria é mais vantajosa.

É claro que vai depender de como você monta sua infra-estrutura própria. Estou considerando nos meus cálculos a infra-estrutura que eu montei para os serviços da <a href="http://bielsystems.com.br">BielSystems</a>.

Caso você precise de um sistema para processar pagamentos de vendas que são feitas off-line os bancos online também não são tão bons, pois eles não permitem adaptação do processo.
<h3>Conclusão</h3>
Se você precisa implementar alguma forma de pagamento online com urgência, sem dúvida essa será a melhor opção.

Se você está comercializando uma aplicação web com venda recorrente, fatalmente precisará montar uma infra-estrutura própria.

Se o seu negócio depende da compra por impulso por parte do visitante, talvez o banco online se torne um impecilio e é interessante pensar em montar uma infra-estrutura própria.

Se o que você está montando é temporário, tal como um evento, provavelmente o banco online é uma boa, mas se é um negócio com vida longa, provavelmente vale mais a pena sair desta dependência.

Para decidir em utilizar ou não bancos online, é necessário avaliar os custos envolvidos, é necessário realizar uma análise criteriosa e cuidadosa sobre a natureza do seu negócio e as vantagens e desvantagens como as citadas no texto anteriormente.

Espero que este post tenha sido útil para esclarecer a opção dos serviços de pagamento online. Ficaria muito grato se você deixasse seu comentário aí embaixo :)

Abraços e até a próxima
