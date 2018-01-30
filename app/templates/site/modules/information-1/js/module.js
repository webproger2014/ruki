$(function () {
	var info1 = $('.information-1 .informations-wrapper');
	    info1Html = $(info1).html();
	    owlinfo1 = $(info1 ),
	    owlinfo1Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,      
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlinfo1 ();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	         info1.trigger('destroy.owl.carousel');
	        $(info1).removeClass('owl-carousel');
	        $(info1).html(info1Html);
	    } else {
	        if (!$(info1 ).hasClass("owl-carousel")) {
	            startOwlinfo1();            
	        }
	    }
	}); 

	function startOwlinfo1() {
	    $(owlinfo1).addClass('owl-carousel');
	    owlinfo1.owlCarousel(owlinfo1Options);
	}	
});