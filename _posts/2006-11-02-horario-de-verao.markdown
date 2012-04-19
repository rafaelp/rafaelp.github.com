--- 
layout: post
status: publish
published: true
title: Hor&aacute;rio de Ver&atilde;o
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 100
wordpress_url: http://rafael.adm.br/p/horario-de-verao/
date: 2006-11-02 00:22:30 -03:00
categories: 
- Posts
tags: 
- brasil
- snippet
- servidores
- infra-estrutura
---
Vou deixar aqui uma dica para aqueles que n&atilde;o poder&atilde;o trocar o hor&aacute;rio do servidor (linux) no momento da virada do hor&aacute;rio de ver&atilde;o 2006.

<strong>1. Crie o script horario_verao_2006.sh</strong>

[code]
vi /root/horario_verao_2006.sh
[/code]

<strong>2. Copie e cole o conte&uacute;do abaixo</strong>

[code]
#!/bin/sh

date -s "2006-11-05 01:00"

# Pacotes que devem ser reiniciados
/etc/init.d/mysql restart
/etc/init.d/postgresql restart
[/code]
<em>Obs: Inclua ou retire os pacotes que devem ser reiniciados de acordo com os servi&ccedil;os que rodam no seu servidor.</em>

<strong>3. Mude a permiss&atilde;o do arquivo para torn&aacute;-lo execut&aacute;vel</strong>

[code]
chmod u=rwx,g=rx,o= /root/horario_verao_2006.sh
[/code]

<strong>4. Copie e cole a linha abaixo no arquivo do cron</strong>

[code]
0 0 5 11 * /root/horario_verao_2006.sh
[/code]

<strong>5. Reinicie o cron</strong>

Agora voc&ecirc; pode viajar sossegado e aproveitar o feriado!

Link &uacute;til: <a href="http://pcdsh01.on.br/DecHV5920.gif">Decreto do hor&aacute;rio de ver&atilde;o de 2006</a>

Abra&ccedil;os
