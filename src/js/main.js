jQuery(function () {
    jQuery("#slider-promo").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
    });

    jQuery("#slider-boats").slick({
        dots: true,
        infinite: true,
        speed: 500,
        // fade: true,
        // cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
    });

    jQuery("#slider-pilots").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: $('.slider-pilots-dots'),
        draggable: true,
    });
});
