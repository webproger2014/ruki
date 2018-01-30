$(function () {
	var wrapperNumbersItems2 = $('.numbers-items-2 .content-numbers-wrapper');
	    htmlNumbersItems2   = $(wrapperNumbersItems2).html();
	    owlNumbersItems2 	= $(wrapperNumbersItems2),
	    owlOptionsNumbersItems2 = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
	        autoHeight: true,
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
	    startOwlNumbersItems2();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	         owlNumbersItems2.trigger('destroy.owl.carousel');
	        $(owlNumbersItems2).removeClass('owl-carousel');
	        $(wrapperNumbersItems2).html(htmlNumbersItems2);
	    } else {
	        if (!$(wrapperNumbersItems2).hasClass("owl-carousel")) {
	            startOwlNumbersItems2();            
	        }
	    }
	}); 

	function startOwlNumbersItems2() {
	    $(wrapperNumbersItems2).addClass('owl-carousel');
	     owlNumbersItems2.owlCarousel(owlOptionsNumbersItems2);
	}
});