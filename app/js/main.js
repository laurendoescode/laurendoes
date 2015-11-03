$(function () {
	$('.work-list li .element').hoverdir();
});

$(document).ready(function(){
   $('.project-imagesfold').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     speed: 0,
     dots: true
   });
});