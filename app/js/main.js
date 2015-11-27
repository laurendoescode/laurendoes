$(document).ready(function(){
    $('.project-imagesfold').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 0,
        dots: true
    });

    $('.work-list li .element').hoverdir();

    $('.home-heading1, .home-heading2, .home-heading3').on('mouseover', function(ev) {
        $(ev.target).siblings('svg').css('visibility', 'visible');
        $(ev.target).siblings('svg').drawsvg({reverse: true}).drawsvg('animate');
    });

    $('.home-heading4').on('mouseover', function(ev) {
        $(ev.target).siblings('svg').css('visibility', 'visible');
        $(ev.target).siblings('svg').drawsvg({reverse: true}).drawsvg('animate');
    });

    $('.home-heading1, .home-heading2, .home-heading3, .home-heading4').on('mouseout', function(ev) {
        $(ev.target).siblings('svg').css('visibility', 'hidden');
    });

    $('.collapse-trigger').on('click', function() {
        $('.collapse-trigger').hide();
        $('.collapse-trigger').siblings(".collapse").slideDown(400);
    });

    $('.site-subtitle').on('click', function(ev) {
        var target = $('.home-work');
        if (target) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
        ev.preventDefault();
    });
});