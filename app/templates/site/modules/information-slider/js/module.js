$(function () {
	var wrapperInfoSlider = $('.information-slider .information-slider-wrapper');
	    owlInfoSlider 	= $(wrapperInfoSlider),
	    owlOptionsInfoSlider = {
	        loop:true,
	        margin: 30,
	        nav: false,
	        items: 3,
	        lazyLoad: true,
	        responsive:{
	             0:{
	                items:1,
	                nav: false,
	            },

	            748:{
	                items: 2,
	                nav: false,
	            },

	            960:{
	                items: 3,
	                nav: false,
	            }
	        }        
	    }; 
	    owlInfoSlider.owlCarousel(owlOptionsInfoSlider);
});


	//MODAL CONTENT
	$('body').on('click','.information-slider .item', function () {
		$('.modal-data .modal-content').html($('.modal-content', this).html());
		$('.modal-data').fadeIn();
	});	