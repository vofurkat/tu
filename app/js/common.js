$(function() {

	// $.pixlayout({clip: true, src: "img/layout.jpg", show:true, center:true, top:0, left:0, pervious: false});

	// product img resize
	$('.products-cats .product').imgLiquid();
	// $('.special-offer .offers-box .offer-img').imgLiquid();

	// open mobil menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		// $(".header-main .header-mnu ul").toggleClass("show-mnu");
		$(".header-main .header-mnu ul").slideToggle('slow');
	});


	// animate far label + input
	$('input').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.css').addClass('active');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.css').removeClass('active');
			}
		});

		if ($(this).val() != '') $(this).parent('.css').addClass('active');

	});

	//owlCarousel slider header
	$(".comment-slider").owlCarousel({
		items: 1,
		dots: true,
		autoplay: true,
		loop: true
	});

	// dotdotdot
  	$(".special-offer .offers-box .offer .offer-desc").dotdotdot();

});
