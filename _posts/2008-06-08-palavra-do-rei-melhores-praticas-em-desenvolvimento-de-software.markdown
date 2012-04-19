--- 
layout: post
status: publish
published: true
title: "Palavra do Rei - melhores pr\xC3\xA1ticas em desenvolvimento de software (proposta de meme)"
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 203
wordpress_url: http://rafael.adm.br/?p=203
date: 2008-06-08 21:45:13 -03:00
categories: 
- Posts
tags: 
- desenvolvimento
- "programa\xC3\xA7\xC3\xA3o"
- meme
- dicas
- equipe
- myfreecomm
- software
- "melhores pr\xC3\xA1ticas"
---
Na <a href="http://myfreecomm.com.br">Myfreecom</a> criamos uma série de regras que são o início do que virá a ser o conjunto de melhores práticas no desenvolvimento de software na empresa. "O Rei" é a inteligência superior resultante da opinião pessoal de cada um em relação a desenvolvimento de software.

Todos nós temos estas "melhores práticas" definidas em nossa mente, mas nem sempre elas são iguais entre a equipe. Esta diferença muitas vezes causa frustação, pois nem sempre as práticas do companheiro de equipe atinge nossas espectativas, ou vice-versa.

O Rei da Myfreecomm diz:

<strong>Programação</strong>
<ul>
	<li><span style="font-size: small;">Todo o código de programação deve ser escrito em inglês.</span></li>
	<li><span style="font-size: small;">Os nomes de variáveis são em inglês.</span></li>
	<li><span style="font-size: small;">Os parâmetros são em inglês.</span></li>
	<li><span style="font-size: small;">Não devemos usar abreviação em variáveis e parâmetros.</span></li>
	<li><span style="font-size: small;">Nunca uma variável e parâmetro terá apenas uma letra, ela será sempre uma palavra (em inglês) auto-explicativa (com excessão de variáveis locais em iteração, exemplo clássico a variável "i").</span></li>
	<li><span style="font-size: small;">Nunca suponha em seu código qual será o endereço de uma url ou localização de arquivo. Mantenha suas funções parametrizadas. </span></li>
	<li><span style="font-size: small;">Nunca coloque o nome do produto ou do cliente em variáveis ou nome de projetos.
</span></li>
</ul>
<strong>Deployment</strong>
<ul>
	<li><span style="font-size: small;"><a href="http://www.google.com/url?q=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDon%2527t_repeat_yourself&amp;sa=D&amp;sntz=1&amp;usg=AFrqEzenADUVbponFiGrl7YhqQr26yo7cw">Nunca duplique um código</a>.</span></li>
	<li><span style="font-size: small;">Quando pensar em duplicar um código, por precisar de uma solução rápida e mais segura, Pare!</span></li>
	<li><span style="font-size: small;">Um código deve sempre estar em um ÚNICO lugar nos ambientes de produção.</span></li>
	<li><span style="font-size: small;">Uma hora ganha por duplicar o código hoje, equivale a uma semana perdida amanhã.</span></li>
</ul>
<strong>Banco de Dados</strong>
<ul>
	<li><span style="font-size: small;">O banco de dados é sagrado, apenas uma programação (a dona do bd) deve ter permissão de acesso.</span></li>
	<li><span style="font-size: small;">Não escreva qualquer programação que acesse direto o bd, além da dona, mesmo que seja apenas para leitura.</span></li>
	<li><span style="font-size: small;">Os nomes de banco de dados, tabelas e campos.. em inglês.</span></li>
	<li><span style="font-size: small;">Nunca teste um código em um banco de dados em produção, pois você destruirá a integridade das informações do banco.</span></li>
</ul>
<strong>URL</strong>
<ul>
	<li><span style="font-size: small;">A definição de uma URL de acesso interno é um recurso caro. O custo de mudança é muito alto.</span></li>
	<li><span style="font-size: small;">Ao definir uma URL de acesso interno, pense bem no escopo em que ela se encontra e abstraia o máximo possível.</span></li>
	<li><span style="font-size: small;">Não use caracter "_" em domínios e sub-domínios, o Internet Explorer vai te dar uma rasteira.</span></li>
	<li><span style="font-size: small;">Prefira "-" para substituir o espaço nos domínios e sub-domínios.</span></li>
</ul>
Nós acreditamos que esta lista é dinâmica e nunca se completará. Conforme formos trabalhando, aprendendo novas tecnologias, o Rei vai soltando mais regrinhas e a euipe vai mantendo a equipe com uma idéia única. Sabemos que esta lista mesmo está incompleta ainda...

Acreditamos também que não existe uma única lista "correta" e que cada empresa vai achar o seu conjunto de melhores práticas, de acordo com a sua situação, mercado e visão.

Não tenho dúvidas, que O Rei da <a href="http://www.improveit.com.br/en">Improve-it</a>, por exemplo, vai dizer muita coisa em relação à testes, BDD e afins...

E você, o que acha destas regras, discorda de alguma? Alguma vez já escreveu seu conjunto de melhores práticas? O que o Rei da sua empresa diz?

Convido cada um postar em seu blog a sua lista de melhores práticas e colocar um trackback para cá, que tal?

Seria um MEME interessante, talvez com o apoio de blogs mais fortes, que lêem este, conseguimos começar a trocar uma idéia sobre esse assunto ;-)

Abraços e até a próxima.
