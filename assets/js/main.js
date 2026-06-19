$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(100).fadeOut(100);
    });
    
    
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/naviktech-logo.png").attr("width", "324").attr("height", "72");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/naviktech-logo-2.png").attr("width", "324").attr("height", "72");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //=====  WOW active
    
    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();
    
    //===== Hero mouse parallax
    $('.header_hero').on('mousemove', function (event) {
        var $this = $(this);
        var x = (event.pageX - $this.offset().left - $this.width()/2) / 25;
        var y = (event.pageY - $this.offset().top - $this.height()/2) / 25;

        $('.shape-1').css('transform', 'translate3d(' + (x * 0.9) + 'px,' + (y * 0.9) + 'px,0) rotate(' + (x / 12) + 'deg)');
        $('.shape-2').css('transform', 'translate3d(' + (x * 0.55) + 'px,' + (y * 0.55) + 'px,0) rotate(' + (x / 20) + 'deg)');
        $('.shape-3').css('transform', 'translate3d(' + (x * 0.75) + 'px,' + (y * 0.75) + 'px,0) rotate(' + (x / 15) + 'deg)');
        $('.hero_layer-1').css('transform', 'translate3d(' + (x * 0.6) + 'px,' + (y * 0.6) + 'px,0)');
        $('.hero_layer-2').css('transform', 'translate3d(' + (x * 0.35) + 'px,' + (y * 0.35) + 'px,0)');
        $('.hero_layer-3').css('transform', 'translate3d(' + (x * 0.15) + 'px,' + (y * 0.15) + 'px,0)');
        $('.header_image .device-frame').css('transform', 'rotateY(' + (-16 + x / 6) + 'deg) rotateX(' + (6 + y / 12) + 'deg) translateZ(2px)');
    });

    $('.header_hero').on('mouseleave', function () {
        $('.shape-1, .shape-2, .shape-3, .hero_layer-1, .hero_layer-2, .hero_layer-3').css('transform', 'translate3d(0,0,0)');
        $('.header_image .device-frame').css('transform', 'rotateY(-16deg) rotateX(6deg) translateZ(0)');
    });

    //===== Scroll depth interaction
    var scrollPos = 0;
    var ticking = false;

    function updateDepth() {
        $('.single_features').each(function () {
            var $el = $(this);
            var offsetTop = $el.offset().top;
            var distance = offsetTop - scrollPos;
            var depth = Math.max(Math.min((distance - 400) / 35, 16), -16);
            $el.css('--scroll-ty', depth + 'px');
        });

        $('.about_image, .founder_image, .download_app, .section_title').each(function () {
            var $el = $(this);
            var offsetTop = $el.offset().top;
            var distance = offsetTop - scrollPos;
            var move = Math.max(Math.min((distance - 500) / 45, 18), -18);
            $el.css('--scroll-img-y', move + 'px');
        });

        $('.hero_layer').each(function (index) {
            var $el = $(this);
            var base = (index + 1) * 8;
            var move = Math.max(Math.min((scrollPos - $el.closest('.header_hero').offset().top) / (50 + base), base), -base);
            $el.css('transform', 'translate3d(0, ' + move + 'px, 0)');
        });

        ticking = false;
    }

    function requestDepthUpdate() {
        scrollPos = $(window).scrollTop();
        if (!ticking) {
            window.requestAnimationFrame(updateDepth);
            ticking = true;
        }
    }

    $(window).on('scroll', requestDepthUpdate);
    requestDepthUpdate();
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});