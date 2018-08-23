const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu();
  let folder = menuButton.src.split('/')[9];
  let img = menuButton.src.split('/')[10];
  let srcLink = './' + folder + '/' + img;
  
  if(srcLink == './img/nav-hamburger.png') {
    menuButton.src = './img/nav-hamburger-close.png';
  } else {
    menuButton.src = './img/nav-hamburger.png';
  }
});
