
//---------------NAV MENU---------------------

const headerText = document.querySelector(".header h1");

const hamburgerButton = document.querySelector(".hamburger-button");
const xButton = document.querySelector(".x-button");
const menu = document.querySelector('.menu');

const toggleMenu = () => {

  menu.classList.toggle('menu--open');
  hamburgerButton.classList.toggle('button-close');
  xButton.classList.toggle('button-open');

  TweenMax.to('.menu', 3, {
    scaleY: 1,
    ease: Power4.easeOut,
  });
  
  headerText.classList.toggle('opacity');

}


hamburgerButton.addEventListener('click', (e) => {
  
  toggleMenu();
  
});

xButton.addEventListener('click', (e) => {
  toggleMenu();
});


