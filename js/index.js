// JS goes here

//Navigation

const toggleMenu = () => {menu.classList.toggle('menu--open');
menuClosed.style.opacity = ('0');
  // Toggle the "menu--open" class on your menu refence. 
};

// Create a reference to the ".menu"  and ".menuClosed" class
const menu = document.querySelector('.menu');

// create a reference to the ".hamburger" class
const menuButton = document.querySelector('.hamburger');

// add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

