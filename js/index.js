let toggleMenu = () => {
  //toggle menu
  menu.classList.toggle('menu-selected');
}


//reference menu
let menu = document.querySelector('.menu');

//reference menu Button
const menuOpen = document.querySelector('.menu-button');
menuOpen.addEventListener('click', toggleMenu);
