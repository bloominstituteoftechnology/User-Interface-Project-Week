// JS goes here
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".ham");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
});