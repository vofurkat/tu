$(function() {


	// //loader
	function explode(){
	  $(".loader").fadeOut(100);
	}
	setTimeout(explode, 100);

	// product img resize
	$('.products-cats .product').imgLiquid();
	$('.product-info .product-info__img').imgLiquid();
	$('.cart-box .product-img .product-img__in').imgLiquid();
	$('.reviews .catalog-box .catalog-item').imgLiquid();
	$('.reviews .reviews-img .reviews-img__box .comm-img').imgLiquid();
	$('.catalog .catalog-box .catalog-left .catalog-img').imgLiquid();
	$('.catalog-special .spe-slider__box .spe-slider__item').imgLiquid();

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


	// animate far label + input form-right
	$('.form-right form input').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.css-head').addClass('active-hd');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.css-head').removeClass('active-hd');
			}
		});

		if ($(this).val() != '') $(this).parent('.css-head').addClass('active-hd');

	});

	// animate far label + input perechin-right
	$('.perechin-right form input').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.css-blue').addClass('active-blue');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.css-blue').removeClass('active-blue');
			}
		});

		if ($(this).val() != '') $(this).parent('.css-blue').addClass('active-blue');

	});

	// animate far label + input cart page
	$('.buy-form .buy-form__in .buy-form__left input').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.css-buy').addClass('active-buy');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.css-buy').removeClass('active-buy');
			}
		});

		if ($(this).val() != '') $(this).parent('.css-buy').addClass('active-buy');

	});

	// animate far label + input cart page
	$('.buy-form .buy-form__in .buy-form__right textarea').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.css-buy').addClass('active-buy');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.css-buy').removeClass('active-buy');
			}
		});

		if ($(this).val() != '') $(this).parent('.css-buy').addClass('active-buy');

	});

	// animate far label + input cart page
	$('.catalog .catalog-box .catalog-bottom .catalog-bottom__right input').each(function() {
		$(this).on('focus', function() {
			$(this).parent('.css-catalog').addClass('active-catalog');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parent('.css-catalog').removeClass('active-catalog');
			}
		});

		if ($(this).val() != '') $(this).parent('.css-catalog').addClass('active-catalog');

	});

	$(".show-form").click(function(){
		$(".form-right").removeClass("form-noactive");
	});

	$(".close-form").click(function(){
		$(".form-right").removeClass("form-active");
	});

	$(".show-form").on("click", function(){
		
		$(".form-right").toggleClass("form-active");
	});

	$(".close-form").on("click", function(){
		$(".form-right").toggleClass("form-noactive");
	});

	//owlCarousel slider header
	$(".comment-slider").owlCarousel({
		items: 1,
		dots: true,
		autoplay: true,
		loop: true
	});

	

	// tab
	$( "#tabs" ).tabs();

	// on-tab 1
	$(".on-tab .have .on").on("click", function(){
		$(".tab #tabs-1 .hide-tab").toggleClass("tab-div__on");
		$(this).toggleClass("off");
		$(".on-tab .have .fa").toggleClass("fa-long-arrow-up");
		$(".on-tab .have .fa").toggleClass("fa-top");
		$("html, body").animate({scrollTop: $(".tab").offset().top}, "2000");
		
		if($(this).text() == "РАЗВЕРНУТЬ"){
			$(this).text("СВЕРНУТЬ");
		}else{
			$(this).text("РАЗВЕРНУТЬ")
		}
		return false;
	});

	// on-tab 2
	$(".on-tab2 .have .on").on("click", function(){
		$(".tab #tabs-2 .hide-tab").toggleClass("tab-div__on");
		$(this).toggleClass("off");
		$(".on-tab2 .have .fa").toggleClass("fa-long-arrow-up");
		$(".on-tab2 .have .fa").toggleClass("fa-top");
		$("html, body").animate({scrollTop: $(".tab").offset().top}, "2000");
		
		if($(this).text() == "РАЗВЕРНУТЬ"){
			$(this).text("СВЕРНУТЬ");
		}else{
			$(this).text("РАЗВЕРНУТЬ")
		}
		return false;
	});

	// on-tab 3
	$(".on-tab3 .have .on").on("click", function(){
		$(".tab #tabs-3 .hide-tab").toggleClass("tab-div__on");
		$(this).toggleClass("off");
		$(".on-tab3 .have .fa").toggleClass("fa-long-arrow-up");
		$(".on-tab3 .have .fa").toggleClass("fa-top");
		$("html, body").animate({scrollTop: $(".tab").offset().top}, "2000");
		
		if($(this).text() == "РАЗВЕРНУТЬ"){
			$(this).text("СВЕРНУТЬ");
		}else{
			$(this).text("РАЗВЕРНУТЬ")
		}
		return false;
	});

	$('.catalog .catalog-box').readmore({
		speed: 200,
        collapsedHeight: 275,
        heightMargin: 16,
        moreLink: '<a href="#" class="more-show more-less">СМОТРЕТЬ ВСЕ ТУ</a>',
        lessLink: '<a href="#" class="less-show more-less">СВЕРНУТЬ</a>',
        embedCSS: true,
        blockCSS: 'display: block; width: 100%;',
        startOpen: false,

		afterToggle: function(trigger, element, expanded) {
			if(expanded) { 
				$('.catalog .catalog-box').each(function() {
					var tesr = $(this).next();
					$(tesr).each(function() {
						if($(this).hasClass("less-show")) {
							$(this).prev().find(".arrow-bottom").addClass("arrow-top");
						}
					});
				});
			}
			if(!expanded) { 
				$('.catalog .catalog-box').each(function() {
					var tesr = $(this).next();
					$(tesr).each(function() {
						if($(this).hasClass("more-show")) {
							$(this).prev().find(".arrow-bottom").removeClass("arrow-top");
						}
					});
				});
			}
		}
	});

	//owlCarousel slider catalog
	$(".catalog-special .spe-slider__box").owlCarousel({
		items: 1,
		dots: true,
		autoplay: true,
		loop: true
	});


	// dotdotdot
  	$(".special-offer .offers-box .offer .offer-desc").dotdotdot();

});
