'use strict';

// ----------------------------

/* INIT */
function init () {
 // Selectors for jQuery
 const $modal = $('#loginModal');
 const $openButtons = $('#openModalSidebar, #openModalHeader, #openModalAlert, #openModalAlertLink');
 const $closeButton = $('#closeModal');

 // --- ONLY PROCEED IF THE MODAL ELEMENTS EXIST ---
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
