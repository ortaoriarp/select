$(document).ready(function () {
    //$('.bxslider').bxSlider({
    //    controls: false,
    //    pager: false,
    //    auto: true,
    //    pause: 3000,
    //    mode: "fade"
    //});

    //Eski Owl Carousel Trigger
    //$("#owl-example").owlCarousel({
    //    autoPlay: 3000
    //});

    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: ["Önceki", "Sonraki"],
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        loop: true,
        animateOut: "fadeOut"
    });

    $(".owl-urun").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class=\"fa fa-chevron-left\"></i>", "<i class=\"fa fa-chevron-right\"></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        animateOut: "fadeOut",
        thumbs: true,
        thumbsPrerendered: true
    });
});

if ($(".fancybox").length) {
    $(document).ready(function () {
        $('.fancybox').fancybox();
    });
}

if ($(".fancybox2").length) {
    $(document).ready(function () {
        $(".fancybox2").fancybox({
            arrows: false
        });
    });
}

if ($(".fancybox3").length) {
    $(document).ready(function () {
        $(".fancybox3").fancybox({
            arrows: false
        });
    });
}

$('.animasyonlu').hover(
       function () { $(this).addClass('animated pulse') },
       function () { $(this).removeClass('animated pulse') }
)

function karayelNavFunc() {
    if ((navigator.platform.indexOf("iPhone") != -1)
        || (navigator.platform.indexOf("iPod") != -1))
        window.open("maps://maps.google.com/maps?q=36.854798,30.756845");
    else
        window.open("http://maps.google.com/maps?q=36.854798,30.756845");
}

new WOW().init();