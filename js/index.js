// JS goes here

//navigation overlay open/close
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".nav-btn");
let closeBtn = document.querySelector(".close-btn");

console.log(menuBtn)

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
});