const toggleMenu = () => {
  menu.classList.toggle('menu--open')
  menuButtonExpanded.classlist.toggle('menu-buttonExpanded--open')
  logoExpanded.classList.toggle('logoExpanded--open')
 //Toggle the "menu--open" class on your menu reference. 
}
const toggleButton = () => {
  menuButtonExpanded.classlist.toggle('menu-buttonExpanded--open')
 //Toggle the "menu--open" class on your menu reference. 
}
const toggleLogo = () => {
  logoExpanded.classList.toggle('logoExpanded--open')
 //Toggle the "menu--open" class on your menu reference. 
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');


// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
const menuButtonExpanded = document.querySelector('.menu-buttonExpanded')
const logoExpanded = document.querySelector('.logoExpanded')


// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener ('click',() => {
  toggleMenu();
  toggleButton();
  toggleLogo();
});
