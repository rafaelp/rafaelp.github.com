--- 
layout: post
status: publish
published: true
title: Um overview sobre hospedagem em m&aacute;quinas virtuais, passando por Amazon, Slicehost e Linode.
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
Especificamente na &eacute;poca entre o Natal e o Ano novo, andei pesquisando sobre as op&ccedil;&otilde;es de hospedagem em m&aacute;quinas virtuais. Hoje j&aacute; migrei grande parte das aplica&ccedil;&otilde;es/sites (chamarei de sites para facilitar) da <a href="http://myfreecomm.com.br">Myfreecomm</a> e da <a href="http://bielsystems.com.br">BielSystems</a> e pretendo colocar aqui a experi&ecirc;ncia que obtive neste processo. Avaliei os servi&ccedil;os <a href="http://aws.amazon.com/ec2">Amazon EC2</a>, <a href="http://aws.amazon.com/ebs">Amazon EBS</a>, <a href="http://aws.amazon.com/s3">Amazon S3</a>, <a href="http://slicehost.com">Slicehost</a> e <a href="http://linode.com">Linode</a>.

Antes desta mudan&ccedil;a os sites estavam em servidores dedicados pois esta era a melhor op&ccedil;&atilde;o h&aacute; uns 2 anos atr&aacute;s. Tudo bem, mas quais as vantagens de contratar uma VM (Virtual Machine) ao inv&eacute;s de servidor dedicado?

<strong>Hardware como Software</strong>

A diferen&ccedil;a mais gritante &eacute; que voc&ecirc; come&ccedil;a a tratar o hardware como software. No momento que voc&ecirc; precisa de mais uma m&aacute;quina, basta entrar no painel de controle e dar uns cliques que ele j&aacute; est&aacute; dispon&iacute;vel para voc&ecirc;, como se fosse mais uma conta no Gmail, por exemplo. Isso &eacute; uma tranquilidade para o crescimento. Um servidor dedicado demora em m&eacute;dia 2 dias para ficar pronto ap&oacute;s a contrata&ccedil;&atilde;o, uma m&aacute;quina virtual, apenas 2 minutos.

O Slicehost e o Linode j&aacute; vem com painel de controle, o Amazon EC2, n&atilde;o. Os servi&ccedil;os <a href="http://www.rightscale.com/">RightScale</a> e <a href="https://scalr.net/">Scalr</a> oferecem um gerenciador de m&aacute;quinas virtuais contradas no Amazon EC2 com painel de controle para facilitar o trabalho. Tamb&eacute;m &eacute; poss&iacute;vel se aventurar e cuidar por conta pr&oacute;pria deste gerenciador usando a op&ccedil;&atilde;o <a href="http://code.google.com/p/scalr/">open-souce do Scalr</a>

<strong>Web Console
</strong>

Quando se trata de m&aacute;quina virtual, temos o servidor princial (hardware), chamado de host, virtualizando as m&aacute;quinas que s&atilde;o vendidas. Em outras palavras, voc&ecirc; contrata uma m&aacute;quina virtual que est&aacute; hospedada num hardware chamado de Host. O Host tem controle de todas as m&aacute;quinas virtuais dentro dele. O Web Console &eacute; um sistema que roda no Host e permite conex&atilde;o na m&aacute;quina virtual diretamente como se estivesse no console local.

Voc&ecirc; precisa do console quando perde o acesso &agrave; m&aacute;quina virtual pela internet. Isto ocorre em geral quando voc&ecirc; est&aacute; alterando as configura&ccedil;&otilde;es de firewall ou SSH e por descuido acaba fechando a m&aacute;quina completamente de forma que nem voc&ecirc; consegue acessar.

Quando voc&ecirc; est&aacute; em servidores dedicados, &eacute; necess&aacute;rio abrir um ticket para a empresa de hospedagem, para que eles pluguem um teclado e um monitor na sua m&aacute;quina, entrem pelo console local e resolvam o problema. J&aacute; viu que isso &eacute; um inferno e pode demorar pra caramba.

Quando voc&ecirc; est&aacute; em servidores virtualizados, basta acessar o Web Console de dentro do painel de controle e logar normalmente como se voc&ecirc; fosse o cara que estivesse plugando o teclado e o monitor. O acesso &eacute; feito atrav&eacute;s do host e por isso, n&atilde;o &eacute; bloqueado por configura&ccedil;&otilde;es erradas de firewall e ssh.

Tanto o Linode quando Slicehost oferecem esta op&ccedil;&atilde;o, o Linode ainda oferece um SSH direto para o host onde voc&ecirc; pode rodar alguns comandos espec&iacute;ficos para saber uso de cpu e mem&oacute;ria, visualizar processos ativos e reiniciar a m&aacute;quina virtual.

<img class="alignnone size-full wp-image-293" title="Web Console Slicehost" src="http://rafael.adm.br/wp-content/uploads/2009/02/picture-4.png" alt="Web Console Slicehost" width="556" height="122" />

Todo o controle das m&aacute;quinas virtuais no Amazon S3 &eacute; feito por linha de comando e conex&atilde;o SSH.

<strong>Backup</strong>

O backup &eacute; outra vantagem incr&iacute;vel. Quando estamos em servidores dedicados, configuramos backup para cada servi&ccedil;o especificamente (Apache, MySQL, PostgreSQL, Bind, etc). Voc&ecirc; vai continuar configurando backup por servi&ccedil;o mesmo estando em m&aacute;quinas virtuais, mas al&eacute;m disso &eacute; poss&iacute;vel fazer c&oacute;pia do HD inteiro. Ou seja, voc&ecirc; cria uma imagem da m&aacute;quina inteira e pode, inclusive, levantar uma nova m&aacute;quina a partir da imagem criada.

O Slicehost possui esta facilidade possibilitando configurar backups autom&aacute;ticos semanais e di&aacute;rios. Ele permite o armazenamento de um backup semanal, um di&aacute;rio e um snapshot que pode ser criado manualmente a qualquer momento. Os backups s&atilde;o feitos com a m&aacute;quina rodando. Este servi&ccedil;o &eacute; cobrado a parte.

<img class="alignnone size-full wp-image-292" title="Backup no Slicehost" src="http://rafael.adm.br/wp-content/uploads/2009/02/picture-3.png" alt="Backup no Slicehost" width="501" height="357" />

No plano do Linode voc&ecirc; tem X GB e pode distribuir em quantas parti&ccedil;&otilde;es quiser. Ele n&atilde;o possui uma op&ccedil;&atilde;o de backup, mas permite que voc&ecirc; duplique uma parti&ccedil;&atilde;o criada. Ent&atilde;o, para ter backups &eacute; necess&aacute;rio utilizar apenas a metade do espa&ccedil;o dispon&iacute;vel para as parti&ccedil;&otilde;es de uso, de forma que a outra metade fique dispon&iacute;vel para a c&oacute;pia da parti&ccedil;&atilde;o. Al&eacute;m disso &eacute; necess&aacute;rio que a m&aacute;quina esteja parada para realizar a c&oacute;pia das parti&ccedil;&otilde;es. N&atilde;o &eacute; nada pr&aacute;tico.

O Amazon EC2 em si n&atilde;o possui storage persistente, ent&atilde;o n&atilde;o faz sentido fazer backup recorrente da imagem. Basta voc&ecirc; ter uma c&oacute;pia da inst&acirc;ncia que utilizou para criar a m&aacute;quina. O storage persistente &eacute; realizado pelo Amazon EBS onde voc&ecirc; pode criar volumes a serem utilizados pelo Amazon EC2. O Amazon EBS permite a cria&ccedil;&atilde;o de snapshots a qualquer momento e este snapshots podem ser armazenados no Amazon S3 com alguns scripts simples.

<strong>Pre&ccedil;o</strong>

Em compara&ccedil;&atilde;o com servidores dedicados, a economia &eacute; vis&iacute;vel seja qual for a op&ccedil;&atilde;o. No caso da Amazon EC2 voc&ecirc; vai pagar no m&iacute;nimo U$ 72/m&ecirc;s pela m&aacute;quina mais custos com EBS e S3. No meu caso em que eu queria levantar algumas m&aacute;quinas para fazer tarefas espec&iacute;ficas simples que n&atilde;o requeriam muito processamento e mem&oacute;ria, a Amazon n&atilde;o era uma boa escolha.

Tanto o Slicehost quanto o Linode possuem planos de m&aacute;quina com storage a partir de U$ 20/m&ecirc;s. Isso viabiliza, por exemplo, uma m&aacute;quina s&oacute; para DNS secund&aacute;rio e reposit&oacute;rios de controle de vers&atilde;o (SVN, GIT).

Se voc&ecirc; tem um caso simples, como uma aplica&ccedil;&atilde;o web ou um site, n&atilde;o escolha a Amazon. Se voc&ecirc; precisa de uma farm com v&aacute;rios servidores, alta escalabilidade, etc. a Amazon me parece uma boa op&ccedil;&atilde;o.

<strong>Amazon x Slicehost X Linode</strong>

O Amazon EC2 &eacute; mais adequado para aplica&ccedil;&otilde;es de larga escala. Ele foi criado com o prop&oacute;sito de processamente distribu&iacute;do e por conta disso a modalidade de uso &eacute; um pouco diferente dos outros dois servi&ccedil;os. No Amazon Ec2 &eacute; poss&iacute;vel que voc&ecirc; tenha 10 m&aacute;quinas configuradas e prontas para uso mas deixar somente 5 delas rodando. Voc&ecirc; s&oacute; pagar&aacute; pelo tempo de uso de cada m&aacute;quina.

&Eacute; poss&iacute;vel tamb&eacute;m configurar de tal maneira que voc&ecirc; tenha uma m&aacute;quina servindo um site e que, caso o processamento desta m&aacute;quina chegue a 80%, uma outra seja levantada automaticamente e a carga seja balanceada. Para isso funcionar, &eacute; necess&aacute;rio uma oura m&aacute;quina na frente fazendo o balanceamento de carga (load balancer) e seu site deve estar preparado. Estar preparado significa basicamente n&atilde;o salvar arquivos em disco, sejam eles enviados por upload de usu&aacute;rio, arquivos de sess&atilde;o e cookie e arquivos de cache. Para distribuir um site em duas m&aacute;quinas estes arquivos devem estar sendo salvos em um storage remoto, como por exemplo Amazon S3.

Como o meu caso n&atilde;o era muito complexo ignorei o Amazon EC2. Tive que escolher entre Slicehost e Linode.

O Linode permite que voc&ecirc; escolha em que datacenter deseja hospedar sua m&aacute;quina virtual. Na pr&oacute;pria interface, ele mostra qual &eacute; o nome do host que sua m&aacute;quina virtual est&aacute; hospedada. O Slicehost n&atilde;o tem este suporte. Eles conclu&iacute;ram recentemente as instala&ccedil;&otilde;es no segundo datacenter e ainda n&atilde;o tem essas informa&ccedil;&otilde;es no painel de controle.

Para solicitar uma interface de rede interna, onde o tr&aacute;fego n&atilde;o &eacute; contabilizado na banda contratada, ou configurar IP Failover, no Slicehost voc&ecirc; precisa solicitar via ticket enquanto no Linode basta alguns cliques pelo painel de controle.

O Linode permite voc&ecirc; criar v&aacute;rias parti&ccedil;&otilde;es diferentes e escolher em que devices estas estar&atilde;o dispon&iacute;veis, o Slicehost n&atilde;o traz nenhuma op&ccedil;&atilde;o quanto a parti&ccedil;&atilde;o de discos.

Como explicado anteriormente, O Slicehost possui servi&ccedil;o de backup, o Linode n&atilde;o.

O Linode &eacute; muito mais completo e tem muito mais op&ccedil;&otilde;es.

<strong>Minha conclus&atilde;o &eacute; que o Linode &eacute; feito para administradores de sistema enquanto o Slicehost &eacute; feito para desenvolvedores.</strong>

Vou ser sincero que demorei at&eacute; escolher entre as duas. Cheguei a configurar <a href="http://dev.mysql.com/doc/mysql-ha-scalability/en/index.html">MySQL em HA</a> usando <a href="http://www.mysql.com/products/enterprise/drbd.html">DRBD</a> no Linode para ver como seria. Essa configura&ccedil;&atilde;o n&atilde;o &eacute; poss&iacute;vel no Slicehost, pelo fato de n&atilde;o poder particionar os discos. Essas diferen&ccedil;as criaram v&aacute;rias d&uacute;vidas na minha cabe&ccedil;a.

Embora o Linode tenha o maior n&uacute;mero de op&ccedil;&otilde;es, eu escolhi pelo Slicehost, simplesmente por que tem backup e &eacute; muito mais f&aacute;cil e r&aacute;pido executar as tarefas. O excesso de opc&otilde;es do Linode n&atilde;o agregavam valor e resolviam problemas que eu n&atilde;o tinha. Al&eacute;m de tornar todo o processo burocr&aacute;tico e chato (neste momento eu j&aacute; estava mal acostumado, por que chato mesmo &eacute; com servidor dedicado).

Veja as op&ccedil;&otilde;es que o painel de controle do Slicehost oferece:

<img class="alignnone size-full wp-image-294" title="Op&ccedil;oes do Painel de Controle do Slicehost" src="http://rafael.adm.br/wp-content/uploads/2009/02/picture-6.png" alt="Op&ccedil;oes do Painel de Controle do Slicehost" width="484" height="70" />

Era tudo que eu precisava para ter mais seguran&ccedil;a. Depois de decidido, m&atilde;os a obra!

<strong>O resultado desta brincadeira foi que na Myfreecomm reduzimos os custos em 5 vezes e na BielSystems estamos com o EmailFax rodando de forma mais segura e r&aacute;pida!</strong>

Na Myfreecomm as configura&ccedil;&otilde;es n&atilde;o foram feitas por mim. Na BielSystems, usei <a href="http://www.deprec.org">Deprec</a> com <a href="http://www.capify.org">Capistrano</a> para fazer o deploy de <a href="http://www.rubyonrails.pro.br">Rails</a> em <a href="http://www.modrails.com">Passenger (mod_rails)</a> com <a href="http://www.rubyenterpriseedition.com">Ruby Enterprise</a>. Mas isso &eacute; papo para uma outra oportunidade.

Espero que a dica ajuda a todos que est&atilde;o colocando no ar seus pr&oacute;ximos neg&oacute;cios. Espero feedback nos coment&aacute;rios!

Abra&ccedil;os e at&eacute; a pr&oacute;xima
