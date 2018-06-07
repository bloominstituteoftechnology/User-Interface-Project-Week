// JS goes herelet overlay = document.querySelector(".overlay");
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".ham");
let closeBtn = document.querySelector(".x-home");

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
});
