$(function () {
  var itemSpecialist = $('.content-1 .item-specialist');
  $(itemSpecialist[0]).css('display', 'block');

  var itemVSlider = $('.content-1 .vertical-slider .item'),
      itemVSliderCount = itemVSlider.length;

      for (var index = 0; index < itemVSliderCount; index++) {
         $(itemVSlider[index]).attr('elem-number', index);
         $(itemSpecialist[index]).attr('elem-number', index);
      }

  $('body').on('click', '.content-1 .vertical-slider .item', function () {
      $(itemSpecialist).css('display', 'none');
      $('.content-1 .vertical-slider .swiper-slide-active').removeClass('swiper-slide-active');
      $(this).addClass('swiper-slide-active');
      $('.content-1 .item-specialist[elem-number="' + $(this).attr('elem-number') + '"]').css('display', 'block');
  });

	var swiperVertical = new Swiper('.content-1 .vertical-slider .swiper-container', {
	    speed: 300,
	    direction: 'vertical',
	    slidesPerView: 3,
	    spaceBetween: 15,
	    mousewheel: true,
      loop: true,
	    width: '100%',
      	navigation: {
        	nextEl: '.content-1 .vertical-slider .route-down', 
        	prevEl: '.content-1 .vertical-slider .route-up',
      	}
	});	


  var swiperSrollContent = new Swiper('.content-1 .content-text.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      observer: true,
      observeParents: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });



  swiperVertical.on('slideChange', function () {
    var elem = swiperVertical.slides[swiperVertical.activeIndex];
     $(itemSpecialist).css('display', 'none');
     $('.content-1 .item-specialist[elem-number="' + $(elem).attr('elem-number') + '"]').css('display', 'block');

  });


  var itemHSlider = $('.content-1 .horizontal-slider-wrapper .item'),
      itemHSliderCount = itemVSlider.length;

      for (var index = 0; index < itemHSliderCount; index++) {
         $(itemHSlider[index]).attr('elem-number', index);
      }

  var horizontalSlider = $('.content-1 .horizontal-slider-wrapper');
      horizontalSliderOptions = {
          loop:true,
          margin: 0,
          nav: false,
          items: 1,
          lazyLoad: true       
      }; 

   //START OWL
   horizontalSlider.owlCarousel(horizontalSliderOptions);
   horizontalSlider.on('changed.owl.carousel', function(event) {
    var elem = event.page.index;
    $(itemSpecialist).css('display', 'none');
    $('.content-1 .item-specialist[elem-number="' + $(itemSpecialist[elem]).attr('elem-number') + '"]').css('display', 'block');   
  });
});