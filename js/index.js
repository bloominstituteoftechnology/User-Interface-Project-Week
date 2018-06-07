// JS goes here
let menuButton = document.querySelector(".nav-icon");
let nav = document.querySelector(".nav-bar")
menuButton.addEventListener('click', () => {
  nav.classList.toggle("nav-bar-active");
  //nav.classList.add("nav-bar-active");
});
