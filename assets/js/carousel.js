$(document).ready(function () {
    /* Header */
    var owlHeader = $("#header-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                margin: -100,
            },
            575: {
                margin: -100,
            },
        }
    });
    $("#header-arrow").on("click", function () {
        owlHeader.trigger("next.owl.carousel");
    })

    /* Cards */
    var owlCards = $("#cards-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 500,
        margin: -80,
        responsiveClass: true,
        responsive: {
            0: {
                margin: -60,
            },
            380: {
                margin: -100,
            },
        }
    });
    $("#carousel-arrow").on("click", function () {
        owlCards.trigger("next.owl.carousel");
    })

    /* Personal */
    var owlPersonal = $("#personal-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 500,
        margin: 100,
    });
    $("#personal-arrow").on("click", function () {
        owlPersonal.trigger("next.owl.carousel");
    })
});
