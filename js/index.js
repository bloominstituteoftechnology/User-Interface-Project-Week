const navButton = document.querySelector('#nav-icon');
const navBar = document.querySelector('.main-nav');

function expandNavBar() {
  if (navBar.classList.contains('fullscreen-nav')) {
    TweenMax.to(navBar, .5, {width: "0vw", height: "0vh"});
    navBar.classList.remove('fullscreen-nav');
    navButton.src = 'img/nav-hamburger.png';
  }

  else {
    navBar.classList.add('fullscreen-nav');
    TweenMax.to(navBar, .5, {width: "100vw", height: "100vh"});
    navButton.src = 'img/nav-hamburger-close.png';

  }
}

navButton.addEventListener('click', expandNavBar);
