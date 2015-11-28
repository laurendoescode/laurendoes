function drawPath(path) {
    var duration = 1000;
    var easing = 'cubic-bezier(.02, .01, .47, 1)';
    var length = path.getTotalLength();
    var dashOffsetStates = [length, 2 * length];

    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';

    var dashArray = path.style.strokeDasharray || path.getAttribute("stroke-dasharray");

    if (dashArray != '') {
        var dashLength = dashArray.split(/[\s,]/).map(function (a) {
            return parseFloat(a) || 0;
        }).reduce(function (a, b) {
            return a + b;
        })
        var dashCount = length / dashLength + 1;
        var a = new Array(Math.ceil(dashCount)).join(dashArray + " ");
        path.style.strokeDasharray = a + '0' + ' ' + length;
    } else {
        path.style.strokeDasharray = length + ' ' + length;
    }
    path.style.strokeDashoffset = dashOffsetStates[0];
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + duration + 'ms ' + easing;
    path.style.strokeDashoffset = dashOffsetStates[1];
    setTimeout(function() {
        path.style.strokeDasharray = dashArray; //set back original dash array
    }, duration);
}

$(document).ready(function(){
    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    
    $('.project-imagesfold').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 0,
        dots: true
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

    if (!isTouch) {
        $('.work-list li .element').hoverdir();

        $('.home-heading1, .home-heading2, .home-heading3').on('mouseover', function(ev) {
            $(ev.target).siblings('svg').css('visibility', 'visible');
            $(ev.target).siblings('svg').drawsvg({reverse: true}).drawsvg('animate');
        });

        $('.home-heading4').on('mouseover', function(ev) {
            var path = document.querySelector('#dottedPath');
            $(ev.target).siblings('svg').css('visibility', 'visible');
            drawPath(path);
        });

        $('.home-heading1, .home-heading2, .home-heading3, .home-heading4').on('mouseout', function(ev) {
            $(ev.target).siblings('svg').css('visibility', 'hidden');
        });
    }
});