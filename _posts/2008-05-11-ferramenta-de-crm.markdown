--- 
layout: post
title: Ferramenta de CRM
wordpress_id: 186
wordpress_url: http://rafael.adm.br/?p=186
date: 2008-05-11 17:09:40 -03:00
---
<strong>Atualizado em 27/07/2011</strong>: Foi lançada uma ferramenta nacional, muito boa que eu recomendo: <a href="http://clientela.com.br"><img src="/wp-content/uploads/2011/07/clientela.png" alt="" title="clientela" width="116" height="25" class="aligncenter size-full wp-image-551"  border="0" style="border: 0; display: inline" /></a>

Este post é uma tentativa de responder as perguntas do <a href="http://www.improveit.com.br/vinicius">Vinicius</a> feitas no <a href="http://blog.improveit.com.br">blog da Improve-It</a> no post entitulado <a href="http://blog.improveit.com.br/articles/2008/04/28/call-for-help">Call for Help</a>. O objetivo dele é justamente usar o poder do blog para fomentar discussão interessante para seu uso pessoal, uma iniciativa inteligente que eu apoio. As empresas poderiam criar seu <a href="http://blogempresa.com.br">Blog Empresa</a> e fazer isso também!

Hoje respondo às perguntas relativas à:
<ul>
	<li> Ferramenta de CRM</li>
	<li> Ferramenta para acompanhamento de chamados de suporte</li>
</ul>
Toda empresa hoje precisa de um sistema de <a href="http://pt.wikipedia.org/wiki/CRM">CRM</a>, ponto. CRM significa Customer Relationship Management, em português, Gestão de Relacionamento com o Cliente.

<strong>Quando você está vendendo pela internet e principalmente quando o seu serviço é prestado pela internet, o CRM/suporte se torna essencial.</strong>

Eu misturei CRM com suporte por que dependendo da natureza da sua aplicação web e do seu momento, o suporte apenas, que é um subsistema do CRM, já irá lhe atender muito bem.

Durante os anos de experiência na <a href="http://bielsystems.com.br">BielSystems</a>, eu cheguei a avaliar e usar algumas dezenas de sistemas. Separei os principais para falar sobre, são eles <a href="http://www.sugarcrm.com/crm/">SugarCRM</a>, <a href="http://highrisehq.com/">Highrise</a>, <a href="http://kayako.com/supportsuite.php">Kayako SupportSuite</a> e <a href="http://www.salesforce.com/br/">Salesforce</a>.

<strong>Highrise (HR)</strong>

<a href="http://highrisehq.com">http://highrisehq.com</a>

Hoje sou usuário pagante do HR, usamos na BielSystems e é a minha página inicial do navegador. No HR  você cadastra os contatos com todos os dados de contato. Vários e-mails, vários endereços, messengers, etc. Ele substitui o caderninho de endereços muito bem.

<img class="alignnone size-full wp-image-189" title="hr-novo-contato1" src="/wp-content/uploads/2008/05/hr-novo-contato1.png" alt="Highrise - Novo contato" />

Uma grande vantagem é a <a href="http://highrisehq.com/email">integração com e-mail</a> que é bem inteligente. Você pode encaminhar para o seu dropbox (um endereço de e-mail que chega no sistema), todas as mensagem recebidas de um contato. O HR cuida de guardar o e-mail automaticamente no histórico do contato. Além disso você pode enviar um e-mail para um contato, colocando o seu dropbox como cópia oculta (bcc), que ele também irá identificar e salvar o e-mail no histórico do contato. Essa integração é simplesmente fantástica. Permite o gerenciamento dos e-mails importantes, livres de spam, com custo de tempo zero.

O HR é excelente para o caso de poucos clientes e um contato mais pessoal com cada um deles. Para o <a href="http://blogempresa.com.br">Blog Empresa</a>, que temos um número reduzido de clientes e o contato é mais pessoal, é perfeito, mas para o <a href="http://emailfax.com.br">EmailFax</a>, onde temos uma quantidade maior de usuários e nenhum contato pessoal, se torna ineficiente.

Parte da ineficiência é por que ele trata apenas da parte de contato, ignorando por completo o relacionamento de suporte e financeiro.

Ele tem uma limitação considerável, que é a falta de meta-dados, ou seja, você não pode configurar novos campos para o cadastro de usuários. Para nós brasileiros, isso é chato pois ficamos sem poder guardar informações como CPF ou CNPJ de forma que sejam indexadas e buscadas pela API.

Além do gerenciamento de contatos, o HR possui gerenciamento de <a href="http://www.highrisehq.com/help/tasks/">Tarefas</a> e <a href="http://www.highrisehq.com/help/cases/">Casos</a>.

A <a href="http://developer.37signals.com/highrise/">API, RESTful</a>, é completa para todos os módulos.

Ele só é disponível em inglês. Isso não chega a ser um problema, se sua equipe domina o idioma, uma vez que não possui interface nenhuma com os clientes.

<strong>SugarCRM</strong>

<a href="http://sugarcrm.com">http://sugarcrm.com</a>

Não uso o SugarCRM. Já instalei comecei a usar e desisti logo depois. O SugarCRM é muito burocrático e gigante, o próprio site já demonstra isso. Sem dúvida é a opções OpenSource mais completa. Ele resolve o problema do relacionamento de suporte e financeiro, mas para configurar tudo leva um tempo e requer um investimento alto de tempo e estudo.

Como não usei por muito tempo, prefiro copiar aqui o <a href="http://blog.improveit.com.br/articles/2008/04/28/call-for-help#comments">comentário do Mergulhão no post da Improve-it</a>:
<blockquote>Eu já trabalhei com o SugarCRM, inclusive desenvolvendo plugins e fazendo um portal à parte que consultava informações dele via api soap. Um pouco da documentação dele, api soap e demo online. A documentação dele não é das melhores, e na api soap eu tive que descobrir muita coisa na mão, não é nada do outro mundo.

Ele usa três licenças. Uma opensource e duas comerciais que possuem um pouco mais de funcionalidades. Eu trabalhei nele nas versões opensource e professional. A versão opensource supre as principais necessidades. É claro que nem tudo são flores, ui. Ele é um sistema pesado, o sistema mais pesado que eu já vi em php. E complexo pra caramba. Eu apanhei bastante acrescentando funcionalidades e corrigindo bugs nele por quase um ano. Mas se não se pretender expandir muito ele, não há problema.

Resumo: em caso de necessidade de adoção de um sistema CRM, o Sugar é um bom candidado, pois possui as funcionalidades dos CRMs comerciais tradicionais por uma fração do custo (mesmo nas licenças pagas).</blockquote>
O SugarCRM é o típico <a href="http://en.wikipedia.org/wiki/Software_bloat">bloated software</a>. Possui <a href="http://www.sugarcrm.com.pt/">site em português</a> apenas de Portugal e parece bem incompleto no idioma.

<strong>Kayako SupportSuite</strong>

<a href="http://kayako.com/supportsuite.php">http://kayako.com/supportsuite.php</a>

Também sou pagante deste sistema. O <a href="http://suporte.bielsystems.com.br">suporte dos produtos da BielSystems</a> é realizado por ele. Ele é dividido em 3 ambientes, o de admin, para configurações gerais, o do staff para uso por parte dos atendentes e o do cliente, para o acompanhamento na web. Além disso possui softwares para Windows que agilizam o trabalho dos atendentes.

No ambiente do admin é possível configurar o time, os módulos que serão utilizados, diversas configurações (ele é altamente otimizável) e até mesmo definições de <a href="http://en.wikipedia.org/wiki/Service_level_agreement">SLA</a> (Service Level Agreement).

No ambiente do staff, os atendentes conseguem ver quem está navegando no site, convidar para um chat, gerenciar os tickets e todos os módulos liberados pelo admin. Uma coisa legal é a completude de opções. Aos responder um ticket, por exemplo, é apresentada uma interface similar ao de envio de e-mail de um webmail qualquer, mais as opções específicas do ticket tais como inserir uma resposta pré-definida, alterar status, label e responsável. Veja abaixo:

<img class="alignnone size-full wp-image-187" title="kayako-responder-ticket" src="/wp-content/uploads/2008/05/kayako-responder-ticket.png" alt="Kayako - Responder ticket" />

O Kayako é mais voltado para o suporte em si, mas pode se encaixado na lista de sistemas de CRM quando falamos de aplicações web. Embora tenha várias opções, o custo de instalação é baixo e vale a pena pois com ele você já estará pronto para escalar.

O SupportSuite é composto pelo eSupport que cuida de tickets e outros módulos mais o Live Response que oferece chat on-line. Os módulos disponíveis são: Tickets, Teamwork, Knowledgebase, Troubleshooter,  Downloads, News e Live Support, este último faz parte do Live Response.

Considero ser a melhor opção para aplicações web pois permite iniciar um trabalho de suporte rapidamente. Conforme o tempo for passando e as coisas se ajeitando, sugiro a substituição de alguns módulos e a adoção de um SRM mais completo.

O SupportSuite não possui uma API. O máximo que ele tem é o LoginShare que permite que você <a href="http://forums.kayako.com/f48/creating-loginshare-12857/">substitua o controle de usuário dele por um externo</a>. O LoginShare é um wrapper para que a autenticação, criação de usuários e demais ações sejam realizadas diretamente em um sistema externo.

Uma limitação é a organização dos dados dos usuários. Na verdade não existe opção para guardar telefones, endereços, empresa, etc como o HR.

É oferecido em inglês mas possui <a href="http://forums.kayako.com/f50/v3-11-02-translation-traducao-portugues-br-pt-br-16791/">arquivo de idioma em português do Brasil</a> para a interface com os clientes, oferecido pela comunidade.

<strong>Salesforce</strong>

<a href="http://www.salesforce.com/br/">http://www.salesforce.com/br/</a>

Não tenho noção de como está o Salesforce internamente. Está nos meus planos avaliá-lo em breve.

O que posso dizer é que o Salesforce sempre foi líder de mercado e realizou uma <a href="http://www.google.com/intl/en/press/pressrel/salesforce_alliance.html">parceria forte com o Google</a>. Tenho medo de que se torne inevitável o seu uso pela <a href="https://www.salesforce.com/products/google/">integração que eles estão desenvolvendo</a> com todos os produtos do Google.

Eis o motivo de incluí-lo aqui mesmo sem conhecê-lo a fundo ainda.

<strong>Resumo destas opções</strong>

Se você tem uma pequena empresa e está preocupado com o CRM específico para seus produtos na web, fique com o Kayako SupportSuite. Ele não dará dor de cabeça para instalar, irá atender bem no primeiro momento e permitirá escalar tranquilamene. O SupportSuite não é genuinamente um CRM, possui gerenciamento centralizado por ticket e resolve o principal problema inicial de qualquer start-up.

Se você irá prestar serviço que é menos baseado no suporte tradicional de tickets e terá mais contato pessoal com seus clientes, fique com o Highrise. Você conseguirá compartilhar os e-mails trocados de forma fácil e conseguirá organizar bem seus contatos como uma agenda mais avançada. Ele é mais voltado para o contato one-to-one e possui gerenciamento centralizado por pessoa.

Se você é uma empresa maior e procura um sistema gratuito altamente configurável e flexível, fique com o SugarCRM. Será possível adaptar o sistema ao modelo de negócios da sua empresa, diferentemente das demais opções onde sua empresa precisa se moldar ao produto. Demandará investimento no sistema, mas no final você terá uma solução definitiva que organizará os todos os aspectos do CRM, são eles: automação de vendas, automação de marketing e suporte.

Se você procura uma solução pioneira e não está preocupado com o preço, o Salesforce é a solução. Tão completo quanto o SugarCRM, controlas todas as fases, desde a prospecção até o pós-venda. Com a união com o Google, veremos a integração com diversos serviços que já usamos e de repente isso vai tornar a adoção irresistível, como acontece hoje com o Google Analytics.

<strong>Conclusão</strong>

Esta é o minha avaliação das principais ferramentas de CRM que conheço hoje, que são baseadas na web, vendidas no modelo SaaS e prontas para uso para o CRM de aplicações web.

Com certeza você irá se deparar com milhares de soluções de baixo custo, gratuitas, open-source, etc. Digo a vocês, despreze-as. TODAS as soluções desta categoria que avaliei durante os últimos 3 anos eram ineficientes, não atendiam todas as necessidades mínimas e tinham limitações que inviabilizavam o uso contínuo e a escalabilidade do atendimento, tornando a relação custo/benefício extremamente baixa.

Escolhendo um bom software de primeira, você vai precisar focar apenas nos processos internos da sua empresa e na qualidade dos recursos humanos pois a parte de infra estará resolvida. Isso é essencial, caso contrário a única coisa que você ganha é bagagem para escrever um post como esse ;-)

Por fim, acredito que a utilização delas por si só não é o suficiente. O ideal é trabalhar em integração de forma que seus serviços na web possam "conversar" com seu sistema de CRM. Como sou pagante hoje do Highrise e do SupportSuite, estou trabalhando na integração de ambos com meus produtos, através da extranet da BielSystems cujo módulo de boleto, foi apresentado no post <a href="http://rafael.adm.br/p/pagamento-on-line-no-brasil-boleto-bancario/">Pagamento on-line no Brasil - Boleto Bancário</a>.

Bem, se tiverem qualquer sugestão ou análise de qualquer ferramenta de CRM ou suporte, fiquem a vontade para deixar nos comentários!

Abraços a todos e até a próxima.
