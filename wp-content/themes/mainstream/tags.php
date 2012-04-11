<?php /*
Template Name: Tag Archive
This is an example tag archive page.  If you add this to your theme,  and create a page using the "Tag Archive" template (it'll be there in the list)
you'll get a tag cloud displaying on a page.

You might need to tinker with the header/sidebar/footer to match your theme!
*/ ?>

<?php get_header(); ?>

		<div id="content">

			<h3>Posts neste Blogs</h3>
			<div class="post">

				<?php UTW_ShowWeightedTagSetAlphabetical("coloredsizedtagcloud","",0) ?>

			</div>

			<h3>Tags no del.icio.us</h3>
			<div class="post">
				<script type="text/javascript" src="http://del.icio.us/feeds/js/tags/rafael.lima?count=95;size=13-38;color=c3c3c3-000000;title="></script>
			</div>

		</div><!-- /#content -->

		<?php get_sidebar(); ?>

<?php get_footer(); ?>