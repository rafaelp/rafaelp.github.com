--- 
layout: post
title: "Arquitetura de servidores para aplica\xC3\xA7\xC3\xB5es Rails"
wordpress_id: 156
wordpress_url: http://rafael.adm.br/p/arquitetura-de-servidores-para-aplicacoes-rails/
date: 2008-01-11 14:01:07 -02:00
---
Eu estudei ontem várias opções de arquitetura para aplicações web, focando um pouco em Rails. Eu queria chegar há uma opção econômica que tivesse alta performance, alta disponibilidade e fosse altamente escalável.

Encontrei este excelente slide entitulado  <a href="http://www.slideshare.net/tim.lossen.de/how-to-build-a-stateoftheart-rails-cluster">How to build a state-of-art rails cluster</a>.

Tendo em mãos as informações do slide, entrei no <a href="https://www.cari.net">site do Datacenter Cari.net</a> e montrei uma cesta de compras com 5 servidores sendo 2 load balancers (web), 2 de aplicação (app) e um de banco de dados (db).

Não saiu caro, fiquei empolgado com a solução. Se eu não me engano algo em torno de $550/mês e um setup de $1.000.

Depois disso continuei lendo sobre outras opções e cai no <a href="http://www.amazon.com/b/ref=sc_fe_l_2?ie=UTF8&node=201590011&no=3435361&me=A36L942TSJ2AJA">Amazon Elastic Compute Cloud</a> ou Amazon EC2 ou só EC2. Eles disponibilizam máquinas virtuais dedicadas por $0,10 por máquina por minuto + uma micharia por consumo de banda, ou seja, você pode ter o equivalente a um processador 1.7gh com 1.75GB RAM 160GB RAM e 250Mb/s de Banda por apenas $72/mês.

Com a grana da primeira opção é possível pagar tranqüilamente 7 máquinas virtuais na Amazon e sem custo de setup.

Encontrei o projeto <a href="http://ec2onrails.rubyforge.org/">EC on Rails</a> que é uma imagem para o EC2 que já vem com tudo instalado para você hospedar um site em Rails. Já vem inclusive com os gems e rake tasks que facilitam o deploy e gerenciamento da máquina virtual.

Fique mais empolgado ainda, mas como nem tudo é mágica, não demorou muito para eu encontrar as restrições. O EC2 não possui IP fixo nem storage persistente. Isso quer dizer que toda vez que a máquina virtual for reiniciada ela terá um novo IP e o disco estará "vazio", ou seja, somente com a imagem, sem nenhum arquivo criado durante a utilização anterior.

O problema do IP fixo pode ser contornado com o <a href="http://weoceo.weogeo.com/">WeoCEO</a>, sistema de load balancing e escalonamento para EC2. Não deixe de ver o <a href="http://weoceo.weogeo.com/video/">vídeo</a>. Este custa $0,05 por máquina por minuto de uso.

A questão da falta de storage permanente a princípio pode ser contornada com o <a href="http://www.amazon.com/gp/browse.html?node=16427261">S3</a>, web service da Amazon para storage.  <a href="http://www.slideshare.net/martin.rehfeld/s3-and-ec2-rails-scenarios">Este slide</a> mostra algumas opções para o banco de dados, que é o problema maior. Todas elas ainda são experimentais. Por enquanto a solução é copiar o banco de dados todo para o S# de tempos em tempos, mas usando esta opção, em caso de falhas, você perde tudo que foi feito do momento do último backup até o momento da falha, o que é inaceitável para sistemas em produção.

Resumindo, o EC2 é uma grande promessa para arquiteturas de aplicações web em produção, mas por enquanto é aconselhável utilizar apenas para ambientes de qualidade (staging).

A princípio o uso do EC2 deve ser realizado apena para processamento, ou seja, recebe dados, processa e joga pra fora. Caso você precise hospedar uma solução database-driven, procure os servidores dedicados.

Este foi um resumo do que estudei ontem, espero que possa ser útil de alguma forma.
