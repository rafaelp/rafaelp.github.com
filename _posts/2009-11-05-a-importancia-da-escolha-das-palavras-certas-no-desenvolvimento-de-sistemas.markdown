--- 
layout: post
title: "A import\xC3\xA2ncia da escolha das palavras certas no desenvolvimento de sistemas"
wordpress_id: 424
wordpress_url: http://rafael.adm.br/?p=424
date: 2009-11-05 14:04:03 -02:00
---
Estamos desenvolvendo na <a href="http://myfreecomm.com.br">Myfreecomm</a> um sistema de cobrança que está ficando muito interessante. Ele irá resolver um problema real e trará muita conveniência no dia-a-dia das empresas que realizam cobrança com integração com os bancos.

O sistema está quase pronto e estamos neste momento definindo aqueles detalhes que fazem toda a diferença.

<strong>A concepção foi baseada em um fluxo único de uso, de forma que os itens de menu contemplassem as ações que o usuário irá realizar, como se o sistema todos fosse um grande wizard. As páginas acessórias são acessadas apenas por links contextuais. Não temos menu e submenu, nem breadcrumb. E te digo, fazer o sistema assim é um desafio!</strong>

A interface ficou bem simples, sem muitas opções e com links no lugar certo e na hora certa. Quando fazemos sistemas deste gênero as palavras e termos utilizados nos itens de menu, nos títulos e nos links são muito importantes. É preciso que o usuário consiga se situar de forma rápida e entenda o que irá acontecer a cada clique.

O Allan é o responsável por fazer com que o sistema seja entendido pelos usuários. Ele está escrevendo o manual, pensando em que lugares existirão links para o manual, quais são os pontos que podem gerar dúvidas, etc. E nesse processo ele está revendo os termos utilizados a todo momento. Inclusive nas interações chegamos a perceber e incluir na histórias novos status para determinada entidade e tudo.

Hoje ele levantou uma bola que gerou uma discussão muito saudável. Uma das ações do usuário no sistema é juntar várias cobranças para que elas sejam enviadas para o sistema do banco. Até hoje, o termos utilizado para esse conjunto de cobranças era <strong>Remessa</strong>. Tínhamos termos tais como: Preparar Remessa, Enviar Remessa, Remessas Pendentes e Remessas Enviadas.

A questão levantada foi: <strong>"Não deveria ser Lote ao invés de Remessa?"</strong>

A conclusão imediata depois de um rápido brainstorm foi de que tanto faz, afinal dá no mesmo, lote e remessa são a mesma coisa. Bem, depois de muita conversa e esclarecimento sobre entidades, estados, tempos, etc chegamos a uma opinião diferente.

Buscamos definições de <a href="http://www.google.com.br/search?q=define%3A+lote">lote</a> e <a href="http://www.google.com.br/search?q=define%3A+remessa">remessa</a> no Google, depois fomos aos dicionários <a href="http://www.priberam.pt/DLPO/default.aspx?pal=remessa">priberam</a> e <a href="http://www.dicionariodoaurelio.com/dicionario.php?P=Remessa">Aurélio</a>. Mais alguns minutos de discussão e desenho foram neecessários para concluirmos que Remessa é algo que foi enviado, ou seja, que já passou pelo processo de envio. Se existe algo que pode ser remetido, mas ainda não o foi, isso não pode ser chamado de Remessa.

Donde se concluí que  dizer "Enviar Remessa" está errado e o termo "Remessa enviada" é um pleonasmo. <a href="http://twitter.com/rafaelp/status/5451280083">Se é Remessa, é por que já foi enviado.</a>

No meio da discussão chegamos a lembrar que muitas vezes não importa o "certo" e "errado" na gramática formal e que o mais importante é o entendimento do usuário. Mas é o que eu digo, se podemos usar o correto de acordo com a gramática sem afetar o entendimento do usuário, melhor. Se, usando o termo gramaticalmente corrento, ainda assim facilitamos o entendimento do usuário, como foi o caso, melhor ainda!

Por fim decidimos usar o termo Lote ao invés de Remessa e mudaremos para "Preparar Lote", "Enviar Lote", "Lotes pendentes" , "Lotes enviados" e outros termos presentes na interface. Como <a href="http://rafael.adm.br/p/palavra-do-rei-melhores-praticas-em-desenvolvimento-de-software/">escrevemos todo código de programação em inglês</a>, não tivemos maiores problemas.

Essa experiência foi muito interessante, pois foi legal estudar e discutir sobre o significado destas palavras e foi incrível perceber como uma mudança simples pode ao mesmo tempo melhorar o sistema e facilitar nosso trabalho. Ficará mais fácil agora escrever o manual. É aquela velha história: <strong>Se está difícil, está errado!</strong>

Uma vez eu li um post da <a href="http://37signals.com/svn/">37signals</a> extamente sobre isso. Agora eu entendo perfeitamente o que eles queriam passar com o post, e é o que eu espero deixar de recado também.

<strong>A definição de termos corretos e fáceis de serem compreendidos pelo usuário é fundamental para a boa usabilidade do sistema.</strong>

Além disso, escolher as palavras certas facilita a compreensão da relação do que elas representam com o sistema como um todo.

São diversos fatores que tornam um sistema bom ou ruim, difícil ou fácil de usar e complexo ou simples. Usar palavras corretas e de simples entendimento é um fator muito importante. Às vezes parece que está tudo bom, e que as palavras estão certas e serão compreendidas, mas nem sempre é verdade.

Pense no sistema que você usa ou está desenvolvendo. Será que mudando alguns termos não ficaria muito mais fácil de usar? Você tem algum caso similar? Deixe sua história nos comentários!

Abraços e até a próxima.
