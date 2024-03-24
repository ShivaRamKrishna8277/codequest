$(document).ready(function(){
    $('.menu_icon').click(function(){
        $('.mobile_nav_bar').toggleClass('visible_menu');
        $('body').toggleClass('no_scroll')
    });
});