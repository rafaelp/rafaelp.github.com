<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head profile="http://gmpg.org/xfn/11">

	<title>
	<?php if ( is_home() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php bloginfo('description'); ?><?php } ?>
	<?php if ( is_search() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php _e('Search Results',woothemes); ?><?php } ?>
	<?php if ( is_author() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php _e('Author Archives',woothemes); ?><?php } ?>
	<?php if ( is_single() ) { ?><?php wp_title(''); ?>&nbsp;|&nbsp;<?php bloginfo('name'); ?><?php } ?>
	<?php if ( is_page() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php wp_title(''); ?><?php } ?>
	<?php if ( is_category() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php _e('Archive',woothemes); ?>&nbsp;|&nbsp;<?php single_cat_title(); ?><?php } ?>
	<?php if ( is_month() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php _e('Archive',woothemes); ?>&nbsp;|&nbsp;<?php the_time('F'); ?><?php } ?>
	<?php if (function_exists('is_tag')) { if ( is_tag() ) { ?><?php bloginfo('name'); ?>&nbsp;|&nbsp;<?php _e('Tag Archive',woothemes); ?>&nbsp;|&nbsp;<?php  single_tag_title("", true); } } ?>
	</title>

    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<meta http-equiv="X-XRDS-Location" content="http://rafael.lima.myopenid.com/xrds" />

	<meta name="author" content="Rafael de Lima Paula" />
	<meta name="copyright" content="©2010 Rafael Lima" />
	<meta name="keywords" content="rafael lima, rafael, lima, consultoria, web, marketing, web marketing, desenvolvimento, web2.0, tecnologia, negócios, programação, design, usabilidade, dicas, css, ajax, inovação" />
	<meta name="description" content="Artigos, dicas e comentários de Rafael Lima sobre aplicações web, desenvolvimento para internet, mercado corporativo entre outros assuntos." />
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats -->

	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory'); ?>/css/reset.css" />
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" media="screen" />
    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php if ( get_option('woo_feedburner_url') <> "" ) { echo get_option('woo_feedburner_url'); } else { echo get_bloginfo_rss('rss2_url'); } ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<link rel="openid.server" href="http://www.myopenid.com/server" />
	<link rel="openid.delegate" href="http://rafael.lima.myopenid.com/" />
       
    <!--[if IE 6]>
		<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/includes/js/pngfix.js"></script>
		<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/includes/js/menu.js"></script>
		<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory'); ?>/css/ie6.css" />
    <![endif]-->	
	
	<!--[if IE 7]>
		<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory'); ?>/css/ie7.css" />
	<![endif]-->
       
    <?php if ( is_single() ) wp_enqueue_script( 'comment-reply' ); ?>
    <?php wp_head(); ?>

</head>

<?php if ( is_home() ) { ?><body class="body-home"><?php } ?>
<?php if ( is_search() ) { ?><body class="body-search"><?php } ?>
<?php if ( is_author() ) { ?><body class="body-author"><?php } ?>
<?php if ( is_single() ) { ?><body class="body-single"><?php } ?>
<?php if ( is_page() ) { ?><body class="body-page"><?php } ?>
<?php if ( is_category() ) { ?><body class="body-category"><?php } ?>
<?php if ( is_month() ) { ?><body class="body-month"><?php } ?>

<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/includes/js/follow-me-referer.js"></script>

<div id="container">
       
	<div id="brasil"><img src="<?php bloginfo('stylesheet_directory'); ?>/images/brasil.gif" alt="Brasil" title="Eu simplesmente gosto do Brasil" width="30" height="30" /></div>
	<div id="header">

		<h1><a href="<?php echo get_settings('home'); ?>/"><?php bloginfo('name'); ?></a></h1>
		<h2>
			<a href="/tag/empreendedorismo" title="Artigos relacionados a: Empreendedorismo">Empreendedorismo</a>,
			<a href="/tag/web" title="Artigos relacionados a: Web">Web</a>,
			<a href="/tag/agile" title="Artigos relacionados a: Agile">Agile</a>,
			<a href="/tag/tecnologia" title="Artigos relacionados a: Tecnologia">Tecnologia</a>,
			<a href="/tag/desenvolvimento" title="Artigos relacionados a: Desenvolvimento">Desenvolvimento</a>,
			<a href="/tag/negócios" title="Artigos relacionados a: Negócios">Negócios</a>,
			<a href="/tag/marketing" title="Artigos relacionados a: Marketing">Marketing</a>,
			<a href="/tag/aplicacao-web" title="Artigos relacionados a: Aplicação Web">Aplicação Web</a>,
			<a href="/tag/rails" title="Artigos relacionados a: Rails">Ruby on Rails</a>.
			<?php // bloginfo('description'); ?>
		</h2>
<?php /*		
		<div id="logo">
			<h1><?php bloginfo('title'); ?></h1>
			<h2><?php bloginfo('description'); ?></h2>
		
			<a href="<?php bloginfo('home'); ?>" title="<?php bloginfo('title'); ?>">
				<img src="<?php if ( get_option('woo_logo') <> "" ) { echo get_option('woo_logo').'"'; } else { bloginfo('template_directory'); ?>/images/logo.png<?php } ?>" alt="<?php bloginfo('title'); ?> Logo" />
			</a>
		</div><!-- /#logo -->
*/ ?>
        <div id="top-ad">
	        <?php 
	        if (get_option('woo_ad_top') == 'true') { include (TEMPLATEPATH . "/ads/top_ad.php");}
     	   ?>
        </div><!-- /#top-ad -->      		
		
		<div class="clear"></div>
		
		<div id="navigation">
	
			<ul id="nav">
			
				<?php if (is_page()) { $highlight = "page_item"; } else {$highlight = "page_item current_page_item"; } ?>

				<li class="<?php echo $highlight; ?>"><a href="<?php bloginfo('url'); ?>" title="Página inicial com os últimos artigos">Home</a></li>
			
				<?php 
					if (get_option('woo_cat_menu') == 'true') 
						wp_list_categories('sort_column=menu_order&depth=3&title_li=&exclude='.get_option('woo_nav_exclude')); 
					else
						wp_list_pages('sort_column=menu_order&depth=3&title_li=&exclude='.get_option('woo_nav_exclude')); 
				?>
				<li class="page_item"><a href="http://scr.im/rafaelp" title="Enviar e-mail">E-mail</a></li>
				<?php wp_register(); ?>

			</ul><!-- /#pagenav -->
	
		</div><!-- /#navigation -->
		
		<div class="clear"></div>

	</div><!-- /#header -->
	
	<div id="main">
	<div id="inside">