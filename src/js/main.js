jQuery(function () {
    // Слайдер ПРОМО
    jQuery("#slider-promo")
        .slick({
            autoplay: true,
            autoplaySpeed: 3500,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: true,
        })
        .on("afterChange", function (slick, currentSlide) {
            $(".promo-title").toggleClass("even");
        });

    // Слайдер ЛОДКИ
    jQuery("#slider-boats").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        speed: 0,
        appendArrows: $('.slider-boats-arrows'),
        nextArrow: '<span class="slick-next"></span>',
        prevArrow: '<span class="slick-prev"></span>'
    });

    // Слайдер ПИЛОТЫ
    jQuery("#slider-pilots").slick({
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: $(".slider-pilots-dots"),
        draggable: false,
        appendArrows: $('.slider-pilots-arrows'),
        nextArrow: '<span class="slick-next"></span>',
        prevArrow: '<span class="slick-prev"></span>'
    });

    // Прокрутка страницы от верхнего меню
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
