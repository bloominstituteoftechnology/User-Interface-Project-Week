const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  menuHeader.classList.toggle('menuHeaderExpanded');
  menuButton.style.display ="none";
  menuButtonExpanded.style.display = "block";
}
const collapseMenu = () => {
  menuButton.style.display ="block";
  menuButtonExpanded.style.display = "none";
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const menuHeader =document.querySelector('.menuHeader');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
const menuButtonExpanded = document.querySelector('.menuButtonExpanded')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener ('click',() => {
  toggleMenu();
});

menuButtonExpanded.addEventListener ('click',() => {
  toggleMenu();
  collapseMenu();
});























