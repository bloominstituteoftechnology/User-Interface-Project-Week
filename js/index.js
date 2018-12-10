// JS goes here


// VARIABLES
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.top-nav');
const sections = document.querySelectorAll('section');

const homeBanner = document.querySelector('.home-banner');
const contentContainer = document.querySelector('.content-container');
const footer = document.querySelector('footer');

// EVENT LISTENERS
hamburgerMenu.addEventListener('click', () => toggleMenu())
closeMenu.addEventListener('click', () => toggleMenu());



toggleMenu = function () {
  hamburgerMenu.classList.toggle('hide')
  closeMenu.classList.toggle('hide');
  nav.classList.toggle('hide');
  homeBanner.classList.toggle('home-banner');
  homeBanner.classList.toggle('hide');
  navBar.classList.toggle('open-menu');
  contentContainer.classList.toggle('hide');
  footer.classList.toggle('hide')

  console.log(homeBanner);
}