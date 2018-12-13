const menuOpen = () => {
  menu.style.display = 'block';
  menuButton.style.display = 'none';
  TweenMax.from(menu, 2, {
    ease: Power4.easeOut,
    height: 0,
    width: 0,
    top: 0,
    fontSize: 0,
});
}

const menuClose = () => {
 if (menu.style.display === 'block'){
   menu.style.display = 'none';
   menuButton.style.display = 'block';
 }
 TweenMax.to(menu, 2, {
  ease: Power4.easeOut,
  // height: 100,
  // width: 100,
  // top: 0,
});
 
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', menuOpen);
closeButton.addEventListener('click', menuClose);