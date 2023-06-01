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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        speed: 0,
    });

    jQuery("#slider-pilots").slick({
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: $(".slider-pilots-dots"),
        draggable: true,
    });

    jQuery("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        let href = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(href).offset().top,
        });

        return false;
    });

    // FAQ collapse
    $(".js__collapser").on("click", function () {
        $(this)
            .toggleClass("active")
            .parents(".question")
            .next(".answer")
            .slideToggle();
    });
});
