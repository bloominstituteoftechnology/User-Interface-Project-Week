// JS goes here

let menu = document.querySelector('.menu img');
let nav = document.querySelector('.nav-links');

// Add Functionality to the Nav Menu
menu.addEventListener('click', function() {
  nav.classList.toggle('nav-links-hidden');
  if(menu.src.includes("img/nav-hamburger.png")) {
    menu.src = "img/nav-hamburger-close.png";
  } else {
    menu.src = "img/nav-hamburger.png"
  }
})