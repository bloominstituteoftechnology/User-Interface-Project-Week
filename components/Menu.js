const toggleMenu = () => {
  menu.classList.toggle('menu--open');
}
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');

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
