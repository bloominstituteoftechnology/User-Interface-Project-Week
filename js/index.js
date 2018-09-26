const navButton = document.querySelector('#nav-icon');
const navBar = document.querySelector('.main-nav');

function expandNavBar() {
  if (navBar.classList.contains('fullscreen-nav')) {
    navBar.classList.remove('fullscreen-nav');
    navButton.src = 'img/nav-hamburger.png';
  }

  else {
    navBar.classList.add('fullscreen-nav');
    navButton.src = 'img/nav-hamburger-close.png';
  }
}

navButton.addEventListener('click', expandNavBar);
