--- 
layout: post
title: Gems DBDesigner Generators e Postgresql Migrations
wordpress_id: 250
wordpress_url: http://rafael.adm.br/?p=250
date: 2008-09-20 16:03:42 -03:00
---
Publiquei duas gems que escrevi para a aplicação que estou desenvolvendo na <a href="http://myfreecomm.com.br">Myfreecomm</a>.

<strong>DBDesigner Generators</strong>
Esta gem incui o generator <strong>dbdesigner_migration</strong> que lê o arquivo xml gerado pelo DBDesigner 4 e gera a migração.
Mais informações: <a href="http://github.com/rafaelp/dbdesigner_generators">http://github.com/rafaelp/dbdesigner_generators</a>

Exemplo de uso:
<pre lang="bash">$ ruby script/generate dbdesigner_migration [MigrationName] [only|except] [table1] [table2] [table3]</pre>

Instalação:

<pre lang="bash">$ sudo gem install rafaelp-dbdesigner_generators --source=http://gems.github.com</pre>

<strong>Postgresql Migrations</strong>
Esta gem adiciona suporte à foreign key do PostgreSQL nas migrações.
Mais informações: <a href="http://github.com/rafaelp/postgresql_migrations">http://github.com/rafaelp/postgresql_migrations</a>
Exemplo de uso:
<pre lang="ruby">class UserBelongsToAccount < ActiveRecord::Migration
  def self.up
    add_foreign_key :users, :account_id, :accounts, :id
  end

  def self.down
    remove_foreign_key :users, :account_id
  end
end</pre>

Instalação:

</pre><pre lang="bash">$ sudo gem install rafaelp-postgresql_migrations --source=http://gems.github.com</pre>

Abraços e até a próxima!
