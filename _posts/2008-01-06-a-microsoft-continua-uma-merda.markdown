--- 
layout: post
title: A Microsoft continua uma merda
wordpress_id: 152
wordpress_url: http://rafael.adm.br/p/a-microsoft-continua-uma-merda-eu-odeio-a-microsoft/
date: 2008-01-06 23:09:36 -02:00
---
A Microsoft ferrou com o meu domingo, o que era pra ser fácil e rápido virou um inferno.

Eu ultimamente estava gostando mais da Microsoft, estou desenvolvendo em C# e reconheço que a Microsoft é sensacional, mas ela continua sendo uma merda.

<strong>Quanto mais uso Microsoft, mais gosto de Open-Source. Quanto mais uso Windows, mais gosto do Linux</strong>.
Agora vou descrever os problemas.

******************

<span style="font-weight: bold">Manhã/Tarde - Instalação do Microsoft Office  Professional 2007 MLK num Toshiba com Windows Vista.
</span>

Resumo: Tentativa de instalação do Office 2007 Pro comprada junto com o computador sem sucesso. Dois atendentes da Microsoft falaram besteira e deram informações incorretas, inviabilizando a instalação. Resultado: Tenho que esperar o CD de reposição, que é cobrado e demora 28 dias para ser entregue. E confesso que não sei se vai resolver.
Um conhecido comprou um laptop Toshiba com o WIndows Vista. Também comprou a licença do Office Professional 2007 OEM sem mídia. O MLK no nome acima corresponde a Medialess Lecense Kits que significa que a licença vem sem o CD de instalação.

Ele me chamou por que estava frustado pois não conseguia instalar o Office. O técnico dele também não conseguiu. Identifiquei que o problema é que o computador não veio com o Office Pro OEM instalado, mas sim com o Home and Students OEM e por isso que ele não conseguia usar a licença. Este foi apenas o primeiro obstáculo, ele comprou o computador e a licença no dia 15 de dezembro e desde este dia estou tentando resolver o problema, sem sucesso.

Liguei para a Microsoft e o atendente falou que eu deveria baixar a versão Trial do Office 2007 no site, desinstalar o Home and Students e depois instalar o Trial, usando a licença comprada a invés da licença informada no momento do download. Primeira informação errada.

<span style="font-weight: bold">Primeira lição: Não acredite nos atendentes do 0800 da Microsoft, eles não sabem nada.</span>

Baixei os 400MB do Trial do Office Pro 2007. Removi o Home and Students e tentei instalar o Trial com a licença comprada. Não funcionou, a licença não foi aceita. O procedimento informado pelo atendente não funcionava.

Tive outros problemas. Cada vez que você solicita um download, aparece na tela uma nova licença. Na segunda ligação o atendente falou que eu podia usar qualquer licença com qualquer download, mas ele também estava errado.

<span style="font-weight: bold">Segunda lição: Cada arquivos disponibilizado para download só funciona com a licença informada na tela que tem o link para download, anote todas as licenças e identifique-as claramente.</span>

Bem, depois disso tudo eu estava sem nenhum Office instalado e não conseguia instalar a versão comprada. Liguei novamente para o suporte da Microsoft. O atendente me informou que não havia jeito e que a única maneira seria solicitar os CDS.
Entrei no site e solicitei os CDs, eles demoram 1 mês para chegar. Depois de ter solicitado apareceu para mim dois links, que acredito que poderiam ser acessados até antes de da solicitação do CD por algum lugar, por isso acredito que a informação de que não havia jeito também estava errada.

Até por que não faz sentido pra mim comprar uma licença que é vendida no modelo MKT e só ter como instalá-la solicitando o CD. Se fosse assim por que não vender TODAS as licenças já com o CD!?

Um link dizia "Clique aqui se você tem o Home and Students instalado". Este link remetia para outro download de uns 300MB. Acredito que bastaria executar este arquivo que eu iria conseguir utilizar a licença comprada. Parece fácil, mas nenhum dos dois atendentes disse que isso era possível.

O outro link seria para fazer o download dos arquivos de instalação iguais aos que viriam no CD. Resolvi baixar então para tentar finalmente resolver o problema. Eram dois arquivos um de 400MB e outro de 300MB. Chegando a 37% de um e 52% de outro o Getright (programa que usei para o download), parou. Voltei no site da Microsoft e tentei acessar o link novamente e recebi a seguinte mensagem: "Houveram 7 tentativas de download e por isso bloqueamos o arquivo. Provavelmente sua conexão não é capaz de baixar os arquivos. Neste caso aguarde o CD chegar."

<strong><span style="font-weight: bold">Terceira lição: A Microsoft é escrota. </span>Um leigo nunca conseguiria instalar o Office Pro 2007 original nesta ocasião.</strong>

Tenho a impressão que instalar um pirata é infinitamente mais fácil que instalar o original.

******************

<span style="font-weight: bold">Tarde/Noite - Instalação do Microsoft SQL Server 2008 (edição November CTP) no Windows 2003 Server</span>

Resumo: Tentativa de instalação do MS SQL Server Katmai no 2003 Server com Domain Controller. Não foi possível, instalar nem desinstalar. A instalação ficou quebrada com um banco de lixo no registro e500MB de arquivos que não podem ser removidos pelas opções de desinstalação padrões do Painel de controle.
Depois de baixar todos os pré-requisitos, Service Pack 1 e 2, .NET Framework, MSXML, etc etc tentei instalar o SQL Server 2008. No final dos 8 componentes instalados 2 tiveram sucesso e 8 falharam.
Vou ser sincero que nem lembro tudo que fiz, eu sei que rodei o instalador diversas vezes. No primeiro momento ele instalou a instância padrão MSSQLSERVER, que ficou quebrada por causa das falhas e que não era possível ser removida.

Só consegui quando eu marretei o registro e deletei a instância. Depois disso consegui prosseguir e iniciar uma nova instalação com a instância padrão.
Depois de horas buscando na Internet deduzi que não poderia ter usado o Usuário Local para iniciar o banco de dados pois o Windows 2003 Server é um controlador de domínio (Domain Controller). Comecei a usar o usuário Administrador na configuração no momento da instalação.

Não resolveu. Depois de muitas resolvemos instalar o Microsoft SQL Server 2005 e começamos a tentar desinstalar por completo a versão 2008. Também sem sucesso. Sobraram 500MB de arquivos, uma opção "Microsoft SQL Server 2008" no "Instalar e remover programas" e um bando de dlls e lixo no registro.

Ao tentar desinstalar na opção que sobrou, ele abre o desinstalador, mas não reconhece nenhuma instância do banco de dados e nenhum componente instalado, ou seja, não dá pra fazer nada.

Não tenho solução para o problema a?ém do famoso "formata tudo".

<strong>Quarta lição: A Microsoft ainda é muito ruim, permanece pelo império que tem.</strong>
******************
