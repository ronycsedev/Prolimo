
(function ($) {
    "use strict";

    /* ------------------------------------------------------ */
    /* preloader */
    $(window).on('load', function(){
            $('.spinner-section').fadeOut('slow', function(){
            $(this).remove();
        });
    });


    /* ------------------------------------------------------ */
    /* Fixed Header */
    $(window).on('scroll', function(event) {
        var window_width = $(window).width();
        var scrollValue = $(window).scrollTop();
        if (window_width > 991) {
            if (scrollValue >= 160) {
                $('header').addClass('affix animated fadeIn');
            } else {
                $('header').removeClass('affix animated fadeIn');
            }
        }
    });


    // Jahangir

    
    $("#btns-t").click(function(){
        var timeout;
        $("#myhidenav").toggle();
        timeout = setTimeout(function() { $("#myhidenav").fadeOut(1500); }, 10000);
        
        $("#myhidenav").mouseover(function(){
            clearTimeout(timeout);
         });

      });

      $(function ami() {
      var time ;
      $("#myhidenav").mouseleave(function(){
       time = setTimeout(function() { $("#myhidenav").fadeOut(1500); }, 10000);
            });
            $("#myhidenav").mouseover(function(){
                clearTimeout(time);
             });
           
    });
      
      


    /* ------------------------------------------------------ */
    /* Navbar Menu Active */
    var url = window.location;
    var $navmenu_a = $('.navbar-nav li a');

    $('.navbar-nav li a[href="' + url + '"]').parent().addClass('active');
    $navmenu_a.filter(function () {
        return this.href == url;
    }).parent().addClass('active');

    /* ------------------------------------------------------ */
    /* Search Option */
    // search function variable
    var menuSearch = $('.menu-search');
    var bodyTag = $('body');
    var closeButton = $('.close-button');
    var searchField = $('.search-field');

    // search functions
    menuSearch.on('click', function (e) {
        e.stopPropagation();
        bodyTag.addClass('active-search');
    });

    /* remove search animation by body click */
    closeButton.on('click', function (e) {
       bodyTag.removeClass('active-search');
    });

    bodyTag.on('click', function (e) {
        $(this).removeClass('active-search');
    });
    searchField.on('click', function(e){
        e.stopPropagation();
    });

    /* ------------------------------------------------------ */
    /* slider owl carousel */
    var owlBanner = $(".banner-slider");
    
    owlBanner.owlCarousel({
        loop: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        dots: false,
        autoplay:true,
        autoplayTimeout: 9000,
        autoplayHoverPause:false,
        items: 1,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ]
    });
    owlBanner.on("translate.owl.carousel", function(){
        $(".main-banner h3").removeClass("animated fadeInDown").css("opacity", "0");
        $(".main-banner h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-banner h5").removeClass("animated zoomIn").css("opacity", "0");
        $(".banner-button").removeClass("animated fadeInDown").css("opacity", "0");
    });
    owlBanner.on("translated.owl.carousel", function(){
        $(".main-banner h3").addClass("animated fadeInDown").css("opacity", "1");
        $(".main-banner h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-banner h5").addClass("animated zoomIn").css("opacity", "1");
        $(".banner-button").addClass("animated fadeInDown").css("opacity", "1");
    });

    /* ------------------------------------------------------ */
    /* About Slider */
    $('.about-slider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ]
    });

    /* ------------------------------------------------------ */
    /* Progress */
    var $skill_progress = $('.circle');
    $skill_progress.waypoint(function () {
        /*** Circle Progress ***/
        // First circle Progress
        var Counter1st = $('.first.circle');
        Counter1st.circleProgress({
            value: 0.75,
            size: 150,
            startAngle: 4.5,
            thickness: 10,
            emptyFill: "transparent",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#0507F7"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(75 * progress) + '%');
        });

        // Second circle Progress
        var Counter2nd = $('.second.circle');
        Counter2nd.circleProgress({
            value: 0.80,
            size: 150,
            startAngle: 4.5,
            thickness: 10,
            emptyFill: "transparent",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#0507F7"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(80 * progress) + '%');
        });

        // Third circle Progress
        var Counter3rd = $('.third.circle');
        Counter3rd.circleProgress({
            value: 1,
            size: 150,
            startAngle: 4.5,
            thickness: 10,
            emptyFill: "transparent",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#0507F7"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(100 * progress) + '%');
        });

    	// skill bar progress
        $('.progress-bar').css({
            animation: "animate-positive 2.5s",
            opacity: "1"
        });
        
        this.destroy();
    }, 
    {
        offset: '100%'
    });

    /* ------------------------------------------------------ */
    // init Isotope
/* ------------------------------------------------------ */
    /* Isotop jQuery */
    var $grid = $('.portfolio-list');
    $grid.isotope({
      itemSelector: '.single-port',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.col-xl-3'
      }
    });

    // filter items on button click
    $('.port-navigation li').on( 'click', function() {
    	var filterValue = $(this).attr('data-filter');
    	$grid.isotope({ filter: filterValue });
    });

    // 	add portfolio navigation class
    $('.port-navigation li').on('click', function(){
        $('.port-navigation li').removeClass("active");
        $(this).addClass("active");
    });

    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    /* ------------------------------------------------------ */
    /* Testimonial owlCarousel */
    $('.testimonial-list').owlCarousel({
        items:1,
        dots: true,
        dotsContainer: "#owl-thumbs"
    });

    /* ------------------------------------------------------ */
    /* Client List */
    $('.best-client-list').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        dots: false,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            767:{
                items:3,
            },
            992:{
                items:4,
            },
            1000:{
                items:6,
            }
        }
    });
// Md jaahangir

$('span.navbar-btn').click(function() {
    $('#navbar').toggle();
});



    /* ------------------------------------------------------ */
    /* Member List */
    $('.member-list').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    });


    var header = new Headroom(document.querySelector('header'), {
        tolarence: 80,
        offset: 55,
        classes: {
    
            initial: 'headroom',
            pinned: 'slidedown',
            unpinned: 'slideup',
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            frozen: "headroom--frozen",
    
        }
    });
    header.init();



    $(".faq-accordion-tab").each(function(){
        var $this = $(this);
        $this.find(" > h4").on("click touch", function(){
            $(".faq-accordion-tab").removeClass("active pre-active")
            $(".faq-accordion-tab .accordion-content").slideUp();
            if($this.find(".accordion-content:visible").length){
                $(".faq-accordion-tab").removeClass("active pre-active")
                $(".faq-accordion-tab .accordion-content").slideUp();
            }
            else{
                $this.addClass("active pre-active")
                $(".faq-accordion-tab .accordion-content").slideUp();
                $this.find(" > .accordion-content").slideDown();
            }
        })
    })

  


    /* ------------------------------------------------------ */
    /* Masonry Grid Post */
    $('.gird-post').masonry({
        columnWidth: '.col-12',
        itemSelector: '.blog-post'
    });

    /* ------------------------------------------------------ */
    /* Tooltip */
 if($('[data-toggle="tooltip"]').length){
    $('[data-toggle="tooltip"]').tooltip()
 }    

    /* ------------------------------------------------------ */
    /* Testimonial owlCarousel */
    $('.portfolio-slider').owlCarousel({
        items:1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true
    });

    /* ------------------------------------------------------ */
    /* Single Service Active Class */
    $('.single-service-list li a').on('click', function(){
        $('.single-service-list li').removeClass("active");
        $('.single-service-list li').addClass("active");
    });

    /* ------------------------------------------------------ */
    /* Video Modal */
    $('.video-button').on('click', function(e) {
        e.preventDefault();
        $('#' + $(this).data('modal-id')).modal();
    });
    // Stop Video by click close.
    $('.close').on('click', function() {
        $('iframe').attr('src', $('iframe').attr('src'));
    });

    /* ------------------------------------------------------ */
    /* Wow JS */
    var window_width = $(window).width();
    if (window_width > 767) {
        new WOW().init();
    }


// data filter

    $(".all").click(function(){
        $(".mainfleet div").css("display","block");
    });
    $(".port-navigation .no").click(function(){
        $(".mainfleet div").css("display","none");
        $(".limo").css("display","block");
    });
   


  
    /* ------------------------------------------------------ */
    /* Contact From */
    $('#submit').on('click', function() {
        $.post("contact.php", $("#contact-form").serialize(), function(response) {
            $('#form-info').fadeIn().html(response);
            $('#form-info').delay(2000).fadeOut();
        });
        return false;
    });

  
    if ($('.content').length) {
        // Counter To Count Number Visit
        var a = 0;
        $(window).scroll(function () {

            var oTop = $('.content').offset().top - window.innerHeight;
            // mdrobiulislamronycse
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-count').each(function () {
                    var $this = $(this);
                    jQuery({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                a = 1; // mdrobiulislamronycse
            }
        });

    }


    
}(jQuery));	

function SendMail(){
    var params = {
        name_id: document.getElementById('name_id').value,
        email_id: document.getElementById('email_id').value,
        subject_id: document.getElementById('subject_id').value,
        message_id: document.getElementById('message_id').value,
    }
    emailjs.send('service_6cjac3y', 'template_akl1frp', params).then(function(res){
        document.getElementById("contact-form").reset();
        console.log("success!" + res.status);
    }, function(error) {
        console.log('FAILED...', error);
    })
}

function SendFaqMail(){
    var params = {
        name_id: document.getElementById('faq_name_id').value,
        email_id: document.getElementById('faq_email_id').value,
        message_id: document.getElementById('faq_message_id').value,
    }
    emailjs.send('service_6cjac3y', 'template_qtqjb95', params).then(function(res){
        document.getElementById("faq-form").reset();
        console.log("success!" + res.status);
    }, function(error) {
        console.log('FAILED...', error);
    })
}

