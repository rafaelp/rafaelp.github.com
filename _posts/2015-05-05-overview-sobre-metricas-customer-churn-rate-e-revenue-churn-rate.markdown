---
layout: post
status: publish
published: true
title: 'Overview sobre Métricas: Customer Churn Rate e Revenue Churn Rate'
slug: overview-sobre-metricas-customer-churn-rate-e-revenue-churn-rate
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
categories:
- Posts
tags:
- analytics
- métricas
- saas
- lean
---

O Churn Rate é uma das métricas largamente utilizadas em praticamente qualquer análise de negócios digitais. Dedico esse post a explicá-lo e, o mais legal, a passar números absolutos para que você possa comparar com o seu negócio e saber se ele está indo bem ou mal.



### O que é Churn Rate?



O Churn Rate é a Taxa de Abandono. Ela é usada para medir o nível de retenção que o seu serviço possui.



O Churn pode ser calculado em termos de número de usuários ou em termos de receita. Nesses casos é chamado de Customer Churn Rate e Revenue Churn Rate respectivamente.



Independente do contexto ele sempre irá representar os usuários perdidos ou a receita perdida em um determinado período.



A perda é caracterizada por uma ação que é realizada pelo usuário. Em um negócio cuja receita é baseada em assinaturas mensais, o Churn representa o número de usuários que cancelou a conta como um todo ou cancelou a assinatura paga.



No caso de serviços no modelo Freemium, ou seja, que oferecem vários planos com preços diferenciados, sendo um plano gratuito, o Churn Rate acontece quando o usuário faz downgrade de um plano pago para um plano gratuito, além de quando cancelam a conta ou a assinatura.



Antes de calcular o Churn é importante você definir claramente qual é a ação de abandono, ou seja, aquela que quando executada pelo usuário, caracteriza a perda do mesmo.



### Calculando o Churn Rate



Embora a teoria seja simples de entender, se você aprofundar o assunto, vai perceber que existem maneiras diferentes de calcular o Churn. A forma mais simples é dividir o número de usuários que abandonaram no período pelo número de usuário no início do período.



Vamos a um exemplo prático:



Número de usuário no início do mês: 200

Número de usuários que cancelaram a conta no mês: 30



O Customer Churn Rate nesse caso é:



30/200 = 15%



Repito, essa é a forma mais simplista de calcular, existem diversas fórmulas mais complexas que levam em consideração outros fatores, como o número de usuários que converteram no mesmo período.



Vamos agora calcular o Revenue Churn Rate considerando um cenário mais complexo:



Número de usuários no plano de R$ 29/mês no início do mês: 120

Número de usuários no plano de R$ 59/mês no início do mês: 80

Número de usuários do plano de R$ 29/mês que cancelaram a conta no mês: 8

Número de usuários do plano de R$ 59/mês que cancelaram a conta no mês: 22



Veja que o número de usuários não mudou em relação ao exemplo acima, então o Customer Churn Rate permanece o mesmo nesse caso.



A fórmula para calcular o Revenue Churn Rate de forma simplista é similar à anterior, mudando apenas o número de usuários pelo faturamento. Sendo assim precisamos deduzir os números abaixo:



Faturamento no início do mês:

(120 * R$ 29) + (80 * R$ 59) = R$ 3.480 + R$ 4.720 = R$ 8.200



Faturamento perdido no mês:

(8 * R$ 29) + (22 * R$ 59) = R$ 232 + R$ 1.298 = R$ 1.530



O Revenue Churn Rate é:



R$ 1.530/R$ 8.200 = 18,66%



Veja que a taxa de Churn sobre o faturamento foi superior à taxa de Churn sobre número de usuários. Isso aconteceu nesse caso, por que a maior perda foi de usuários que pagavam pelo planos mais caro.



Esse é o motivo de se calcular o Revenue Churn Rate além do Customer Churn Rate.



Não vou entrar no mérito mas, conforme comentei acima, existem outras formas de calcular o Churn Rate. Quando o modelo de receita é uma taxa de uso, como é o caso do Boleto Simples, o abandono, ao invés de se concretizar com uma ação realizada no sistema, é caracterizado pelo tempo em que o usuário está sem realizar uma determinada ação.



No caso do Boleto Simples o abandono é quando o usuário fica n dias sem receber um boleto bancário. Nesse caso a fórmula é bem diferente e mais complexa.



### A Cereja do Bolo



A parte mais legal é ter acesso a números de mercado para entender se o seu negócio está indo bem. Vou deixar alguns parâmetros super relevantes para sua tomada de decisão.



1) Você deve buscar ter um Churn Rate entre 1,5% a 3% ao mês, segundo o livro [Lean Analytics](http://leananalyticsbook.com).



2) [Segundo Mark MacLeod](http://www.startupcfo.ca/2011/09/saas-math-activation-retention-and-churn/), você precisa alcançar um Churn Rate abaixo de 5% ao mês para se certificar que tem um negócio que valha a pena escalar.



3) [David Skok diz](http://www.slideshare.net/MassTLC/matrix-partners-david-skok) que 1% a a 2,5% mas antes de escalar você deve chegar a um Churn inferior a 2% ao mês.



5) [Lincoln Murphy afirma](http://sixteenventures.com/saas-churn-rate) que 5% de Churn mensal não é aceitável e que você deve ter um churn de 5% a 7% ANUALMENTE.



### O Queijo Suíço



Se o seu Churn Rate está alto, isso quer dizer que você ainda não resolveu o problema de retenção de usuários e por mais que você invista alto em marketing, o seu negócio não vai ficar de pé.



Eu costumo usar a metáfora do queijo suíço. Imagina que o seu negócio é um queijo suiço em você joga água em cima (os usuários) mas a água escorre toda pelos buracos. Quando isso acontece, ao invés de focar em jogar mais água (crescer a divulgação), você tem que focar em tapar os buracos.



Tapar os buracos significa entender o motivo pelo qual os usuários estão abandonando e resolver os problemas causadores do abandono. O problema pode estar no seu modelo de negócios, na programação do sistema (Bugs), na experiência de uso (UX), no design das telas (UI), na comunicação (copywriting), etc.



Na minha opinião essa é a métrica mais importante para definir o momento certo para começar a investir em marketing. Antes de resolver o Churn não faz sentido tentar escalar.



E aí, você já tinha pensado nisso ou é uma surpresa pra você!?



Espero que este post te incentive a fazer o tracking do Churn Rate e a usá-lo como parâmetro para tomada de decisão estratégica no dia-a-dia.



Eu tenho o meu Churn Rate na palma da mão, atualizado online com uma defasagem de apenas 2 horas ;-). Agora é a sua vez!



Abraço e até a próxima.
