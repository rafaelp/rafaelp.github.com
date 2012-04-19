--- 
layout: post
status: publish
published: true
title: Como converter seus e-mail do Thunderbird para o Windows Mail (Vista)
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 120
wordpress_url: http://rafael.adm.br/p/como-converter-seus-e-mail-do-thunderbird-para-o-windows-mail-vista/
date: 2007-04-29 13:03:01 -03:00
categories: 
- Posts
tags: 
- email
- how-to
- windows
- mail
- thunderbird
---
Meu pai comprou um novo computador com o Windows Vista. Antes ele tinha o Windows XP rodando o Firefox e Thunderbird como eu mesmo havia sugerido. Agora, como o Vista j&aacute; tem tudo arrumadinho e bonitinho ele resolveu usar o Intenet Explorer 7 e o Windows Mail (antigo Outlook Express).

O utilit&aacute;rio de importa&ccedil;&atilde;o do Windows Mail s&oacute; importa mensagens de programas da pr&oacute;pria Microsoft, por isso que na minha opini&atilde;o a Microsoft &eacute; BURRA. Ela n&atilde;o facilita o trabalho de quem est&aacute; querendo utilizar os seus programas.

Bem, ajudei meu pai na migra&ccedil;&atilde;o das mensagens do Thunderbird para o Windows Mail e resolvi colocar aqui um passo-a-passo simples para poupar algumas horas de trabalho do pessoal que vai passar por isso.

No meu caso t&iacute;nhamos a MAQ1 que era o computador antigo com Windows XP e o Thunderbird e a MAQ2 com o Windows Vista e o Windows Mail.

<ol>
	<li><strong>Preparando o Thunderbird na MAQ1</strong></li>
	<ul>
		<li>Baixe todas as mensagens do servidor POP</li>
		<li>Condense cada uma das pastas que possuem mensagens, este processo &eacute; obrigat&oacute;rio que se n&atilde;o for por isso, todas as mensagens que j&aacute; passaram por esta pasta ir&atilde;o aparecer duplicadas no Windows Mail. Para fazer isso clique com o bot&atilde;o direito do mouse no nome da pasta e selecione a op&ccedil;&atilde;o "Condensar esta pasta"</li>
		<li>Copie o diret&oacute;rio Mail da MAQ1 para a pasta Emails-Thunderbird dentro de pastas compartilhadas na MAQ2. O diret&oacute;rio Mail fica em C:\Documents and Settings\<em>[Usuario]</em>\Dados de aplicativos\Thunderbird\Profiles\<em>[CodigoDoProfile]</em>\Mail onde <em>[Usuario]</em> &eacute; o nome do usu&aacute;rio no windows e <em>[CodigodoProfile]</em> &eacute; o c&oacute;digo que o Thunderbird atribuiu para o seu profile (normalmente existe uma pasta s&oacute; dentro de Profiles).</li>
	</ul>
	<li><strong>Convertendo os e-mail na MAQ2</strong></li>
	<ul>
		<li>Crie uma nova pasta dentro de pastas compartilhadas chamada de Emails-Convertidos. Neste momento voc&ecirc; ter&aacute; dentro de pastas compartilhadas as pastas Emails-Thunderbird com os e-mail copiados da MAQ1 e Emails-Convertidos vazia.</li>
		<li>Baixe o programa gratuito <a href="http://www.broobles.com/imapsize/">IMPASize</a></li>
		<li>Rode o programa IMAPSize. Ao entrar no programa ele perguntar&aacute; <em>"You don't have any accounts specified. Would you like to add an account?". </em>Clique em <em>NO</em>
. Voc&ecirc; n&atilde;o precisa criar uma cont para converter e-mails.</li>
		<li>V&aacute; no menu <em>tools</em> depois na op&ccedil;&atilde;o <em>mbox2eml</em></li>
		<li>Clique em <em>Select mbox files to convert</em></li>
		<li>Escolha a op&ccedil;&atilde;o <em>All files (*.*)</em> em <em>Files of type:</em> e selecione todos os arquivos sem extens&atilde;o dentro da pasta Emails-Thunderbird e suas subpastas</li>
		<li>Ignore a op&ccedil;&atilde;o "Dots in mbox files..."</li>
		<li>Depois clique sobre o ...para selecionar a pasta de destino. Seleciona a pasta Emails-Convertidos. Aten&ccedil;&atilde;o: N&atilde;o converta diretamente para a pasta de mensagens do Window Mail por que ele n&atilde;o reconhecer&aacute;, eu tentei fazer isso para ganhar tempo e me dei mal.</li>
		<li>Clique em Convert</li>
	</ul>
	<li><strong>Importando as mensagens no Windows Mail na MAQ2</strong></li>
	<ul>
		<li>Neste momento a pasta Emails-Convertidos est&aacute; repleta de sub-pastas e arquivos de e-mail da Microsoft (.eml) Precisamos import&aacute;-los para o Windows Mail.</li>
		<li>Abra o Windows Mail.</li>
		<li>V&aacute; no menu <em>File</em>, op&ccedil;&atilde;o <em>Import/Messages</em></li>
		<li>Selecione a op&ccedil;&atilde;o Windows Mail 7 e clique em <em>Next</em>. A op&ccedil;&atilde;o mais &oacute;bvia seria Microsoft Outlook Express 6, mas ele n&atilde;o reconhece as mensagens desta maneira.</li>
		<li>Clique em <em>Browse</em>, selecione a pasta Emails-Convertidos e clique em <em>Next</em>.</li>
		<li>Deixe selecionada a op&ccedil;&atilde;o <em>All Folders</em> e clique em <em>Next</em></li>
		<li>Clique em Finish.</li>
		<li>Pronto, as suas mensagens aparecer&atilde;o em Imported Folders dentro de Local Folders</li>
	</ul>
</ol>

<strong>Dificuldades encontradas:</strong>

A rede do Windows Vista veio extremamente lenta, depois de <a href="http://www.google.com/search?q=windows+vista+slow+network&ie=utf-8&oe=utf-8&rls=org.mozilla:pt-BR:official&client=firefox-a">algumas buscas no Google</a> fizemos duas coisas que resolveram o problema.

<strong>1. Desabilitar o Tuning Autom&aacute;tico do Vista.</strong>
Rodar o seguinte comando no terminal (como administrador):
<em>netsh interface tcp set global autotuning=disabled</em>

<strong>2. Desabilitar o Remote Differential Compression</strong>
V&aacute; em Control Panel > Programs > Programs and Features > Turn Windows Feaures on or off  e desmaque a op&ccedil;&atilde;o Remote Differential Compression
