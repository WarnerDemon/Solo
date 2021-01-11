// ========== Preloader ==========

$(window).on('load', function() {

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    
});

// ========== Team ==========

$(function() {

    $("#team-members").owlCarousel({

        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }

    });

});

// ========== Progress Bars ==========

$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
    
                width: $(this).attr("aria-valuenow") + "%"
    
            }, 2000);
    
        });
        this.destroy();

    }, {

        offset: 'bottom-in-view'

    })

});

// ========== Responsive Tabs ==========

$(function() {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

// ========== Portfolio ==========

$(function() {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // Filter items on Button click
    $("#isotope-filters").on('click','button', function() {

        // Get filter value
        var filterValue = $(this).attr('data-filter');
        
        // Filter Portfolio Items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    })


});

// ========== Magnific Popup ==========
$(function() {

    $("#portfolio-wrapper").magnificPopup({

        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});

// ========== Testimonials ==========

$(function() {

    $("#testimonial-slider").owlCarousel({

        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });

});

// ========== Stats ==========

$(function() {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

// ========== Clients ==========

$(function() {

    $("#clients-list").owlCarousel({

        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }

    });

});

// ========== Google Map ==========

$(window).on('load', function () {

    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {

        lat: 40.712685,
        lng: -74.005920

    };

    // Render Map
    var map = new google.maps.Map(document.getElementById('map'), {

        zoom: 11,
        center: myLatlng

    });

    // Add Marker
    var marker = new google.maps.Marker({

        position: myLatlng,
        map: map,
        title: "Click To See Address"

    });

    // Add Info Window
    var infowindow = new google.maps.InfoWindow({

        content: addressString
        
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {

        infowindow.open(map, marker);

    });

    // Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});

// ========== Navigation ==========

// Show & Hide White Navigation
$(function () {

    showHideNav()

    $(window).scroll(function(){

        showHideNav()

    });

    function showHideNav() {

        if($(window).scrollTop() > 50){

            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            $("#back-to-top").fadeIn();

        }
        else {

            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $("#back-to-top").fadeOut();

        }

    }

});

// Smooth Scrolling
$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(section_id).offset().top - 64

        }, 1250, "easeInOutExpo");

    });

});



$(function () {

    // Show mobile menu
    $("#mobile-nav-open-btn").click(function () {

        $("#mobile-nav").css("height", "100%");

    });

    // Hide mobile menu
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {

        $("#mobile-nav").css("height", "0%");

    });

});

// ========== Animation ==========

// animate on scroll
$(function () {

    new WOW().init();

});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});