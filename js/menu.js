const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  menuHeader.classList.toggle('menuHeaderExpanded');

}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const menuHeader =document.querySelector('.menuHeader');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener ('click',() => {
  toggleMenu();
});


//// EXPANDED BEHAVIOR ----------





















