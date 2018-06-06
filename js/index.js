// JS goes here
var last_known_scroll_position = 0;
let myNav = document.querySelector(".navigation");

// Nav darkens on scroll
window.addEventListener('scroll', function() {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position >= 300) {
        myNav.classList.add("nav-bottom")
    } else {
        myNav.classList.remove("nav-bottom")
    }
})
// End of Nav darken on scroll

// Dropdown/Overlay Function
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".close-btn");

console.log(menuBtn)

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "flex";
  myNav.style.display = "none";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
  myNav.style.display = "flex";
});
// End of Dropdown/Overlay Function