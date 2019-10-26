$(document).ready(function(){
    $('.main_nav a').hover(function() {
        $( '.main_nav a' ).removeClass('active_link');
        $( this ).addClass('active_link');
    });
    $('.main_nav a').click(function() {
        $( '.main_nav a' ).removeClass('active_link');
        $( this ).addClass('active_link');
    });

  });