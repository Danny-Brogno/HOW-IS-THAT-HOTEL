'use strict';
// ----------------------------

// scrollImage START
function scrollImage() {
  $(window).scroll(function() {
    var scroll_position = $(window).scrollTop() / 2;
    $("main .jumbotron section").css({
      'background-position-x' : + scroll_position + 'px',
    })
  })
}
// scrollImage END

// NAVBAR OF GALLERY ON SCROLL START
function navbarOnScroll() {
  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
}
// NAVBAR IN GALLERY ON SCROLL END

// SCROLL TO THE TOP START
function scrollToTheTop() {
  $("html, body").animate({scrollTop: 0}, 500);
  return false;
};
// SCROLL TO THE TOP END

// ----------------------------

/* INIT */
function init () {
  scrollImage();
  navbarOnScroll();
  $(".scroll-top-btn ul").click(scrollToTheTop);
};

$(document).ready(init);