$(function () {
	var wrapperAdvModule3= $('.advantages-module-3 .advantages-wrapper');
	    htmlAdvModule3   = $(wrapperAdvModule3).html();
	    owlAdvModule3	= $(wrapperAdvModule3),
	    owlOptionsAdvModule3 = {
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
	    startOwlAdvModule3();
	}

	$(window).resize(function () {
	    if ($(window).width() >= 960) {
	    	console.log('aff');
	         owlAdvModule3.trigger('destroy.owl.carousel');
	        $(owlAdvModule3).removeClass('owl-carousel');
	        $(wrapperAdvModule3).html(htmlAdvModule3);
	    } else {
	        if (!$(wrapperAdvModule3).hasClass("owl-carousel")) {
	            startOwlAdvModule3();            
	        }
	    }
	}); 

	function startOwlAdvModule3() {
	    $(wrapperAdvModule3).addClass('owl-carousel');
	     owlAdvModule3.owlCarousel(owlOptionsAdvModule3);
	}
});