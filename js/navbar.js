// navbar.js - navbar logic on every page

const navButton = document.querySelector('nav img');
const navItems = document.querySelector('.nav-items');

let navState = false;

navButton.addEventListener('click', () => {

  navState = !navState;

  if (navState)
    navButton.src = "./img/nav-hamburger-close.png";

  else
    navButton.src = "./img/nav-hamburger.png";

  navItems.style.display = (navState) ? "block" : "none";

});
