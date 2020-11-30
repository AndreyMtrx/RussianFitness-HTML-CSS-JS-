$(document).ready(function () {

    if (window.outerWidth < 770) {
        $("#review-image2").attr("src", "assets/images/training/MobImage2.jpg");
        $("#review-image3").attr("src", "assets/images/training/MobImage3.jpg");
        $("#review-image4").attr("src", "assets/images/training/MobImage4.jpg");
        $("#review-image5").attr("src", "assets/images/training/MobImage5.jpg");
    }

    /* Slider */
    $(".slider .slider-image:first").css({
        opacity: 1
    })
    $("#arrow-right").on("click", function () {
        var current;
        current = $('#rotator .show');
        var dataNumberNext = current.data("number") + 1;
        var next = $("[data-number=" + dataNumberNext + "]");
        if (next.hasClass("bg__trainer")) {
            next.css({
                opacity: 1
            });
            next.addClass("show");
            current.css({
                opacity: 0
            });
            current.removeClass("show");
        } else {


            $(".bg__trainer").removeClass("show");
            $(".bg__trainer:first").addClass("show");
            $(".bg__trainer").css({
                opacity: 0
            });
            $("#rotator .bg__trainer:first").css({
                opacity: 1
            });
        }
    })

    /* Accordion */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        var before = $(".accordion__item .before");
        var blockId = $(this).data("collapse");
        if (!$(blockId).hasClass("before")) {
            var beforeId = $(".accordion__item .before").attr("id");
            $(".slider-image[data-image='#" + beforeId + "']").css({
                opacity: 0
            });
            $(".slider-image[data-image='" + blockId + "']").css({
                opacity: 1
            });
            $("[data-collapse] .state").text("+");
            $("[data-collapse='" + blockId + "'] .state").text("-");
            $(blockId).slideToggle();
            before.slideToggle();
            before.removeClass("before");
            $(blockId).addClass("before");
        }
    })

    /* Hamburger */
    $("#ham").on("click", function () {
        $("#nav").slideToggle(200);
        $("#header__btn-nav").toggleClass("header__btn--active");
        $("#header__btn-nav").removeClass("header__btn--nav");
    })
})
