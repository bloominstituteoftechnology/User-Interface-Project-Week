const menuOpen = () => {
  menu.style.display = 'block';
  menuButton.style.display = 'none';
}

const menuClose = () => {
 if (menu.style.display === 'block'){
   menu.style.display = 'none';
   menuButton.style.display = 'block';
 }
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', menuOpen);
closeButton.addEventListener('click', menuClose);