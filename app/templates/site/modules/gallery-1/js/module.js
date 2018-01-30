var buttonsPortfolio = $(".gallery-1 .bg");
//DNEVNOI 
var openPhotoSwipe1 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        { 
            src: 'images/photos/1.jpg',
            w: 4128,
            h: 3096
        },

        { 
            src: 'images/photos/2.jpg',
            w: 2870,
            h: 4305
        },

        
         { 
           src: 'images/photos/fff.jpg',
            w: 3096,
            h: 4128
        },
        
         { 
            src: 'images/photos/3.jpg',
            w: 3120,
            h: 4160
        },

        
        { 
            src: 'images/photos/5.jpg',
            w: 2912,
            h: 4368
        },

        { 
           src: 'images/photos/6.jpg',
            w: 4368,
            h: 2912
        },

        { 
           src: 'images/photos/7.jpg',
            w: 720,
            h: 1280
        },


         { 
            src: 'images/photos/8.jpg',
            w: 2777,
            h: 4164
        },

         { 
            src: 'images/photos/8-2.jpg',
            w: 2912,
            h: 4368
        },

        { 
            src: 'images/photos/9.jpg',
            w: 2912,
            h: 4368
        },

         { 
            src: 'images/photos/10.jpg',
            w: 720,
            h: 1280
        },
        
         { 
           src: 'images/photos/11.jpg',
            w: 720,
            h: 1280
        },
        
        { 
            src: 'images/photos/12.jpg',
            w: 720,
            h: 1280
        },

        { 
           src: 'images/photos/13.jpg',
            w: 720,
            h: 1280
        },

        { 
           src: 'images/photos/14.jpg',
            w: 720,
            h: 1280
        },   

        { 
            src: 'images/photos/15.jpg',
            w: 720,
            h: 1280
        },

        { 
            src: 'images/photos/16.jpg',
            w: 720,
            h: 1280
        }                                                                                              
    ];
    
    // define options (if needed)
    var options = {};
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

$(buttonsPortfolio).on('click', function () {
   openPhotoSwipe1(); 
});
