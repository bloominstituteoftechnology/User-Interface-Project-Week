// navigation toggle

const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.expandedNav');
const topNav = document.querySelector('.nav');
const hamburgerClosed = document.querySelector('.expandedNav__hamburgerClosed');

let counter = 0;
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('expand');
  topNav.classList.toggle('fixedNav');


  // alternate solution for a non-fixed navbar
  // counter for even or odd clicks to change icon
  counter++;
  if (counter % 2 != 0) {
    hamburger.src = './img/nav-hamburger-close.png';
  } else {
    hamburger.src = './img/nav-hamburger.png';
  }  
});



hamburgerClosed.addEventListener('click', () => {
  navMenu.classList.toggle('expand');
  topNav.classList.toggle('fixedNav');
  hamburger.src = './img/nav-hamburger.png'
});



