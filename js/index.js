// JS goes here

//---------------NAV MENU---------------------

const headerText = document.querySelector(".header h1");

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  headerText.style.opacity = .2;
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class

const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => {
  toggleMenu();
});


// TweenMax.to(".menu", 2, {
//   width: 350,
// });

// TweenLite.to(graph, 2.5, { ease: Power2.easeOut, y: -500 });
