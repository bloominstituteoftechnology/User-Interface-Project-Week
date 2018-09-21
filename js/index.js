// JS goes here

//Navigation
const toggleMenu = () => {menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu-hidden');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.hamburger');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
