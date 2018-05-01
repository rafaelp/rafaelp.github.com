---
title: Como implementar o sistema anti-spam Inverse Captcha no WordPress
date: 2008-03-19 03:01:47 Z
categories:
- Posts
tags:
- programa&ccedil;&atilde;o
- dicas
- blog
- wordpress
- anti-spam
- spam
- c&oacute;digo
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 174
wordpress_url: http://rafael.adm.br/p/como-implementar-o-sistema-anti-spam-inverse-captcha-no-wordpress/
---

Amigo,

Implementei um sistema anti-spam neste blog e  <a href="http://blog.bielsystems.com.br/2008/03/16/inverse-captcha-no-blog-empresa/">no servi&ccedil;o Blog Empresa</a>, que &eacute; um sucesso!

O <a href="http://mergulhao.info/2007/11/6/inverse-captcha-como-nao-amolar-seus-visitantes">Mergulh&atilde;o explica muito bem o conceito</a>.

Eu vou explicar a aplica&ccedil;&atilde;o para o WordPress em apenas dois passos:

<strong>Primeiro Passo - alterar o html do formul&aacute;rio de coment&aacute;rios</strong>

Abra o arquivo <strong>comments.php</strong> do seu tema.

Troque a linha abaixo:
<pre lang="html"><p><textarea id="comment" tabindex="4" rows="10" cols="100" name="comment"></textarea></p></pre>
pelo c&oacute;digo abaixo:
<pre lang="html"><p>
<textarea name="comment-valendo" id="comment-valendo" cols="100" rows="10" tabindex="4"></textarea>
<div style="display:none">
N&atilde;o preencha o campo abaixo.<br />
<textarea name="comment" id="comment" cols="100" rows="10" tabindex="4"></textarea>
</div>
</p></pre>
<strong>Segundo Passo - alterar a programa&ccedil;&atilde;o de processamento do formul&aacute;rio</strong>

Abra o arquivo<strong> wp-comments-post.php</strong>.

Logo ap&oacute;s a linha:
<pre lang="php">$comment_post_ID = (int) $_POST['comment_post_ID'];</pre>
Insira o seguinte c&oacute;digo:
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

Abra&ccedil;os e at&eacute; a pr&oacute;xima!
