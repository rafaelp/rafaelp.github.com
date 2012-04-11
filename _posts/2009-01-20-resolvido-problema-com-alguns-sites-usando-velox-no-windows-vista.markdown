--- 
layout: post
title: "[Resolvido] Problema com alguns sites usando Velox no Windows Vista"
wordpress_id: 272
wordpress_url: http://rafael.adm.br/?p=272
date: 2009-01-20 11:00:09 -02:00
---
Estava com um problema sério para colocar o Velox pra funcionar direito via conexão direta no Windows Vista Business na BielSystems. Depois de ler um bocado solucionei rodando a seguinte linha no command prompt como administrador:

<span style="color: #ff0000;">netsh interface ipv4 set subinterface "Velox" mtu=1300 store=persistent</span>

É isso!
