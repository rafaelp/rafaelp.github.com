---
layout: post
status: publish
published: true
title: Cuidado ao usar web services
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 161
wordpress_url: http://rafael.adm.br/p/cuidado-ao-usar-web-services/
date: 2008-01-24 23:57:01.000000000 -02:00
categories:
- Posts
tags:
- Tecnologia
- servidores
- seguran&ccedil;a
- web-services
- conectividade
---
Utilizar web-services &eacute; muito bom, mas exige alguns cuidados. Nesta semana tive um problema que nunca imaginei que pudesse acontecer.

<span style="font-weight: bold">A conex&atilde;o do meu servidor com o servidor do web service foi interrompida de uma hora pra outra.</span>

Demorou um tempo para acharmos a causa e at&eacute; agora o problema n&atilde;o foi resolvido por completo. J&aacute; conseguimos uma solu&ccedil;&atilde;o paleativa, mas de qualquer forma ainda preciso investigar o por qu&ecirc; do problema ter ocorrido.

Depois de muito chat com os donos do web service, detectamos que o firewall deles come&ccedil;ou a bloquear as minhas conex&otilde;es pois estava  entendendo como sendo um ataque hacker. Muito estranho, mas o que acontecia &eacute; que o meu servidor come&ccedil;ou a abrir quatro sockets para cada conex&atilde;o sendo todos eles com a mesma "source port". Por este motivo que o firewal come&ccedil;ou a bloquear as conex&otilde;es.

Agora, por que isso come&ccedil;ou a acontecer ningu&eacute;m sabe. Os poss&iacute;veis motivos seriam: a) atualiza&ccedil;&atilde;o de algum pacote no meu servidor, b) altera&ccedil;&atilde;o na configura&ccedil;&atilde;o do gateway do meu datacenter, c) mudan&ccedil;a de regras no firewall do web service.

Das duas uma, ou meu servidor sempre mandou os sockets desta maneira e o firewall do web service n&atilde;o  detectava antes, ou ele passou a mandar a partir de uma atualiza&ccedil;&atilde;o de pacote no meu servidor ou a partir de uma mudan&ccedil;a no gateway do datacenter.

Como eu n&atilde;o realizei nenhuma atualiza&ccedil;&atilde;o no servidor, s&oacute; restam as op&ccedil;&otilde;es do datacenter ter alterado alguma configura&ccedil;&atilde;o no gateway ou o web service ter alterado as regras no firewal.
<p style="font-weight: bold">O problema &eacute; que ambos dizem que n&atilde;o realizaram nenhuma altera&ccedil;&atilde;o!</p>
A solu&ccedil;&atilde;o paleativa, foi utilizar o servidor secund&aacute;rio do web service. Eles me passaram o ip e eu configurei no hosts para que o dom&iacute;nio do web service fosse atendido primeiramente pelo ip secund&aacute;rio. Isso resolveu o problema, mas n&atilde;o corrigiu a causa.J&aacute; apliquei um patch do grsecurity no kernel, que corrigiria uma poss&iacute;vel falha. N&atilde;o adiantou. Neste final de semana irei atualizar todos os pacotes do servidor, como solicitado pelo meu datacenter, e verei se isso resolve.

Estou acreditando que meu datacenter for&ccedil;ou essa configura&ccedil;&atilde;o, para poder monitorar as conex&otilde;es, uma vez que o meu servidor fazia muitas conex&otilde;es por minuto ao servidor do web service. Mas s&oacute; poderei cair em cima deles depois que atualizar meu sistema.

<span style="font-weight: bold">Situa&ccedil;&atilde;o delicada e neste caso o melhor &eacute; prevenir.</span> Por isso o motivo deste post. Eu n&atilde;o imaginava que isso pudesse acontecer e me pegou de surpresa... Agora j&aacute; estou me mexendo para evitar que isso aconte&ccedil;a novamente.

<span style="font-weight: bold">Ai v&atilde;o algumas dicas para evitar este tipo de problema com conex&otilde;es &agrave; web services.</span>
<ul>
	<li>Primeiramente &eacute; interessante que voc&ecirc; tenha ao menos dois servidores de aplica&ccedil;&atilde;o, neste caso se der problema em um, voc&ecirc; ter&aacute; o outro de backup. O ideal &eacute; que cada um destes servidores estejam em datacenters diferentes, pois caso um datacenter aplique uma pol&iacute;tica de seguran&ccedil;a que cause este problema, voc&ecirc; ter&aacute; tempo de tentar resolver o problema e at&eacute; configurar um terceiro servidor, enquanto o de backup fica em produ&ccedil;&atilde;o.</li>
	<li>Comunique ao web service que voc&ecirc; pretende fazer diversas conex&otilde;es ao servi&ccedil;o deles. Pergunte sobre a pol&iacute;tica de seguran&ccedil;a e sobre as regras do firewall. Se poss&iacute;vel passe o IP do seu servidor para que eles possam colocar numa "white list"</li>
	<li>Comunique seu datacenter sobre o n&uacute;mero de conex&otilde;es que ser&atilde;o feitas &aacute; um mesmo IP (do web service). Pergunte sobre as pol&iacute;ticas de seguran&ccedil;a. Solicite que n&atilde;o haja nenhum tipo de interfer&ecirc;ncia nos pacotes enviados do seu servidor para o servidor do web service.</li>
	<li>Prepare um t&uacute;nel reverso de SSH, desta maneira, caso  voc&ecirc; n&atilde;o consiga realizar a conex&atilde;o, voc&ecirc; consegue rote&aacute;-la por outro servidor, chamado de "middle", de forma que seu servidor se conecte ao middle e o middle se conecte ao web service.</li>
</ul>
Bem, espero poder ajudar com a experi&ecirc;ncia que tive. Deixem seus coment&aacute;rios caso tenham alguma sugest&atilde;o para este caso.

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
