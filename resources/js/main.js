$(document).ready(function(){
  // waypoint plugin for sticky menu
  $('.js--sticky').waypoint(function(direction){
    if(direction == "down"){
      $('#navMenu').addClass('sticky');
    }else{
      $('#navMenu').removeClass('sticky');
    }
  });
  /*====Mobile Menu bar====*/
  $("#menuBar").click(function(){
    $(this).toggleClass('active');
    $("#mobileMenu").slideToggle();
  });
     /* Sub Menu */
    $( "ul.multiMenu li" ).has( "ul" ).addClass('get_sub_menu');
    $('.get_sub_menu').prepend('<span class="m_icon"></span>');
    $('.get_sub_menu').find('> ul').css('display', 'none');
    $('.get_sub_menu > .m_icon').click(function(){
      $(this).find('~ ul').slideToggle();
      $(this).parent().toggleClass('active');
    });
      
    /*Use smooth scrolling when clicking on navigation*/
    var topoffset = 73; //variable for menu height
  
  $('#navMenu ul li a').click(function() {
  if (location.pathname.replace(/^\//,'') === 
    this.pathname.replace(/^\//,'') && 
    location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top-topoffset
    }, 500);
    return false;
    
    } //target.length
    
    } //click function 
  }); //smooth scrolling
  /* when link scrolling a section then menu will automaticly close*/
    $('#navMenu ul.multiMenu li a').click(function() {
        $("#mobileMenu").slideToggle();
        $('#menuBar').toggleClass('active');
    });
  /*===/End of Mobile Menu bar====*/
  /* Video Lightbox - Magnific Popup for Video Play section*/
  $('.popup_youtube, .popup_vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: function(url) {        
                    var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                    if ( !m || !m[1] ) return null;
                    return m[1];
                },
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
                index: 'vimeo.com/', 
                id: function(url) {        
                    var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                    if ( !m || !m[5] ) return null;
                    return m[5];
                },
                src: 'https://player.vimeo.com/video/%id%?autoplay=1'
            }
        }
    }
  });
  $('.popup_youtube_expertise, .popup_vimeo_expertise').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: function(url) {        
                    var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                    if ( !m || !m[1] ) return null;
                    return m[1];
                },
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
                index: 'vimeo.com/', 
                id: function(url) {        
                    var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                    if ( !m || !m[5] ) return null;
                    return m[5];
                },
                src: 'https://player.vimeo.com/video/%id%?autoplay=1'
            }
        }
    }
  });
  // Owl-Carousel All activation
  $(".app_carousel").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed: 500,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:false
        },
        576:{
            items:2            
        },
        1200:{
          items:3,
          nav:false,
          dots:true,
          center:true
        }
    }
  });
  /* Testimonial Carousel */
  $(".testimonial_carousel").owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    navText: ['<i class="las la-arrow-left"></i>', '<i class="las la-arrow-right"></i>'],
    items:1,
    responsive:{
      0:{
        margin:30
      }
    }
  });
  /* Counting number*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

/* Wow js */
new WOW({ mobile:false }).init();
