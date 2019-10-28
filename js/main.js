$(document).ready(function(){
    $('.main_nav a').hover(function() {
        $( '.main_nav a' ).removeClass('active_link');
        $( this ).addClass('active_link');
    });
    $('.main_nav a').click(function() {
        $( '.main_nav a' ).removeClass('active_link');
        $( this ).addClass('active_link');
    });

    $(".main_slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        autoplayHoverPause: true
      });
    


  });