// JS goes here

// nav bar click handler
const nav = document.querySelector(".hamburger-menu");
const navIcon = document.querySelector(".hamburger-icon");
navIcon.addEventListener("click", function() {
  nav.classList.toggle("hamburger-menu-toggle");
  document.querySelector(".nav-menu").classList.toggle("nav-hide");
  document.querySelector(".nav-x").classList.toggle("nav-show");
});
