$(document).ready(function(){
//    banner_slider
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
    });
    
//    team_slider
     $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
    });
    
//    team two slider
     $('.slider_text').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.slider_img'
     });
     $('.slider_img').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         asNavFor: '.slider_text',
         dots: false,
         centerPadding: '0px',
         prevArrow: '.team_arrow_left',
         nextArrow: '.team_arrow_right',
         centerMode: true,
         focusOnSelect: true
     });
    
//    venobox
    $('.venobox').venobox();
})