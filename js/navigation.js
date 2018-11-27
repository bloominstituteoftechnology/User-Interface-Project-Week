const nav = document.querySelector('.nav')
const menuButton = document.querySelector('.menu .menu-button');
const menuContent = document.querySelector('.menu .menu-content');

const expandAndClose = () => {
  if (menuContent.classList.contains('inactive')) {
    nav.classList.add('nav-expanded');
    menuContent.classList.remove('inactive');
    menuButton.innerHTML = '<img src="./img/nav-hamburger-close.png" />';
    TweenMax.fromTo('.menu-content', .7, {opacity: 0}, {opacity: 1});
  } else {
    nav.classList.remove('nav-expanded');
    menuContent.classList.add('inactive');
    menuButton.innerHTML = '<img src="./img/nav-hamburger.png" />'


  }

}

menuButton.addEventListener('click', expandAndClose);


