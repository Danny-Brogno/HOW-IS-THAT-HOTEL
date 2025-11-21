'use strict';
// ----------------------------

/* INIT */
function init () {
  // DROPDOWN MENU START
  function showAndHide() {
    $(".dropdown").toggleClass("hide");
    $(".dropdown").toggleClass("menu-on");
    $(".drop-links").toggleClass("menu-off");
    $(".alert-bar, .jumbotron, .dashboard-grid").toggleClass("blur");
  };
  
  function leaveMenu() {
    $(".dropdown").addClass("hide");
  };
  
  $(".fa-bars").click(showAndHide);
  $(".dropdown").mouseleave(leaveMenu);
  
  // DROPDOWN MENU END
  
  // ----------------------------------
  
  // NAVBAR OF GALLERY ON SCROLL
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
  // NAVBAR IN GALLERY ON SCROLL
  
  // ----------------------------------
  
  // SCROLL TO THE TOP START
  function scrollToTheTop() {
    $("html, body").animate({scrollTop: 0}, 500);
    return false;
  };
  $(".scroll-top-btn ul").click(scrollToTheTop);
  // SCROLL TO THE TOP END
  
  // ----------------------------------
  
  // POPUP EFFECT - CONTACT FORM - START
  
  /* Open */
  function openNav() {
    $("#myNav").css({display: "block", height: "100%"});
    $("body").addClass("overflow-hidden");
  }
  
  /* Close */
  function closeNav() {
    $("#myNav").css({display: "block", height: "0%"});
    $("body").removeClass("overflow-hidden");
  }
  
  $(".contact-now").click(openNav);
  $(".closebtn").click(closeNav);
  
  // POPUP EFFECT - CONTACT FORM - END
  
  // ----------------------------------
  
  // MAKE PICTURES BIGGER START
  function makePicturesBigger() {
    $('img[data-enlargable]').addClass('img-enlargable').click(function(){
        var src = $(this).attr('src');
        $('<div>').css({
            background: 'RGBA(0,0,0,.9) url('+src+') no-repeat center',
            backgroundSize: 'contain',
            width:'100%', 
            height:'100%',
            position:'fixed',
            zIndex:'10000',
            top:'0', 
            left:'0',
            cursor: 'pointer'
        }).click(function(){
            $(this).remove();
        }).appendTo('body');
    });
  }
  makePicturesBigger();
  // MAKE PICTURES BIGGER START
  
  // ----------------------------------
  
  // MAIN AUTOMATIC CAROUSEL START 
  // This hides all pics after the first one
  $('.slider>li:gt(0)').hide(); 
  
  // Start the automatic transition interval
  setInterval(function() {
    $('.slider > li:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slider'); 
  }, 3000);
  // MAIN AUTOMATIC CAROUSEL END
  
  // ----------------------------------
  
   // Selectors for jQuery
   const $modal = $('#loginModal');
   const $openButtons = $('#openModalSidebar, #openModalHeader, #openModalAlert, #openModalAlertLink');
   const $closeButton = $('#closeModal');

   if ($modal.length && $closeButton.length) {
     
   // Function to close the modal with fadeOut effect (Defined first so openModal can call it if needed)
   function closeModal() {
     $modal.removeClass('is-visible');
     // Wait for the transition (0.3s) to complete before hiding the element
     setTimeout(() => {
       $modal.css('display', 'none');
     }, 300);
    }

    // Function to open the modal with fadeIn effect
     function openModal(event) {
       // Prevent default action for anchor tags or buttons
       event.preventDefault(); 
       $modal.css('display', 'flex'); // Make it visible using flexbox
       // Timeout allows the display property to take effect before starting the transition
       setTimeout(() => {
         $modal.addClass('is-visible');
       }, 10);
     }

     /* (functions that are called here)*/
     // Event listeners for opening
     $openButtons.on('click', openModal);
      
     // Event listener for closing via the X button
     $closeButton.on('click', closeModal);

     // Event listener for closing when clicking outside the modal content
     $modal.on('click', (e) => {
       // Only close if the click target is the backdrop itself
       if (e.target === $modal[0]) { // Check against the native DOM element
         closeModal();
       }
     });

     // Placeholder function for actual login submission
     window.handleLogin = function() {
       const email = $('#email').val();
       const password = $('#password').val();
       if (email && password) {
         // In a real application, you would send this data to a server for Firebase authentication.
         console.log("Login attempt:", email);
         // Check if modal exists before trying to close it
         if ($modal.length) {
           closeModal(); 
         }
         // Optional: Show a temporary success message to the user here.
       } else {
         console.error("Please enter both email and password.");
         // Optional: Display an error message to the user in the modal.
       }
     }
   }
};

$(document).ready(init);
