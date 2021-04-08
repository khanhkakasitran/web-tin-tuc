/*$(document).ready(function () {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        $(".menu").scrollTop();
    }
});*/
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});