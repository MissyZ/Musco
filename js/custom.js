function init_carousel() {
            H = +($(window).width() /* -height here  */); // or $('.carousel-inner') as you want ...
            $('.carousel-inner').css('width', W + 'px');
        }
        window.onload = init_carousel;
        init_carousel();