
//---------------NAV MENU---------------------

const hamburgerButton = document.querySelector(".hamburger-button");
const xButton = document.querySelector(".x-button");
const menu = document.querySelector('.menu');

const headerText = document.querySelector(".header h1");

const toggleMenu = () => {

  menu.classList.toggle('menu--open');
  hamburgerButton.classList.toggle('button-close');
  xButton.classList.toggle('button-open');

  let string1 = 'menu--open';
  if (menu.classList.contains(string1)) {
      TweenMax.to('.menu--open', 1, {
      scaleY: 1,
      ease: Power4.easeOut,
    });
  } else {
    TweenMax.to('.menu', .6, {
      scaleY: 0,
      ease: Power4.easeOut,
    });
  }
  
  headerText.classList.toggle('opacity');
}


hamburgerButton.addEventListener('click', (e) => {
  toggleMenu();
});

xButton.addEventListener('click', (e) => {
  toggleMenu();
});


