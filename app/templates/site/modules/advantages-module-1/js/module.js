$(function () {
	//> SEC ADVANTAGES
	var adv1 = $('.advantages-module-1 .advantages-content-wrapper');
	    adv1Html1 = $(adv1).html();
	    owlAdv1 = $(adv1),
	    owlAdv1Options = {
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
	    startOwlAdv1();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	         owlAdv1.trigger('destroy.owl.carousel');
	        $(owlAdv1).removeClass('owl-carousel');
	        $(adv1).html(adv1Html1);
	    } else {
	        if (!$(owlAdv1).hasClass("owl-carousel")) {
	            startOwlAdv1();            
	        }
	    }
	}); 

	function startOwlAdv1() {
	    $(owlAdv1).addClass('owl-carousel');
	      owlAdv1.owlCarousel(owlAdv1Options);
	}
	//< SEC ADVANTAGES
});