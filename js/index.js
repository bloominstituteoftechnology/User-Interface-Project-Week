// JS goes here
//Navigation Overlay
//Open nav when clickimg on hamburger
function openNav() {
    document.querySelector(".nav-overlay").style.width = "100%";
    document.querySelector(".menu-button-close").style.display = "block";
    document.querySelector(".menu-button-expand").style.display = "none";

  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector(".nav-overlay").style.width = "0%";
    document.querySelector(".menu-button-close").style.display = "none";
    document.querySelector(".menu-button-expand").style.display = "block";
  }