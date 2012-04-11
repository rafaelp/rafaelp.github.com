--- 
layout: post
title: "O deploy nunca foi t\xC3\xA3o f\xC3\xA1cil"
wordpress_id: 142
wordpress_url: http://rafael.adm.br/p/o-deploy-nunca-foi-tao-facil/
date: 2007-10-05 20:22:47 -03:00
---
Para agilizar ainda mais o processo de deploy de sites e aplicações web sugiro a utilização do <a href="http://labs.peritor.com/webistrano">Webistrano</a>.

O Webistrano é uma ferramenta de <a href="http://www.webopedia.com/TERM/D/deploy.html">deploy</a>, baseada na web, escrita em <a href="http://rubyonrails.com">Rails</a>, que utiliza o <a href="http://www.capify.org/">Capistrano</a> e organiza de forma excepcional o processo de atualização de sites e aplicações.

Você pode instalá-lo em qualquer servidor, o que permite que você e sua equipe possa realizar o deploy de qualquer lugar com acesso a internet, muito útil para equipes que trabalham a distância. Ele guarda um log de todos os deploys realizados, então você a qualquer momento consegue acessar quando o site foi atualizado e por quem.

Para completar, ele possui todas as configurações, o desenvolvedor é realmente inteligente e conhece a fundo as necessidades para manutenção de projetos web.

Só um alerta, embora tenha sido desenvolvido em Rails e utilize o Capistrano que inicialmente foi feito para projetos Rails, o Webistrano funciona como uma luva para qualquer tipo de projeto. Tenho feito o deploy dos sites em WordPress sem problemas!
Para usufruir destas facilidades, seu projeto precisa estar controlado com o <a href="http://subversion.tigris.org/">Subversion</a>.

Fica a dica, abraços a todos.
