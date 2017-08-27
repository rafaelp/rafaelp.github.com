(function ($) {
 "use strict";

/*
  STICKY
================================== */

	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop();
		var AESticky = $('.active-sticky');
		if (scroll < 245) {
			AESticky.removeClass("is-sticky");
		}
		else{
			AESticky.addClass("is-sticky");
		}
	});

	//smooth scroll
	$('.smooth-scroll a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 750);
					return false;
			}
		}
	});

/*
  ONE PAGE NAVIGATE
================================== */
	var OnePNav = $('.onepage-nev');
	var top_offset = OnePNav.height() - -0;
	OnePNav.onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});

/*
  EXPEND MENU
================================== */

	var CloseMu = $('.close-menu');
	var ExMu = $('.mainmenu-expand');
	var ExMuOp = $('.expand-menu-open');
	CloseMu.on('click', function(){
		$(this).parent(ExMu).removeClass('slide_right');
	});
	ExMuOp.on('click', function(){
		CloseMu.parent(ExMu).addClass('slide_right');
	});

/*
	SCROLLUP
================================ */

	$.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


})(jQuery);

/*
	LODING BAR
================================ */

jQuery(window).on('load', function(){
	// isotope grid
	var IsoGriddoload = $('.portfolio-grid');
	IsoGriddoload.isotope({
		itemSelector: '.grid-item',
		masonryHorizontal: {
			rowHeight: 100
		}
	});
});
