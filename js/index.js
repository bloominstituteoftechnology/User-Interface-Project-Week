// JS goes here
const hamburger = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const brand = document.querySelector(".brand");

hamburger.addEventListener("click", function() {
  nav.classList.toggle("nav-toggle");
});
