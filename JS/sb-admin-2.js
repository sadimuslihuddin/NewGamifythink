(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    $(".sidebar .avatar-data").toggleClass("disappear")
    $(".main-content").removeClass("ml-sm-5")
    $(".main-content").toggleClass("move-right")
    $(".sidebar-brand-text").toggleClass("disappear")
    $(".sidebar-brand-text-small").removeClass("disappear")
    $(".avatar-picture").removeClass("mb-4")
    $(".avatar-picture").toggleClass("mb-0")
    $(".sidebarToggleTop").toggleClass("disappear")
    $(".sidebarToggleBottom").removeClass("disappear")
    if (!$(".sidebar").hasClass("toggled")){
      $(".main-content").toggleClass("ml-sm-5")
      $(".main-content").removeClass("move-right")
      $(".sidebar-brand-text-small").toggleClass("disappear")
      $(".avatar-picture").toggleClass("mb-4")
      $(".sidebarToggleBottom").addClass("disappear")
     }

    $(".sidebar span").toggleClass("disappear")
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });
  

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if($(window).width() >= 768 ){
      $('.sidebar .avatar-data').show();
    }
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
      $('.sidebar .avatar-data').hide();
    };
    
    // Toggle the side navigation when window is resized below 480px

  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict
