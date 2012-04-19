--- 
layout: post
status: publish
published: true
title: "Um overview sobre hospedagem em m\xC3\xA1quinas virtuais, passando por Amazon, Slicehost e Linode."
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 280
wordpress_url: http://rafael.adm.br/?p=280
date: 2009-02-15 11:01:24 -03:00
categories: 
- Posts
tags: []

---
Especificamente na época entre o Natal e o Ano novo, andei pesquisando sobre as opções de hospedagem em máquinas virtuais. Hoje já migrei grande parte das aplicações/sites (chamarei de sites para facilitar) da <a href="http://myfreecomm.com.br">Myfreecomm</a> e da <a href="http://bielsystems.com.br">BielSystems</a> e pretendo colocar aqui a experiência que obtive neste processo. Avaliei os serviços <a href="http://aws.amazon.com/ec2">Amazon EC2</a>, <a href="http://aws.amazon.com/ebs">Amazon EBS</a>, <a href="http://aws.amazon.com/s3">Amazon S3</a>, <a href="http://slicehost.com">Slicehost</a> e <a href="http://linode.com">Linode</a>.

Antes desta mudança os sites estavam em servidores dedicados pois esta era a melhor opção há uns 2 anos atrás. Tudo bem, mas quais as vantagens de contratar uma VM (Virtual Machine) ao invés de servidor dedicado?

<strong>Hardware como Software</strong>

A diferença mais gritante é que você começa a tratar o hardware como software. No momento que você precisa de mais uma máquina, basta entrar no painel de controle e dar uns cliques que ele já está disponível para você, como se fosse mais uma conta no Gmail, por exemplo. Isso é uma tranquilidade para o crescimento. Um servidor dedicado demora em média 2 dias para ficar pronto após a contratação, uma máquina virtual, apenas 2 minutos.

O Slicehost e o Linode já vem com painel de controle, o Amazon EC2, não. Os serviços <a href="http://www.rightscale.com/">RightScale</a> e <a href="https://scalr.net/">Scalr</a> oferecem um gerenciador de máquinas virtuais contradas no Amazon EC2 com painel de controle para facilitar o trabalho. Também é possível se aventurar e cuidar por conta própria deste gerenciador usando a opção <a href="http://code.google.com/p/scalr/">open-souce do Scalr</a>

<strong>Web Console
</strong>

Quando se trata de máquina virtual, temos o servidor princial (hardware), chamado de host, virtualizando as máquinas que são vendidas. Em outras palavras, você contrata uma máquina virtual que está hospedada num hardware chamado de Host. O Host tem controle de todas as máquinas virtuais dentro dele. O Web Console é um sistema que roda no Host e permite conexão na máquina virtual diretamente como se estivesse no console local.

Você precisa do console quando perde o acesso à máquina virtual pela internet. Isto ocorre em geral quando você está alterando as configurações de firewall ou SSH e por descuido acaba fechando a máquina completamente de forma que nem você consegue acessar.

Quando você está em servidores dedicados, é necessário abrir um ticket para a empresa de hospedagem, para que eles pluguem um teclado e um monitor na sua máquina, entrem pelo console local e resolvam o problema. Já viu que isso é um inferno e pode demorar pra caramba.

Quando você está em servidores virtualizados, basta acessar o Web Console de dentro do painel de controle e logar normalmente como se você fosse o cara que estivesse plugando o teclado e o monitor. O acesso é feito através do host e por isso, não é bloqueado por configurações erradas de firewall e ssh.

Tanto o Linode quando Slicehost oferecem esta opção, o Linode ainda oferece um SSH direto para o host onde você pode rodar alguns comandos específicos para saber uso de cpu e memória, visualizar processos ativos e reiniciar a máquina virtual.

<img class="alignnone size-full wp-image-293" title="Web Console Slicehost" src="http://rafael.adm.br/wp-content/uploads/2009/02/picture-4.png" alt="Web Console Slicehost" width="556" height="122" />

Todo o controle das máquinas virtuais no Amazon S3 é feito por linha de comando e conexão SSH.

<strong>Backup</strong>

O backup é outra vantagem incrível. Quando estamos em servidores dedicados, configuramos backup para cada serviço especificamente (Apache, MySQL, PostgreSQL, Bind, etc). Você vai continuar configurando backup por serviço mesmo estando em máquinas virtuais, mas além disso é possível fazer cópia do HD inteiro. Ou seja, você cria uma imagem da máquina inteira e pode, inclusive, levantar uma nova máquina a partir da imagem criada.

O Slicehost possui esta facilidade possibilitando configurar backups automáticos semanais e diários. Ele permite o armazenamento de um backup semanal, um diário e um snapshot que pode ser criado manualmente a qualquer momento. Os backups são feitos com a máquina rodando. Este serviço é cobrado a parte.

<img class="alignnone size-full wp-image-292" title="Backup no Slicehost" src="http://rafael.adm.br/wp-content/uploads/2009/02/picture-3.png" alt="Backup no Slicehost" width="501" height="357" />

No plano do Linode você tem X GB e pode distribuir em quantas partições quiser. Ele não possui uma opção de backup, mas permite que você duplique uma partição criada. Então, para ter backups é necessário utilizar apenas a metade do espaço disponível para as partições de uso, de forma que a outra metade fique disponível para a cópia da partição. Além disso é necessário que a máquina esteja parada para realizar a cópia das partições. Não é nada prático.

O Amazon EC2 em si não possui storage persistente, então não faz sentido fazer backup recorrente da imagem. Basta você ter uma cópia da instância que utilizou para criar a máquina. O storage persistente é realizado pelo Amazon EBS onde você pode criar volumes a serem utilizados pelo Amazon EC2. O Amazon EBS permite a criação de snapshots a qualquer momento e este snapshots podem ser armazenados no Amazon S3 com alguns scripts simples.

<strong>Preço</strong>

Em comparação com servidores dedicados, a economia é visível seja qual for a opção. No caso da Amazon EC2 você vai pagar no mínimo U$ 72/mês pela máquina mais custos com EBS e S3. No meu caso em que eu queria levantar algumas máquinas para fazer tarefas específicas simples que não requeriam muito processamento e memória, a Amazon não era uma boa escolha.

Tanto o Slicehost quanto o Linode possuem planos de máquina com storage a partir de U$ 20/mês. Isso viabiliza, por exemplo, uma máquina só para DNS secundário e repositórios de controle de versão (SVN, GIT).

Se você tem um caso simples, como uma aplicação web ou um site, não escolha a Amazon. Se você precisa de uma farm com vários servidores, alta escalabilidade, etc. a Amazon me parece uma boa opção.

<strong>Amazon x Slicehost X Linode</strong>

O Amazon EC2 é mais adequado para aplicações de larga escala. Ele foi criado com o propósito de processamente distribuído e por conta disso a modalidade de uso é um pouco diferente dos outros dois serviços. No Amazon Ec2 é possível que você tenha 10 máquinas configuradas e prontas para uso mas deixar somente 5 delas rodando. Você só pagará pelo tempo de uso de cada máquina.

É possível também configurar de tal maneira que você tenha uma máquina servindo um site e que, caso o processamento desta máquina chegue a 80%, uma outra seja levantada automaticamente e a carga seja balanceada. Para isso funcionar, é necessário uma oura máquina na frente fazendo o balanceamento de carga (load balancer) e seu site deve estar preparado. Estar preparado significa basicamente não salvar arquivos em disco, sejam eles enviados por upload de usuário, arquivos de sessão e cookie e arquivos de cache. Para distribuir um site em duas máquinas estes arquivos devem estar sendo salvos em um storage remoto, como por exemplo Amazon S3.

Como o meu caso não era muito complexo ignorei o Amazon EC2. Tive que escolher entre Slicehost e Linode.

O Linode permite que você escolha em que datacenter deseja hospedar sua máquina virtual. Na própria interface, ele mostra qual é o nome do host que sua máquina virtual está hospedada. O Slicehost não tem este suporte. Eles concluíram recentemente as instalações no segundo datacenter e ainda não tem essas informações no painel de controle.

Para solicitar uma interface de rede interna, onde o tráfego não é contabilizado na banda contratada, ou configurar IP Failover, no Slicehost você precisa solicitar via ticket enquanto no Linode basta alguns cliques pelo painel de controle.

O Linode permite você criar várias partições diferentes e escolher em que devices estas estarão disponíveis, o Slicehost não traz nenhuma opção quanto a partição de discos.

Como explicado anteriormente, O Slicehost possui serviço de backup, o Linode não.

O Linode é muito mais completo e tem muito mais opções.

<strong>Minha conclusão é que o Linode é feito para administradores de sistema enquanto o Slicehost é feito para desenvolvedores.</strong>

Vou ser sincero que demorei até escolher entre as duas. Cheguei a configurar <a href="http://dev.mysql.com/doc/mysql-ha-scalability/en/index.html">MySQL em HA</a> usando <a href="http://www.mysql.com/products/enterprise/drbd.html">DRBD</a> no Linode para ver como seria. Essa configuração não é possível no Slicehost, pelo fato de não poder particionar os discos. Essas diferenças criaram várias dúvidas na minha cabeça.

Embora o Linode tenha o maior número de opções, eu escolhi pelo Slicehost, simplesmente por que tem backup e é muito mais fácil e rápido executar as tarefas. O excesso de opcões do Linode não agregavam valor e resolviam problemas que eu não tinha. Além de tornar todo o processo burocrático e chato (neste momento eu já estava mal acostumado, por que chato mesmo é com servidor dedicado).

Veja as opções que o painel de controle do Slicehost oferece:

<img class="alignnone size-full wp-image-294" title="Opçoes do Painel de Controle do Slicehost" src="http://rafael.adm.br/wp-content/uploads/2009/02/picture-6.png" alt="Opçoes do Painel de Controle do Slicehost" width="484" height="70" />

Era tudo que eu precisava para ter mais segurança. Depois de decidido, mãos a obra!

<strong>O resultado desta brincadeira foi que na Myfreecomm reduzimos os custos em 5 vezes e na BielSystems estamos com o EmailFax rodando de forma mais segura e rápida!</strong>

Na Myfreecomm as configurações não foram feitas por mim. Na BielSystems, usei <a href="http://www.deprec.org">Deprec</a> com <a href="http://www.capify.org">Capistrano</a> para fazer o deploy de <a href="http://www.rubyonrails.pro.br">Rails</a> em <a href="http://www.modrails.com">Passenger (mod_rails)</a> com <a href="http://www.rubyenterpriseedition.com">Ruby Enterprise</a>. Mas isso é papo para uma outra oportunidade.

Espero que a dica ajuda a todos que estão colocando no ar seus próximos negócios. Espero feedback nos comentários!

Abraços e até a próxima
