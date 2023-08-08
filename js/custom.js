$(document).ready(function(){

  // Sticky Header Navigation

  $(function() {
    var header = $(".main-nav");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            header.addClass("sticky-header");
        } else {
            header.removeClass("sticky-header");
        }
    });
  
});

// Search Popup
$('.search-toggle').on('click', function(event){
  event.stopPropagation();

  $('.search-block').toggleClass('visible');
  $('.search-block .search_input').focus();
});

$('body').on('click', function(){
  $('.search-block').removeClass('visible');
});

$('.search-inner').on('click', function(event){
  event.stopPropagation();
});

$('.search_input').on('keyup', function(event){
  if($(this).val() !== ''){
    $(this).addClass('typing');
  } else {
    $(this).removeClass('typing');
  }
});

// Hero Slider
$('.hero-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  autoplay:true,
  autoplaySpeed:5000,
  speed: 2000
}).slickAnimation();

// Testimonials Slider

$('.testimonials-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  arrows:true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
  ]

});

// Portfolio Gallery Slider

$('.portfolio-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Media Query Condition 
const mediaQuery = window.matchMedia('(max-width: 991.98px)')

if (mediaQuery.matches) {
  
// Pricing Slider
$('.pricing-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay: false,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '20px',
        
      }
    }
  ]
});

// Blog Slider
$('.blog-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay: false,
  centerMode: true,
  centerPadding: '100px',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '20px',
        
      }
    }
  ]
});

}


// Client Logo Slider

$('.client-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
  ]
});
	
// Counter Section count up
var countsec = $('.counter-sec');
if (countsec.length) {

  var counted = 0;
  $(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            
          }

        });
    });
    counted = 1;
  }

});
}



// Back to Up Scroll Button

  var btn = $('#scroll-up-btn');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

 // Portfolio Gallaery

$( function() {
  var $grid = $(".grid").isotope({
    itemSelector: ".gallery-item",
    percentPosition: true,
    masonry: {
      columnWidth: ".gallery-item"
    }
  })
  // filter buttons
  $('#filters  li').click(function(){
    $('#filters li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });

});

// Canvas Menu Toggle

jQuery(document).ready(function($) {
  $(".canvas-menu-toggle").click(function(e) {	 
       e.preventDefault();	
       $("#canvas-close-toggle").toggleClass("active");	
       $("#canvas-menu").toggleClass("active");
       $(".canvas-menu-overlay").toggleClass("open");	
   });
});

// Canvas Navigation Menu List
const parentMenuItems = document.querySelectorAll('ul.mobile-menu .parent-item');
const submenusList = document.querySelectorAll('.parent-item .submenu');

parentMenuItems.forEach(parentMenu => {
parentMenu.addEventListener("click", toggleSubmenu);
})
function toggleSubmenu() {
	let submenu = this.getElementsByClassName('submenu')[0];
	this.classList.toggle('active');
	submenu.classList.toggle('active');
}

// ===== wow js
new WOW().init();
