--- 
layout: post
title: "Hor\xC3\xA1rio de Ver\xC3\xA3o"
wordpress_id: 100
wordpress_url: http://rafael.adm.br/p/horario-de-verao/
date: 2006-11-02 00:22:30 -03:00
---
Vou deixar aqui uma dica para aqueles que não poderão trocar o horário do servidor (linux) no momento da virada do horário de verão 2006.

<strong>1. Crie o script horario_verao_2006.sh</strong>

[code]
vi /root/horario_verao_2006.sh
[/code]

<strong>2. Copie e cole o conteúdo abaixo</strong>

[code]
#!/bin/sh

date -s "2006-11-05 01:00"

# Pacotes que devem ser reiniciados
/etc/init.d/mysql restart
/etc/init.d/postgresql restart
[/code]
<em>Obs: Inclua ou retire os pacotes que devem ser reiniciados de acordo com os serviços que rodam no seu servidor.</em>

<strong>3. Mude a permissão do arquivo para torná-lo executável</strong>

[code]
chmod u=rwx,g=rx,o= /root/horario_verao_2006.sh
[/code]

<strong>4. Copie e cole a linha abaixo no arquivo do cron</strong>

[code]
0 0 5 11 * /root/horario_verao_2006.sh
[/code]

<strong>5. Reinicie o cron</strong>

Agora você pode viajar sossegado e aproveitar o feriado!

Link útil: <a href="http://pcdsh01.on.br/DecHV5920.gif">Decreto do horário de verão de 2006</a>

Abraços
