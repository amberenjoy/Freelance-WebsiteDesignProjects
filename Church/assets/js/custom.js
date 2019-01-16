(function ($) {

    "use strict";

        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });

        $('.post-module').hover(function() {
          $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
          }, 300);
        });
        // PARALLAX JS
        function initParallax() {
          $('#home').parallax("60%", 100);
          $('#about').parallax("100%", 80);
          $('#team').parallax("100%", 40);
          $('#contact').parallax("20%", 20);
          $('#news').parallax("20%", 20);
        }
        initParallax();


        // Owl Carousel
        var owl = $("#owl-team");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        });

})(jQuery);