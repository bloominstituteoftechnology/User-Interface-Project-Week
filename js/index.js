// JS goes here

let menu = document.querySelector('.menu img');
let nav = document.querySelector('.nav-links');

// Add Functionality to the Nav Menu
menu.addEventListener('click', function() {
  nav.classList.toggle('nav-links-hidden');
  if(menu.src == "file:///C:/Users/Philmanic%203000/Desktop/Lambda-School/Projects/User-Interface-Project-Week/img/nav-hamburger.png") {
    menu.src = "img/nav-hamburger-close.png";
  } else {
    menu.src = "img/nav-hamburger.png"
  }
})