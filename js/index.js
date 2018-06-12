// JS goes here
let menuButton = document.querySelector(".nav-icon");
let nav = document.querySelector(".nav-bar")
menuButton.addEventListener('click', () => {
  nav.classList.add("nav-bar-active");
  //nav.classList.add("nav-bar-active");
});

let exitButton = document.querySelector(".nav-icon-close");
exitButton.addEventListener('click', () => {
  nav.classList.remove("nav-bar-active");
})
