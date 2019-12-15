$(document).ready(function () {

    //header alert div remove start
    $(".header-alert-close-btn").click(function () {
        $("#header-alert").addClass("d-none");
    });
    //header alert div remove end


    //nav hover dropdown-list show start
    $(".dropdown").hover(function () {
        $(this).addClass("show");
        $(this).find(".dropdown-menu").addClass("show");
    }, function () {
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    })
    //nav hover dropdown-list show end


    //nav hover dropdown sub-menu-toggle hover start
    $(".sub-menu-toggle").hover(function () {
        $(this).next().css("opacity", "1")
    }, function () {
        $(this).next().css("opacity", "0")
    });

    $(".sub-dropdown").hover(function () {
        $(this).css("opacity", "1")
    }, function () {
        $(this).css("opacity", "0")
    })
    //nav hover dropdown sub-menu-toggle hover end


    //nav header search click open start
    $(".header-nav-list .nav-search-icon").click(function () {
        if ($(this).hasClass("ti-search")) {
            $(".header-search-wrapper").css({
                "visibility": "visible",
                "opacity": "1",
                "-webkit-transform": "scale(1)",
                "transform": "scale(1)"

            });
            $(this).removeClass("ti-search").addClass("ti-close");
        } else if ($(this).hasClass("ti-close")) {
            $(".header-search-wrapper").css({
                "visibility": "hidden",
                "opacity": "0",
                "-webkit-transform": "scale(0)",
                "transform": "scale(0)"
            })
            $(this).removeClass("ti-close").addClass("ti-search");
        }
    });
    //nav header search click open end


    // categories carousel start
    $('#categories-section .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
    // categories carousel end

    // our client carousel start
    $('#our-client .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
    // our client carousel end

    //testimonial section carousel start
    $('#testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    //testimonial section carousel end


    //scroll to top js Start
    var scrollTopBtn = document.querySelector(".scroll-top");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
    //scroll to top js end


    // sticky nav bar js Start

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            $(".navbar").addClass("fixed-top").addClass("bg-color-white").addClass("bg-shadow");
        }
        else if ($(".navbar").hasClass("fixed-top")) {
            $(".navbar").removeClass("fixed-top").removeClass("bg-color-white").removeClass("bg-shadow")
        } else {

        }
    }
    // sticky nav bar js End

});