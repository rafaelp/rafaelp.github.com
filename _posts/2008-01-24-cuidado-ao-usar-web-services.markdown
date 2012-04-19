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
date: 2008-01-24 23:57:01 -02:00
categories: 
- Posts
tags: 
- Tecnologia
- servidores
- "seguran\xC3\xA7a"
- web-services
- conectividade
---
Utilizar web-services é muito bom, mas exige alguns cuidados. Nesta semana tive um problema que nunca imaginei que pudesse acontecer.

<span style="font-weight: bold">A conexão do meu servidor com o servidor do web service foi interrompida de uma hora pra outra.</span>

Demorou um tempo para acharmos a causa e até agora o problema não foi resolvido por completo. Já conseguimos uma solução paleativa, mas de qualquer forma ainda preciso investigar o por quê do problema ter ocorrido.

Depois de muito chat com os donos do web service, detectamos que o firewall deles começou a bloquear as minhas conexões pois estava  entendendo como sendo um ataque hacker. Muito estranho, mas o que acontecia é que o meu servidor começou a abrir quatro sockets para cada conexão sendo todos eles com a mesma "source port". Por este motivo que o firewal começou a bloquear as conexões.

Agora, por que isso começou a acontecer ninguém sabe. Os possíveis motivos seriam: a) atualização de algum pacote no meu servidor, b) alteração na configuração do gateway do meu datacenter, c) mudança de regras no firewall do web service.

Das duas uma, ou meu servidor sempre mandou os sockets desta maneira e o firewall do web service não  detectava antes, ou ele passou a mandar a partir de uma atualização de pacote no meu servidor ou a partir de uma mudança no gateway do datacenter.

Como eu não realizei nenhuma atualização no servidor, só restam as opções do datacenter ter alterado alguma configuração no gateway ou o web service ter alterado as regras no firewal.
<p style="font-weight: bold">O problema é que ambos dizem que não realizaram nenhuma alteração!</p>
A solução paleativa, foi utilizar o servidor secundário do web service. Eles me passaram o ip e eu configurei no hosts para que o domínio do web service fosse atendido primeiramente pelo ip secundário. Isso resolveu o problema, mas não corrigiu a causa.Já apliquei um patch do grsecurity no kernel, que corrigiria uma possível falha. Não adiantou. Neste final de semana irei atualizar todos os pacotes do servidor, como solicitado pelo meu datacenter, e verei se isso resolve.

Estou acreditando que meu datacenter forçou essa configuração, para poder monitorar as conexões, uma vez que o meu servidor fazia muitas conexões por minuto ao servidor do web service. Mas só poderei cair em cima deles depois que atualizar meu sistema.

<span style="font-weight: bold">Situação delicada e neste caso o melhor é prevenir.</span> Por isso o motivo deste post. Eu não imaginava que isso pudesse acontecer e me pegou de surpresa... Agora já estou me mexendo para evitar que isso aconteça novamente.

<span style="font-weight: bold">Ai vão algumas dicas para evitar este tipo de problema com conexões à web services.</span>
<ul>
	<li>Primeiramente é interessante que você tenha ao menos dois servidores de aplicação, neste caso se der problema em um, você terá o outro de backup. O ideal é que cada um destes servidores estejam em datacenters diferentes, pois caso um datacenter aplique uma política de segurança que cause este problema, você terá tempo de tentar resolver o problema e até configurar um terceiro servidor, enquanto o de backup fica em produção.</li>
	<li>Comunique ao web service que você pretende fazer diversas conexões ao serviço deles. Pergunte sobre a política de segurança e sobre as regras do firewall. Se possível passe o IP do seu servidor para que eles possam colocar numa "white list"</li>
	<li>Comunique seu datacenter sobre o número de conexões que serão feitas á um mesmo IP (do web service). Pergunte sobre as políticas de segurança. Solicite que não haja nenhum tipo de interferência nos pacotes enviados do seu servidor para o servidor do web service.</li>
	<li>Prepare um túnel reverso de SSH, desta maneira, caso  você não consiga realizar a conexão, você consegue roteá-la por outro servidor, chamado de "middle", de forma que seu servidor se conecte ao middle e o middle se conecte ao web service.</li>
</ul>
Bem, espero poder ajudar com a experiência que tive. Deixem seus comentários caso tenham alguma sugestão para este caso.

Abraços e até a próxima.
