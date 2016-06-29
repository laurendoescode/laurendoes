function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 (aka Edge) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}

$(document).ready(function(){
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    
    $('.project-imagesfold').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 0,
        dots: true
    });

    if (detectIE()) {
        $('.home-heading1, .home-heading2, .home-heading3, .home-heading4').siblings('svg').hide();
        $('.social-media-list svg').hide();
    }

    if (!isMobile) {
        $('.work-list li .element').hoverdir();

        $('.home-heading1, .home-heading2, .home-heading3, .home-heading4').on('mouseover', function(ev) {
            $(ev.target).siblings('svg').css('visibility', 'visible');
            $(ev.target).siblings('svg').drawsvg({reverse: true}).drawsvg('animate');
        });

        $('.home-heading1, .home-heading2, .home-heading3, .home-heading4').on('mouseout', function(ev) {
            $(ev.target).siblings('svg').css('visibility', 'hidden');
        });

        $('.social-media-list li a').on('mouseover', function(ev) {
            $(ev.target).parent().find('svg').css('visibility', 'visible');
            $(ev.target).parent().find('svg').drawsvg().drawsvg('animate');
        });

        $('.social-media-list li a').on('mouseout', function(ev) {
            $(ev.target).parent().find('svg').css('visibility', 'hidden');
        });

        $('.work-list').packery({
            itemSelector: 'li',
            gutter: 0,
            percentPosition: true
        });
    }

    if (isMobile) {
        $('.mobile-image').siblings('.cover-image').hide();
        $('.mobile-image').show();

        $(window).scroll( function(){
                $('.work-list li').each( function(i){
                    var top_of_window = $(window).scrollTop();
                    var bottom_of_window = top_of_window + $(window).height();
                    var top_of_object = $(this).offset().top;
                    var bottom_of_object = top_of_object + $(this).outerHeight();
                    var elem = $(this).find('.element a div');

                    if( top_of_window > bottom_of_object || bottom_of_window < top_of_object ){
                        elem.removeClass('mobile-show').addClass('mobile-hide');
                    } else if( bottom_of_window > bottom_of_object && top_of_window < top_of_object ){
                        elem.removeClass('mobile-hide').addClass('mobile-show');
                    }
                    
                }); 
            
            });
    }

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

    $('.home-banner li').fitText();

    window.setInterval(function() {
        var titles = ['Lauren is designing', 'Lauren is writing', 'Lauren is illustrating'];
        var currentIndex = titles.indexOf(document.title);
        document.title = currentIndex >= 0 && currentIndex < titles.length - 1 ? titles[currentIndex + 1] : titles[0];
    }, 4000);
});


        var figure = $(".home-heading3");
        var vid = $("video");

        [].forEach.call(figure, function (item) {
                item.addEventListener('mouseover', hoverVideo, false);
                item.addEventListener('mouseout', hideVideo, false);
        });
        
        function hoverVideo(e) {  
                $(this).find('.thevideo')[0].play();
        }

        function hideVideo(e) {
                $(this).find('.thevideo')[0].pause(); 
        }