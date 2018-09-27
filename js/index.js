// navigation toggle

const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.expandedNav');
// const navMenuLinks = document.querySelector('.expandedNav__links');
const nav = document.querySelector('.nav');

let counter = 0
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('expand');
  counter++;
  // console.log(counter);
  if (counter % 2 != 0) {
    hamburger.src = './img/nav-hamburger-close.png';
  } else {
    hamburger.src = './img/nav-hamburger.png';
  }  
});



