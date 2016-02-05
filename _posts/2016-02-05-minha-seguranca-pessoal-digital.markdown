---
layout: post
status: publish
published: true
title: Minha Segurança Pessoal Digital
slug: minha-seguranca-pessoal-digital
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
categories:
- Posts
tags: []
---

Constantemente eu venho trabalhando para manter minha segurança pessoal digital. Sempre busquei ativamente melhorar o nível de segurança das minhas informações, dispositivos e computador. Vou descrever o que eu uso de software e práticas com esse objetivo.

Se você usa Windows, passa amanhã.

## Seguran&ccedil;a do Macbook

### HD Criptografado

A primeira atitude foi criptografar meu HD. O Mac OS já tem essa função e se chama FileVault. Já usei no passado o PGP Whole Disk Encryption mas tive problema depois que o Mac OS foi atualizado, preferi ficar com o FileVault mesmo. Sempre tive meu HD criptografado.

Para ativar o FileVault vá em System Preferences > Security & Privacy > FileVault

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-0.png)

Os HDs externos de backup também são criptografados, tenho dois HDs externos e ambos usam a criptografia padrão disponível no Disk Utility.

### Screen saver com senha

Eu deixo configurado para solicitar a senha imediatamente após o descanso de tela ser ativado e além disso o descanso de tela configurado para ativar automaticamente após 2 minutos. Isso significa que se eu esquecer o computador sozinho e aberto, em no máximo 2 minutos ele estará seguro.

Essa configuração fica em System Preferences > Security & Privacy > General

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-1.png)

Além disso eu configuro um HotCorner para ativar o screen saver. Criei o hábito de, sempre que for deixar o computador sozinho, levar o mouse pro canto inferior direito da tela para ativar logo o screen saver e bloquear o computador.

Essa configuração fica em System Preferences > Mission Control > HotCorners...

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-2.png)

Sendo assim eu ativo o screen saver na hora, senão ele ativa sozinho em 2 minutos. Mas tenho outro "backup" no que diz respeito ao travamento do computador.

### Travamento da tela por distanciamento

Esse eu comecei a usar agora e não sei quão efetivo vai realmente ser. Trata-se de um aplicativo chamado [Near Lock](http://nearlock.me/). Você conecta o seu iPhone com o seu Mac e todas as vezes que você se distanciar do computador com o iPhone ele bloqueia sozinho. Na prática ele vai funcionar quando eu esquecer de chamar o screen saver diminuindo o tempo descoberto de 2 minutos para quase que imediato.

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-3.png)

### Localizador e controlador &agrave; dist&acirc;ncia

Eu uso um software chamado [Prey](https://preyproject.com/) que está sempre rodando e monitorando a localização do meu Macbook. Caso ele seja perdido ou roubado eu consigo localizá-lo remotamente. O software é gratuito para até 3 dispositivos. Através do Prey eu consigo bloquear o computador, tocar um alarme para encontrá-lo ou enviar uma mensagem para a pessoa que achou ou roubou. Usá-lo é uma medida preventiva.

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-4.png)

## Seguran&ccedil;a do iPhone

### Configura&ccedil;&otilde;es do Passcode

O Passcode está ativado e ele é solicitado toda vez que aperto o botão home para abrir a tela principal. Isso é básico e todo mundo deveria ter.

Eu também não divulgo meu passcode pra ninguém, absolutamente ninguém. No momento que você divulga, você delega a outra pessoa a sua segurança e isso é um problema em diversos casos. Primeiro que nem todo mundo se liga na criticidade de segurança e pode falar em voz alta o seu Passcode sem querer. Outra situação mais extrema é no caso de um sequestro a outra pessoa ser forçada a fornecer o seu Passcode. A melhor situação aqui é que ninguém mais saiba além de você.

Para fazer essa configuração vá em Settings > Touch ID & Passcode

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-5.png)

### Tempo do Auto-Lock

O meu celular bloqueia a cada 2 minutos. A mesma regra do screensaver no Macbook. Esse é o tempo máximo que alguém tem para tentar chegar no dispositivo se eu deixá-lo largado em uma mesa. Quanto menor o tempo, melhor.

Essa configuração fica em Settings > General > Auto-Lock

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-6.png)

### Localizador e controle &agrave; dist&acirc;ncia

Eu deixo o Find My iPhone ativado. Essa é uma opção que a Apple dá para quem usa o iCloud conseguir localizar o iPhone por meio de uma interface web, de um iPad, Mac ou outro iPhone. Caso eu perca o aparelho eu posso tentar localizá-lo e o principal, apagar todo o conteúdo remotamente.

Essa configuração fica em Settings > iCloud > Find My iPhone

![](/blog/images/posts/2016-02-05/minha-seguranca-pessoal-digital-7.png)

Como forma de backup eu também uso o Prey no iPhone.

## Seguran&ccedil;a de Senhas

### Gerenciador de Senhas

Por um tempo usei o OneLogin, mas o fato de todo o conteúdo ficar armazenado com eles é muito zoado, então parti para um software desktop e mobile com armazenamento local. O melhor disparado é o [1Password](https://agilebits.com/onepassword). Hoje eu guardo todas as minhas senhas nele.

Eu faço sync do arquivo de backup do 1Password com o Dropbox. Esse arquivo é criptografado e eles garantem que mesmo que algum funcionário do Dropbox queira ler, não vai conseguir descriptografar. Não é difícil de acreditar, até hoje não houve nenhum caso de quebra da criptografia que eles usam.

### Senha Master do 1Password

Minha senha master tem mais de 30 caracteres. Ela é praticamente impossível de ser quebrada. Eu segui as [orientações de como escolher uma boa senha](https://blog.agilebits.com/2011/06/21/toward-better-master-passwords/) dos criadores do 1Password.

### Pol&iacute;tica de Senhas

Todas as contas online que eu tenho possuem uma senha diferente. Eu não uso senha igual em absolutamente nenhum serviço que me cadastro, salve uma excessão. Alguns sites de compra de ingressos ou lojas virtuais. Nesses casos eu tenho uma senha padrão que uso igual em todos. Aos poucos estou atualizando as senhas e deixando usar essas iguais. Fora isso é uma senha para cada serviço.

Em geral uso o próprio 1Password para gerar uma senha segura no momento que estou fazendo cadastro em um serviço.

## Seguran&ccedil;a na Internet

### Two-factor Authentication

Na maioria dos serviços mais relevantes, eu tenho habilitado o [two-factor authentication](https://en.wikipedia.org/wiki/Two-factor_authentication). Trata-se de uma autenticação a mais na hora do login que pede um token que é gerado na hora por um aplicativo no seu celular. O aplicativo que eu uso é o [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en). Exemplos de serviços que tenho o 2-phase habilitado: Contas de email, registro.br, Dropbox, Slack, MyFinance, Github.

### Proxy

Eu não uso proxy gratuito sobre nenhuma hipótese. Eu contrato e pago o serviço [StrongVPN](https://www.strongvpn.com/) quando preciso usar proxy.

### Email

O email deve ser um dos pontos mais seguros da sua estratégia.

Percebi que esse era um ponto de falha, pois eu usava a mesma senha para todos os emails e era uma senha que eu tinha desde 2006. Como o 1Password funcionou muito bem pra mim, e ele tem plugin para os navegadores que preenche a senha conforme você seleciona no aplicativo, eu defini uma senha segura pra cada conta de email agora. Esse era um grande ponto de falha, por que em geral o esqueci minha senha de todos os serviços confiam no acesso ao email. Então tendo acesso ao seu email o invasor tem acesso a praticamente todos os outros serviços.

Quase todas minhas contas de email são do Google (Gmail ou Google Apps) então praticamente todas tem suporte ao two-phase authentication que eu deixo habilitado.

Além disso deixo o meu número de celular como fallback para a autenticação. Eu sei que isso por si só é um ponto de falha, mas com chances remotas de ser explorado. Eu prefiro deixar habilitado e ter o benefício de receber SMS de alertas de segurança.

### Aplicativos Conectados

De tempos em tempos eu reviso principalmente minhas contas do Google e o Dropbox conferindo que aplicativos que tem acesso a minha conta (por eu ter concedido no passado) e avalio se eles continuam sendo realmente úteis. Eu busco ter o mínimo de aplicativos conectados aos meus serviços principais.

## Outras Pr&aacute;ticas

Em geral eu não empresto meu celular sem que eu esteja vendo o que a outra pessoa está fazendo. Bem como meu computador, para usar só comigo olhando. Parece meio neurótico, mas ter alguém usando o seu dispositivo sem o seu controle é a maior brecha que você pode dar. Não importa quem seja, uma vez concedido o acesso, você se acostuma e quando menos esperar, poderá ter seu computador comprometido.

Não pretendo aqui escrever um tutorial sobre práticas para se manter seguro, apenas dizer que me preocupo com essas coisas e tento reduzir ao máximo os casos de terceiros usando o meu computador.

## Conclus&atilde;o

Eu sou um cara preocupado com segurança. Hoje me sinto tranquilo em relação às minhas informações e arquivos caso eu laptop e meu celular sejam roubados. Remotamente consigo apagar tudo e bloquear todos os acessos.

Mas segurança é sempre uma corrida de gato e rato.

Eu não sou relevante para que haja um ataque específico a mim, não movimento dinheiro o suficiente para que me torne alvo de nada e não trabalho com informações confidenciais de nenhuma relevância. Sendo assim, considero que tenho muito mais segurança do que eu preciso na realidade.

Mantenho esses princípios por uma questão de paz de espírito.

Se você também pretende ter o mínimo de segurança digital, vale a pena seguir essas dicas. Espero que elas sejam bastante construtivas pra você!

Abraços e até a próxima.
