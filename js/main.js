$(document).ready(function(){

    //--------- Main Nav hover effects --------//
    $('.main_nav a').hover(function() {
        $( '.main_nav a' ).removeClass('active_link');
        $( this ).addClass('active_link');
    });
    $('.main_nav a').click(function() {
        $( '.main_nav a' ).removeClass('active_link');
        $( this ).addClass('active_link');
    });


    //--------- Main Slider init --------//
    const main_slider = $(".main_slider");

    main_slider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });


    $('.main_slider-prev').click(function() {
        main_slider.trigger('prev.owl.carousel');
    })

    $('.main_slider-next').click(function() {
        main_slider.trigger('next.owl.carousel');
    })



    //--------- Articles Slider init --------//
    const articles_slider = $(".articles_slider");

    articles_slider.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 28,
        autoplayTimeout: 3000,
        dots: false,
        autoplayHoverPause: true
      });

      $('.articles_slider-prev').click(function() {
        articles_slider.trigger('prev.owl.carousel');
    })

    $('.articles_slider-next').click(function() {
        articles_slider.trigger('next.owl.carousel');
    })
    


  });