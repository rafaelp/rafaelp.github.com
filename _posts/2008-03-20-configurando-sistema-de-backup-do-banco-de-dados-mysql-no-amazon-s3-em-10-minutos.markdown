---
layout: post
status: publish
published: true
title: Configurando sistema de backup do banco de dados MySQL no Amazon S3 em 10 minutos
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 176
wordpress_url: http://rafael.adm.br/p/configurando-sistema-de-backup-do-banco-de-dados-mysql-no-amazon-s3-em-10-minutos/
date: 2008-03-20 02:20:11.000000000 -03:00
categories:
- Posts
tags:
- seguran&ccedil;a
- backup
- banco de dados
- mysql
- servidor
---
Por indica&ccedil;&atilde;o do <a href="http://williamaraujo.eng.br/">William</a>, passei a usar o <a href="http://sourceforge.net/projects/automysqlbackup/">AutoMySQLBackup</a> em conjunto com um script de sincroniza&ccedil;&atilde;o de diret&oacute;rios no Amazon S3, para realizar backup dos bancos de dados MySQL dos servidores dedicados da <a href="http://bielsystems.com.br">BielSystems</a>.

<strong>Este script &eacute; bem completo e tem tudo que algu&eacute;m pode precisar para um sistema de backup eficiente e seguro em ambiente de produ&ccedil;&atilde;o.</strong>

Abaixo segue o "pacac&aacute;" de instala&ccedil;&atilde;o:

Por motivos de seguran&ccedil;a, sugiro que voc&ecirc; crie um usu&aacute;rio somente para backup, que tenha permiss&atilde;o apenas de leitura (SELECT). Para fazer isso, conforme <a href="http://gentoo-wiki.com/HOWTO_Backup_MySQL">sugerido aqui</a>, rode o comando abaixo no servidor que possui o MySQL instalado.
<pre lang="bash">$ mysql -u root -p -e "GRANT SELECT, LOCK TABLES ON *.* TO 'backup'@'localhost' IDENTIFIED BY 'escolha-uma-senha';"</pre>
Depois disso  <a href="http://sourceforge.net/project/showfiles.php?group_id=101066">baixe o script AutoMySQLBackup</a> no seu diret&oacute;rio de scripts, por exemplo, <strong>/usr/local/scripts</strong>
<pre lang="bash">$ mkdir -p /usr/local/scripts
$ cd /usr/local/scripts
$ wget -c http://ufpr.dl.sourceforge.net/sourceforge/automysqlbackup/automysqlbackup.sh.2.5</pre>
Edite o arquivo com seu editor preferido (ex: nano -w automysqlbackup.sh.2.5) e configure os par&acirc;metros. Fora os par&acirc;metros de acesso ao banco de dados (lembre-se de usar o usu&aacute;rio <em>backup</em> que foi criado no passo anterior), sugiro a altera&ccedil;&atilde;o destes par&acirc;metros:
<pre lang="text"># Mail setup
# What would you like to be mailed to you?
# - log   : send only log file
# - files : send log file and sql files as attachments (see docs)
# - stdout : will simply output the log to the screen if run manually.
# - quiet : Only send logs if an error occurs to the MAILADDR.
MAILCONTENT="log"

# Separate backup directory and file for each DB? (yes or no)
SEPDIR=yes

# Additionally keep a copy of the most recent backup in a seperate directory.
LATEST=yes</pre>
Coloque o script para rodar no cron diariamente.
<pre lang="bash">$ cd /etc/cron.daily
$ ln -s /usr/local/scripts/automysqlbackup.sh.2.5 automysqlbackup</pre>
<strong>Enviando os arquivos de backup para uma conta no Amazon S3</strong>

Para enviar o backup realizado para um conta no <a href="http://aws.amazon.com/s3">Amazon S3</a>, que &eacute; o web service de storage da Amazon, siga as instru&ccedil;&otilde;es abaixo que foram retiradas <a href="http://blog.eberly.org/2006/10/09/how-automate-your-backup-to-amazon-s3-using-s3sync/">deste link</a>.

Antes de mais nada, instale o ruby 1.8.4 ou mais novo e a biblioteca de ssl para o ruby.
<pre lang="bash">$ sudo apt-get install ruby libopenssl-ruby</pre>
Confirme a vers&atilde;o do ruby
<pre lang="bash">$ ruby -v
ruby 1.8.6 (2008-03-03 patchlevel 114) [i686-linux]</pre>
Agora vamos instalar o <a href="http://s3sync.net">s3sync</a> que &eacute; um script de sincroniza&ccedil;&atilde;o de diret&oacute;rios locais com diret&oacute;rios no S3.

V&aacute; para o diret&oacute;rio que voc&ecirc; deseja instalar o s3sync, como por exemplo <strong>/usr/local/scripts</strong>
<pre lang="bash">$ cd /usr/local/scripts</pre>
Fa&ccedil;a o download e descompacte:
<pre lang="bash">$ wget http://s3.amazonaws.com/ServEdge_pub/s3sync/s3sync.tar.gz
$ tar xvzf s3sync.tar.gz</pre>
Remova o arquivo compactado:
<pre lang="bash">$ rm s3sync.tar.gz</pre>
Crie um diret&oacute;rio para os certificados e baixe alguns:
<pre lang="bash">$ cd s3sync
$ mkdir certs
$ cd certs
$ wget http://mirbsd.mirsolutions.de/cvs.cgi/~checkout~/src/etc/ssl.certs.shar</pre>
rode o instalador dos certificados
<pre lang="bash">$ sh ssl.certs.shar</pre>
Pronto, s3sync instalado!

Vamos agora criar um script que pega os &uacute;ltimos arquivos de backup e envia para a sua conta do S3.

Crie o arquivo de script com o conte&uacute;do abaixo. Exemplo: <strong>/usr/local/scripts/automysqlbackup-upload-to-s3.sh</strong>
<pre lang="text">#!/bin/bash
cd /usr/local/scripts/s3sync
export AWS_ACCESS_KEY_ID=yourS3accesskey
export AWS_SECRET_ACCESS_KEY=yourS3secretkey
export SSL_CERT_DIR=/usr/local/scripts/s3sync/certs
ruby s3sync.rb -r --ssl --delete /backups/latest nomedobucket:backup/mysql</pre>
Observa&ccedil;&otilde;es:
<ul>
	<li>O comando <em>--delete</em> diz para o s3sync excluir os arquivos que existem no S3 mas n&atilde;o existem mais na pasta local.</li>
	<li>Para enviar somente os &uacute;ltimos backups (diret&oacute;rio <em>latest</em>), &eacute; necess&aacute;rio que o par&acirc;metro LATEST seja igual a <em>yes</em> no AutoMySQLBackup</li>
	<li>Aten&ccedil;&atilde;o para o nome do bucket, para os paths e principalmente para o path /backups/latest que deve conter o diret&oacute;rio que est&aacute; configurado no par&acirc;metro BACKUPDIR do AutoMySQLBackup concatenado com "/latest".</li>
</ul>
O &uacute;ltimo passo &eacute; configurar o AutoMySQLBackup para rodar o script de envio dos arquivos para o S3 logo ap&oacute;s cada backup.

Para isso altere o par&acirc;metro POSTBACKUP como o exemplo abaixo:
<pre lang="text"># Command run after backups (uncomment to use)
POSTBACKUP="/usr/local/scripts/automysqlbackup-upload-to-s3.sh"</pre>
<strong>Parab&eacute;ns, voc&ecirc; j&aacute; est&aacute; com um backup seguro e eficiente!</strong>

Abra&ccedil;os e at&eacute; a pr&oacute;xima.
