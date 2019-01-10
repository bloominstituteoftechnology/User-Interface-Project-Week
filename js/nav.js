const toggleMenu = () => menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu reference. 


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
  // console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close')
  // console.log(menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);