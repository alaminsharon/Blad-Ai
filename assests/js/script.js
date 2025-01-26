$(function() {

    $(".offcanvas_right").click(function(){
        $(".offcanvas-menu-click").animate({
            right: "0px",
        });
    });

    $(".offcanvas-menu-close").click(function(){
        $(".offcanvas-menu-click").animate({
            right: "-500px",
        });
    });

    


    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    });

    $('.blog-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    });

    $(".video-btn a").magnificPopup({

        type: "iframe",

        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
            },
        }
    });

    $(".video-play").magnificPopup({

        type: "iframe",

        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
            },
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    new WOW().init();

    $(".campaign-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.client-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });

    $('.gallary-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });
    $('.cam-detail-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".video-play a").magnificPopup({

        type: "iframe",

        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
            },
        }
    });

    $('.user-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.user-bottom-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-arrow-1"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-arrow-2"><i class="fa-solid fa-angle-right"></i></button>',
    });

});