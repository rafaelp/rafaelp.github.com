---
layout: post
status: publish
published: true
title: Gems DBDesigner Generators e Postgresql Migrations
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 250
wordpress_url: http://rafael.adm.br/?p=250
date: 2008-09-20 16:03:42.000000000 -03:00
categories:
- Posts
tags:
- rails
- ruby
- gem
- rubygems
- postgresql
- migration
- dbdesigner
- database
---
Publiquei duas gems que escrevi para a aplica&ccedil;&atilde;o que estou desenvolvendo na <a href="http://myfreecomm.com.br">Myfreecomm</a>.

<strong>DBDesigner Generators</strong>
Esta gem incui o generator <strong>dbdesigner_migration</strong> que l&ecirc; o arquivo xml gerado pelo DBDesigner 4 e gera a migra&ccedil;&atilde;o.
Mais informa&ccedil;&otilde;es: <a href="http://github.com/rafaelp/dbdesigner_generators">http://github.com/rafaelp/dbdesigner_generators</a>

Exemplo de uso:
<pre lang="bash">$ ruby script/generate dbdesigner_migration [MigrationName] [only|except] [table1] [table2] [table3]</pre>

Instala&ccedil;&atilde;o:

<pre lang="bash">$ sudo gem install rafaelp-dbdesigner_generators --source=http://gems.github.com</pre>

<strong>Postgresql Migrations</strong>
Esta gem adiciona suporte &agrave; foreign key do PostgreSQL nas migra&ccedil;&otilde;es.
Mais informa&ccedil;&otilde;es: <a href="http://github.com/rafaelp/postgresql_migrations">http://github.com/rafaelp/postgresql_migrations</a>
Exemplo de uso:
<pre lang="ruby">class UserBelongsToAccount < ActiveRecord::Migration
  def self.up
    add_foreign_key :users, :account_id, :accounts, :id
  end

  def self.down
    remove_foreign_key :users, :account_id
  end
end</pre>

Instala&ccedil;&atilde;o:

</pre><pre lang="bash">$ sudo gem install rafaelp-postgresql_migrations --source=http://gems.github.com</pre>

Abra&ccedil;os e at&eacute; a pr&oacute;xima!
