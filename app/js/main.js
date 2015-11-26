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

var svg = $('svg').drawsvg({
    duration: 800,
    stagger: 400,
    easing: 'swing',
    reverse: false,
    callback: $.noop
});

$('.site-subtitle').on('mouseover', function() {
	$('svg').show();
	svg.drawsvg('animate');
});

$('.site-subtitle').on('mouseout', function() {
	$('svg').hide();
});

$('.collapse-trigger').on('click', function(ev) {
	$(ev.target).siblings(".collapse").slideDown(400);
});