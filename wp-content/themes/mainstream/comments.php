<?php
// Do not delete these lines
	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Não carregue esta página diretamente. Obrigado!');

	if ( post_password_required() ) { ?>
		<p class="nocomments">Este artigo está protegido por senha. Entre com a senha para visualizar os comentários.</p>
	<?php
		return;
	}
?>

<!-- You can start editing here. -->

<div id="comments">

<?php if ( have_comments() ) : ?>

	<h2><?php comments_number('Sem Respostas', 'Uma Resposta', '% Respostas');?> para &#8220;<?php the_title(); ?>&#8221;</h2>

	<ol class="commentlist">
	<?php wp_list_comments('avatar_size=48&callback=custom_comment&type=comment'); ?>
	</ol>    

	<div class="navigation">
		<div class="alignleft"><?php previous_comments_link() ?></div>
		<div class="alignright"><?php next_comments_link() ?></div>
		<div class="fix"></div>
	</div>
	<br />
    
	<?php if ( $comments_by_type['pings'] ) : ?>
    <h2 id="pings"><?php _e('Trackbacks/Pingbacks',woothemes); ?></h2>
    <ol class="commentlist">
    <?php wp_list_comments('type=pings'); ?>
    </ol>
    <?php endif; ?>

    
 
<?php else : // this is displayed if there are no comments so far ?>

	<?php if ('open' == $post->comment_status) : ?>
		<!-- If comments are open, but there are no comments. -->

	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->
		<p class="nocomments">Comentários desabilitados</p>

	<?php endif; ?>

<?php endif; ?>

</div> <!-- end #comments_wrap -->

<?php if ('open' == $post->comment_status) : ?>

<div id="respond">

<h2><?php comment_form_title( 'Deixe seu Comentário', 'Deixe seu Comentário para %s' ); ?></h2>
<div class="cancel-comment-reply">
	<small><?php cancel_comment_reply_link(); ?></small>
</div>

<?php if ( get_option('comment_registration') && !$user_ID ) : ?>
<p>Você precisa estar <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php the_permalink(); ?>">logado</a> para deixar um comentário.</p>
<?php else : ?>

<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">

<?php if ( $user_ID ) : ?>

<p><?php _e('Registrado como',woothemes); ?> <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout" title="Sair desta conta">Sair &raquo;</a></p>

<?php else : ?>

<p><input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" size="22" tabindex="1" />
<label for="author"><small><?php _e('Nome',woothemes); ?> <?php if ($req) echo  __('(requerido)',woothemes); ?></small></label></p>

<p><input type="text" name="email" id="email" value="<?php echo $comment_author_email; ?>" size="22" tabindex="2" />
<label for="email"><small><?php _e('Email (não será publicado)',woothemes); ?> <?php if ($req) echo  __('(requerido)',woothemes); ?></small></label></p>

<p><input type="text" name="url" id="url" value="<?php echo $comment_author_url; ?>" size="22" tabindex="3" />
<label for="url"><small><?php _e('Website',woothemes); ?></small></label></p>

<?php endif; ?>

<!--<p><small><strong>XHTML:</strong> Você pode usar essas tags: <?php echo allowed_tags(); ?></small></p>-->

<p><textarea name="comment" id="comment" style="width:97%;" rows="10" tabindex="4"></textarea></p>

<p><input name="submit" type="submit" id="submit" tabindex="5" value="<?php _e(' Enviar Comentário ',woothemes); ?>" />
<input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" />
</p>
<?php comment_id_fields(); ?>
<?php do_action('comment_form', $post->ID); ?>

</form>

<?php endif; // If logged in ?>

<div class="fix"></div>
</div> <!-- end #respond -->

<?php endif; // if you delete this the sky will fall on your head ?>
