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

var svg1 = $('svg#heading1-underline').drawsvg({reverse: true});

$('.home-heading1').on('mouseover', function() {
	$('svg#heading1-underline').parent('.svg-wrapper').show();
	$('svg#heading1-underline').drawsvg('animate');
});

$('.home-heading1').on('mouseout', function() {
	$('svg#heading1-underline').parent('.svg-wrapper').hide();
});

$('.collapse-trigger').on('click', function() {
	$('.collapse-trigger').siblings(".collapse").slideDown(400);
});

var svg2 = $('svg#heading2-underline').drawsvg({reverse: false});

$('.home-heading2').on('mouseover', function() {
    $('svg#heading2-underline').parent('.svg-wrapper').show();
    svg2.drawsvg('animate');
});

$('.home-heading2').on('mouseout', function() {
    $('svg#heading2-underline').parent('.svg-wrapper').hide();
});