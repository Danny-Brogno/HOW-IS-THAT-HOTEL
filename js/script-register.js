'use strict';
// ----------------------------

// openCity START (Used for switching between Login and Sign Up tabs)
function openCity(evt, cityName) {
  // 1. Hide all tab content elements
  $('.tabcontent').hide();

  // 2. Remove the 'active' class from all tab link elements
  $('.tablinks').removeClass('active');

  // 3. Show the specific content panel based on the cityName (the content ID)
  $('#' + cityName).show();

  // 4. Add the 'active' class to the clicked tab/link
  // If the function was triggered by a user click (evt exists)
  if (evt && evt.currentTarget) {
      $(evt.currentTarget).addClass('active');
  } else {
      // If called by the init function (on page load), find the button that links to this content and activate it
      // This ensures the button is highlighted when the page loads.
      // In this case, we rely on the specific ID used in the init function below.
      $('.tablinks[onclick*="' + cityName + '"]').addClass('active');
  }
}
// openCity END

// ----------------------------

/* INIT */
function init() {
  // --- SET DEFAULT TO 'SIGN UP' ---
  // Using the ACTUAL IDs from register.html:
  const signUpContentID = 'sign-up';     // ID of the Sign Up content div
  const signUpButtonID = 'defaultOpen'; // ID of the Sign Up button
  
  // 1. Force the Sign Up content panel to open on load
  openCity(null, signUpContentID); 

  // 2. Force the 'active' class onto the Sign Up button for highlighting
  $("#" + signUpButtonID).addClass('active'); 
};

$(document).ready(init);