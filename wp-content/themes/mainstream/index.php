<?php get_header(); ?>

		<div id="introduction">
		
			<div id="about">
				
				<h2><?php _e('Bem-Vindo',woothemes); ?></h2>
				
				<p>
					<?php if ( get_option( 'woo_profile' ) <> "" ) { ?><img src="<?php echo get_option( 'woo_profile' ); ?>" alt="<?php bloginfo('title'); ?>" /><?php } ?>
					<?php if ( get_option( 'woo_about' ) <> "" ) { echo get_option( 'woo_about' ); } else { ?><?php _e('You need to add content in the "About You" field on the Mainstream Options tab in the WP backend.',woothemes); ?><?php } ?>
				</p>
				
				<div class="fold"></div>
			
			</div><!-- /#about -->
			
			<div id="connect" class="connect">
			
				<ul>
					<li><a href="<?php if ( get_option('woo_feedburner_url') <> "" ) { echo get_option('woo_feedburner_url'); } else { echo get_bloginfo_rss('rss2_url'); } ?>" title="RSS"><img src="<?php bloginfo('template_directory'); ?>/images/ico-rss.png" alt="RSS icon" /><span><?php _e('ASSINE MEU BLOG:',woothemes); ?></span><?php _e('Feed dos Posts',woothemes); ?></a></li>
					<li><a href="http://feeds.feedburner.com/rafael_lima_podcast" title="Podcast"><img src="<?php bloginfo('template_directory'); ?>/images/ico-podcast.png" alt="Podcast icon" /><span><?php _e('ASSINE MEU PODCAST:',woothemes); ?></span>Voltando pra casa</a></li>
					<?php if ( get_option( 'woo_twitter' ) <> "" ) { ?><li><a href="http://twitter.com/<?php echo get_option( 'woo_twitter' ); ?>" title="Twitter"><img src="<?php bloginfo('template_directory'); ?>/images/ico-twitter.png" alt="Twitter icon" /><span><?php _e('SIGA-ME NO TWITTER:',woothemes); ?></span>@<?php echo get_option( 'woo_twitter' ); ?></a></li><?php } ?>
					<?php if ( get_option( 'woo_facebook' ) <> "" ) { ?><li><a href="http://facebook.com/<?php echo get_option( 'woo_facebook' ); ?>" title="Facebook"><img src="<?php bloginfo('template_directory'); ?>/images/ico-facebook.png" alt="Facebook icon" /><span><?php _e('SEJA MEU FAN NO FACEBOOK:',woothemes); ?></span><?php echo get_option( 'woo_facebook' ); ?></a></li><?php } ?>
					<li><a href="http://github.com/rafaelp" title="Github"><img src="<?php bloginfo('template_directory'); ?>/images/ico-github.png" alt="Github icon" /><span><?php _e('VEJA MEUS PROJETOS NO GITHUB:',woothemes); ?></span>rafaelp</a></li>
				</ul>
			
			</div><!-- /#connect -->
			
			<div class="clear"></div>
		
		</div><!-- /#introduction -->
		
		<div id="content">
		
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
				<div class="post">
				
					<p class="meta"><span class="date"><?php the_time('d F Y'); ?></span> ~ <span class="comments"><?php comments_popup_link(__('Deixe seu comentário &#187;',woothemes), __('1 Comentário, deixe o seu &#187;',woothemes), __('% Comentários, deixe o seu &#187;',woothemes) ); ?></span></p>
			
					<h2 class="title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
					
					<div class="categories">
						<?php the_category(' '); ?>
					</div><!-- /.categories -->
					
					<div class="entry">
						
						<?php woo_get_image('image',get_option('woo_thumb_width'),get_option('woo_thumb_height'),'thumb alignleft'); ?>
						
							<?php
							if ( get_option('woo_content_home') == "true" ) 
								the_content('[...]'); 
							else 
								the_excerpt(); 
							?>
						
					</div><!-- /.entry -->
					
					<div class="tags">
						
						<?php the_tags('Tags: ', ', ', ''); ?> 
					
					</div><!-- /.tags -->
			
				</div><!-- /.post -->
			
			<?php endwhile; else: ?>
					
				<div class="post">
					
					<h2 class="title">Error 404</h2>
						
					<div class="entry">
						
						<p><?php _e('The page you are looking for does not exist. Please check the URL for typing errors, or',woothemes); ?> <a href="<?php bloginfo('home'); ?>" title="Go Home"><?php _e('head back home',woothemes); ?></a> <?php _e('and start over',woothemes); ?></p>
						
					</div><!-- /.entry -->
						
				</div><!-- /.post -->
				
			<?php endif; ?>
			
			<div class="pagenavi">
				<?php if (function_exists('wp_pagenavi')) { ?><?php wp_pagenavi(); ?><?php } ?>
			</div>
		
		</div><!-- /#content -->
		
		<?php get_sidebar(); ?>
		
<?php get_footer(); ?>