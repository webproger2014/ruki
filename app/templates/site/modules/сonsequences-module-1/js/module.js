$(function () {
	//> сonsequences-module-1
	var consequences1 = $('.сonsequences-module-1 .сonsequences-content-wrapper'),
	    consequences1Html =  $(consequences1).html();
	var owlConsequences = consequences1,
	    owlConsequencesOptions = {
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
	                items: 3,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlowlConsequences();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	        owlConsequences.trigger('destroy.owl.carousel');
	        $(owlConsequences).removeClass('owl-carousel');
	        $(consequences1).html(consequences1Html);
	    } else {
	        if (!$(owlConsequences).hasClass("owl-carousel")) {
	            startOwlowlConsequences();            
	        }
	    }
	}); 

	function startOwlowlConsequences() {
	    $(owlConsequences).addClass('owl-carousel');
	    owlConsequences.owlCarousel(owlConsequencesOptions);
	}
	//< SEC сonsequences-module-1	
});