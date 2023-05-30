(function($) { "use strict";


// star-rating
$('.star-icon').each(function() {
  $(this).hover(function() {
    $(this).prevAll().addBack().css("color", "#3CAA9F");
  }, function() {
    if (!$(this).parent().attr("data-rating")) {
      $(this).prevAll().addBack().css("color", "lightgrey");
    } else {
      $(this).siblings().addBack().each(function(index) {
        index + 1 <= $(this).parent().attr("data-rating") ? 
          $(this).css("color", "#3CAA9F") : $(this).css("color", "lightgrey");
      });
    }
  }).click(function () {
    $(this).parent().attr("data-rating", $(this).prevAll().length + 1);
  });
});

// mobile-drop-down
jQuery('.dropdown-icon').on('click',function(){
  // alert()
  // $(this).next('.mob-submenu').slideToggle();
  jQuery(this).toggleClass('active').next('ul').slideToggle();
  jQuery(this).parent().siblings().children('ul').slideUp();
  jQuery(this).parent().siblings().children('.active').removeClass('active');
});


//Preloder
jQuery(window).on('load', function () {
  $(".egns-preloader").delay(1600).fadeOut("slow");
});

 // niceSelect
 $('select').niceSelect();


// sticky header

window.addEventListener('scroll',function(){
  const header = document.querySelector('header.style-1, header.style-2, header.style-3, header.style-4, header.style-5');
  header.classList.toggle("sticky",window.scrollY > 0);
});

// mobile-search-area

$('.search-btn').on("click", function(){
  $('.mobile-search').addClass('slide');
});

$('.search-cross-btn').on("click", function(){
  $('.mobile-search').removeClass('slide');
});
// sidebar-area

$('.sidebar-btn').on("click", function(){
  $('.hero-sidebar').addClass('slide');
});

$('.sidebar-close-btn').on("click", function(){
  $('.hero-sidebar').removeClass('slide');
});
// h4 side bar

$('.deshboar').on("click", function(){
  $('.author-side-bar').addClass('slide');
});

$('.close-btn').on("click", function(){
  $('.author-side-bar').removeClass('slide');
});

// scroll button
$(window).on('scroll',function() {
  if ($(window).scrollTop() > 300) {
    $('.scroll-btn').addClass('show');
  } else {
    $('.scroll-btn').removeClass('show');
  }
});
$('.scroll-btn').on('click',function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// mobile-menu

$('.mobile-menu-btn').on("click",function(){
  $('.main-menu').addClass('show-menu');
});

$('.menu-close-btn').on("click",function(){
  $('.main-menu').removeClass('show-menu');
});
// mobile menu two by shimul
$('.mobile-menu-btn').on("click",function(){
  $('.main-menu2').toggleClass('show-menu');
});

$('.menu-close-btn').on("click",function(){
  $('.main-menu2').removeClass('show-menu');
});



// Magnific Popup video
$('.popup-youtube').magnificPopup({
  type: 'iframe'
});
$('.popup-img').magnificPopup({
  type: 'iframe'
});

// tab-active
$(".nav-tabs .nav-item .nav-link").on("click", function() {
  $(".nav-tabs .nav-item .nav-link").removeClass("active");
  $(this).addClass("active");
});

// Feature slider
var swiper = new Swiper(".feature-slider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// Testimonial Slider2
var swiper = new Swiper(".testimonial-slider2", {
loop: true,
loopFillGroupWithBlank: true,
speed:2000,
autoplay: {
delay: 5000,
},
navigation: {
nextEl: ".swiper-button-next-g",
prevEl: ".swiper-button-prev-g",
},
});

//  testimonil slider1
var swiper = new Swiper(".testimonial-slider-1", {
slidesPerView: 2,
spaceBetween: 60,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
speed:2000,
  autoplay: {
    delay: 5000,
  },
navigation: {
  nextEl: ".swiper-button-next-e",
  prevEl: ".swiper-button-prev-e",
},
breakpoints: {
    280:{
      slidesPerView: 1
    },
    480:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 1
    },
    992:{
      slidesPerView: 2
    },
    1200:{
      slidesPerView: 2
    },
    1400:{
      slidesPerView:2
    },
    1600:{
      slidesPerView: 2
    },
  }
});

// Room Suits slider
var swiper = new Swiper(".room-suits-slider", {
slidesPerView: 3,
spaceBetween: 30,
loop: true,
loopFillGroupWithBlank: true,
// speed:1500,
//   autoplay: {
//     delay: 2000,
//   },
  pagination: {
    el: ".pagination-style1",
  },
breakpoints: {
  280:{
    slidesPerView: 1
  },
  480:{
    slidesPerView: 1
  },
  768:{
    slidesPerView: 2
  },
  992:{
    slidesPerView: 3
  },
  1200:{
    slidesPerView: 3
  },
  1400:{
    slidesPerView:3
  },
  1600:{
    slidesPerView: 3
  },
}
});

// Offer Slider 1
var $swiper = $(".offer-slider1");
var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
// into a fixed position for animation purposes
var $bottomSlideContent = null; // Slide content that gets passed between the
// panning slide stack and the position 'behind'
// the stack, needed for correct animation style

var mySwiper = new Swiper(".offer-slider1", {
spaceBetween: 1,
slidesPerView: 3,
centeredSlides: true,
roundLengths: true,
loop: true,
loopAdditionalSlides: 30,
spaceBetween: 20,
speed:1500,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next-f",
    prevEl: ".swiper-button-prev-f",
  },
breakpoints: {
  280:{
    slidesPerView: 1
  },
  480:{
    slidesPerView: 1
  },
  768:{
    slidesPerView: 2
  },
  992:{
    slidesPerView: 3
  },
  1200:{
    slidesPerView: 3
  },
  1400:{
    slidesPerView:3
  },
  1600:{
    slidesPerView: 3
  },
}

});



  $(".counter-item").each(function() {
    $(this).isInViewport(function(status) {
        if (status === "entered") {
            for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                var el = document.querySelectorAll('.odometer')[i];
                el.innerHTML = el.getAttribute("data-odometer-final");
            }
        }
    });
});

jQuery('#datepicker').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker1').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker2').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker3').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker4').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker5').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker6').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker7').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});

jQuery('#datepicker8').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker9').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker10').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker11').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker12').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker13').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker14').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker15').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker16').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});
jQuery('#datepicker17').datepicker({
  format: 'dd-mm-yyyy',
  startDate: '+1d'
});


}(jQuery));
