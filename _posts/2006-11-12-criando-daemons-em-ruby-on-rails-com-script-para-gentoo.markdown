---
layout: post
status: publish
published: true
title: Criando daemons em Ruby on Rails (com script para Gentoo)
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 104
wordpress_url: http://rafael.adm.br/p/criando-daemons-em-ruby-on-rails-com-script-para-gentoo/
date: 2006-11-12 13:29:32.000000000 -02:00
categories:
- Posts
tags:
- desenvolvimento
- programa&ccedil;&atilde;o
- rails
- ruby
- gentoo
---
<h4>ruby on rails+daemon gem+daemon plugin+capistrano+gentoo linux</h4>

Eu estava utilizando o RailsCron para envio de email em batch e segundo plano, por&eacute;m tive muitos problemas com este plugin. Ele n&atilde;o reiniciava bem, era necess&aacute;rio reinici&aacute;-lo manualmente toda vez que o servidor web fosse reiniciado. Isso era um grande problema!

Quando estava buscando uma solu&ccedil;&atilde;o, li que o <a href="http://kylemaxwell.typepad.com/everystudent/2006/09/railscron_depre.html">RailsCron est&aacute; depreciado</a> e que no lugar poder&iacute;amos uilizar o <a href="http://svn.kylemaxwell.com/rails_plugins/daemon_generator/trunk/README">Daemons Generator</a> com o <a href="http://gemjack.com/gems/daemons-1.0.1/index.html">Daemons Gem</a>.

Resolvi ent&atilde;o aproveitar meu trabalho e disponibilizar um passo-a-passo de instala&ccedil;ao e utiliza&ccedil;&atilde;o do daemons generator.

<strong>Primeiro Passo: Instala&ccedil;&atilde;o do gem e do plugin</strong>
[c]
sudo gem install daemons
cd /path/da/sua/aplicacao
./script/plugin install http://svn.kylemaxwell.com/rails_plugins/daemon_generator/trunk
mv vendor/plugins/trunk vendor/plugins/daemon_generator
[/c]

<strong>Segundo Passo: Cria&ccedil;&atilde;o de um daemon</strong>
Em meu caso utilizei um daemon para enviar e-mails pendente em s&eacute;rie a cada minuto.
[c]
./script/generate daemon email_queue
[/c]

Rodando a linha de comando acima, ser&atilde;o criados os seguintes arquivos:

<strong>script/daemons</strong> - este arquivo &eacute; criado apenas no primeiro daemon, ele server para iniciar e parar todos os daemons do projeto.
<strong>lib/daemons/email_queue.rb</strong> - este arquivo que ser&aacute; o daemon em si.
<strong>lib/daemons/email_queue_ctl</strong> - este script serve para iniciar e parar este daemon especificamente.
<strong>config/daemons.yml</strong> - Este arquivo tamb&eacute;m ser&aacute; gerado apenas na primeiraz vez, ele cont&eacute;m algumas configura&ccedil;&otilde;es do daemon generator.

<strong>Terceiro Passo: Programa&ccedil;&atilde;o do seu daemon</strong>
Voc&ecirc; precisa editar o arquivo do seu daemon para colocar a programa&ccedil;&atilde;o desejada. No meu caso editei o lib/daemons/email_queue.rb e coloquei o seguinte conte&uacute;do:



[ruby]
#!/usr/bin/env ruby

# You might want to change this
ENV["RAILS_ENV"] ||= "production"

require File.dirname(__FILE__) + "/../../config/environment"

$running = true;
Signal.trap("TERM") do 
  $running = false
end

while($running) do

  ActiveRecord::Base.logger < <  "#{Time.now} - DAEMON: Processing invite queue.\n"
  QueueInvite.find(:all, :conditions => ['sent_at is ? and send_at < = ?',nil,Time.now.utc]).each { |e| e.deliver }

  sleep 60
end
[/ruby]

As linhas que ser&atilde;o executadas pelo daemon ficam dentro do while($running).

Aten&ccedil;&atilde;o: o daemon fica rodando direto em um loop infinito ent&atilde;o cuidado com o que voc&ecirc; coloca a&iacute; dentro!

No meu caso a primeira linha server para criar uma entrada no log dizendo a data e hora que a rotina foi executada a segunda linha &eacute; a rotina em si e a &uacute;ltima &eacute; um sleep que far&aacute; com que a rotina s&oacute; seja executada a cada minuto.

N&atilde;o vou explicar o QueueInvite, por que j&aacute; faz parte da minha aplica&ccedil;&atilde;o, mas resumidamente a cada 60 segundos este daemon busca no banco de dados os convites pendentes e manda envi&aacute;-los pelo m&eacute;todo <span><em>deliver</em>.

<strong>Quarto Passo: Atualiza&ccedil;&atilde;o da receita do Capistrano (se aplic&aacute;vel)</strong>
Se voc&ecirc; usa o <a href="http://manuals.rubyonrails.com/read/book/17">capistrano</a> para automatizar o processo de <span class="tooltip" title="atualiza&ccedil;&atilde;o do ambiente de desenvolvimento para o de produ&ccedil;&atilde;o, ou seja, colocar o sistema novo no ar">deploy</span> de sua aplica&ccedil;&atilde;o (e deveria usar!), &eacute; necess&aacute;rio alterar o arquivo de receita para ele inciar e parar nosso daemon a cada deploy.

Para tal, coloque o seguinte c&oacute;digo no arquivo <strong>config/deploy.rb</strong>

[ruby]
desc "Stop daemons before deploying"
task :before_deploy do
  run "#{current_path}/script/daemons stop"
end

desc "Start daemons after deploying"
task :after_deploy do
  run "#{current_path}/script/daemons start"
end
[/ruby]
Aten&ccedil;&atilde;o: Verifique antes se as tarefas <em>before_deploy</em> e <em>after_deploy</em> j&aacute; existem no seu arquivo. Caso existam, copie apenas o conte&uacute;do da terefa.

<strong>Quinto Passo: Criar um daemon do sistema operacional</strong>
A princ&iacute;pio tudo est&aacute; funcionando, mas e quando reiniciarmos o servidor? Bem o daemon tem que voltar a rodar! Eu utilizo o Gentoo Linux e disponibilizei aqui o script que eu criei para cuidar deste problema.

script/gentoo_daemons
[c]
#!/sbin/runscript


# Gentoo users: add this script to 'default' run level.
# ==================================================
#
# rails_daemons         This shell script takes care of starting and stopping
#                       the daemons plugin of one  rails project.
#
# Copyright (c) by Rafael Lima (http://rafael.adm.br)

project_name="Your project name"
project_path="/path/of/your/project"

depend() {
        need localmount cron
}

checkconfig() {
        if [ ! -d ${project_path} ] ; then
                eerror "The project directory does not exists! Please, check your configuration."
        fi
}

start() {
        checkconfig || return 1
        ebegin "Starting ${project_name} daemons"
        ${project_path}/script/daemons start
        eend $?
}

stop () {
        ebegin "Stopping ${project_name} daemons"
        ${project_path}/script/daemons stop
        eend $?
}
[/c]

&Eacute; isso pessoal, espero que este artigo seja &uacute;til para muita gente! Em caso de d&uacute;vidas sintam-se a vontade para deixar um coment&aacute;rio!

Abra&ccedil;os.
