--- 
layout: post
status: publish
published: true
title: Como implementar o sistema anti-spam Inverse Captcha no WordPress
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 174
wordpress_url: http://rafael.adm.br/p/como-implementar-o-sistema-anti-spam-inverse-captcha-no-wordpress/
date: 2008-03-19 00:01:47 -03:00
categories: 
- Posts
tags: 
- "programa\xC3\xA7\xC3\xA3o"
- dicas
- blog
- wordpress
- anti-spam
- spam
- "c\xC3\xB3digo"
---
Amigo,

Implementei um sistema anti-spam neste blog e  <a href="http://blog.bielsystems.com.br/2008/03/16/inverse-captcha-no-blog-empresa/">no serviço Blog Empresa</a>, que é um sucesso!

O <a href="http://mergulhao.info/2007/11/6/inverse-captcha-como-nao-amolar-seus-visitantes">Mergulhão explica muito bem o conceito</a>.

Eu vou explicar a aplicação para o WordPress em apenas dois passos:

<strong>Primeiro Passo - alterar o html do formulário de comentários</strong>

Abra o arquivo <strong>comments.php</strong> do seu tema.

Troque a linha abaixo:
<pre lang="html">&lt;p&gt;&lt;textarea id="comment" tabindex="4" rows="10" cols="100" name="comment"&gt;&lt;/textarea&gt;&lt;/p&gt;</pre>
pelo código abaixo:
<pre lang="html">&lt;p&gt;
&lt;textarea name="comment-valendo" id="comment-valendo" cols="100" rows="10" tabindex="4"&gt;&lt;/textarea&gt;
&lt;div style="display:none"&gt;
Não preencha o campo abaixo.&lt;br /&gt;
&lt;textarea name="comment" id="comment" cols="100" rows="10" tabindex="4"&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;/p&gt;</pre>
<strong>Segundo Passo - alterar a programação de processamento do formulário</strong>

Abra o arquivo<strong> wp-comments-post.php</strong>.

Logo após a linha:
<pre lang="php">$comment_post_ID = (int) $_POST['comment_post_ID'];</pre>
Insira o seguinte código:
<pre lang="php">/* Inverser Captcha */
if(!empty($_POST['comment']))  {
$location = ( empty($_POST['redirect_to']) ? get_permalink($comment_post_ID) : $_POST['redirect_to'] );
$location = apply_filters('comment_post_redirect', $location, $comment);
wp_redirect($location);
exit;
}
else {
$_POST['comment'] = $_POST['comment-valendo'];
}
/* Fim do Inverse Captcha */</pre>
Pronto!

Espero que gostem da dica.

Abraços e até a próxima!
