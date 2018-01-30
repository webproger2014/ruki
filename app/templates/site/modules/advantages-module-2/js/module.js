$(function () {
	//> SEC ADVANTAGES 2
	var adv2 = $('.advantages-module-2 .advantages-content-wrapper');
	    adv2Html2 = $(adv2).html();
	    owlAdv2 = $(adv2),
	    owlAdv2Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
	        responsive:{
	             0:{
	                items:1,
	                nav: false,
	            },


	            524: {
	                items: 2,
	                nav: false
	            },

	            748:{
	                items: 3,
	                nav: false,
	            },

	            960:{
	                items: 4,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlAdv2();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	         owlAdv2.trigger('destroy.owl.carousel');
	        $(owlAdv2).removeClass('owl-carousel');
	        $(adv2).html(adv2Html2);
	    } else {
	        if (!$(owlAdv2).hasClass("owl-carousel")) {
	            startOwlAdv2();            
	        }
	    }
	}); 

	function startOwlAdv2() {
	    $(owlAdv2).addClass('owl-carousel');
	    owlAdv2.owlCarousel(owlAdv2Options);
	}
	//< SEC ADVANTAGES 2
});