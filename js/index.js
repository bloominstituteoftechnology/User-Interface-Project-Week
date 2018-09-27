const navButton = document.querySelector('#nav-icon');
const navBar = document.querySelector('.main-nav');
const links = navBar.querySelectorAll('a');

// set flag to see if bar is expanded
let expanded = false;

function expandNavBar() {
  if (expanded === true) {
    TweenMax.to(navBar, 0.3, { width: '0vw', height: '0vh' });
    navButton.src = 'img/nav-hamburger.png';
    expanded = false;
  }

  else {
    // navBar.classList.add('fullscreen-nav');
    TweenMax.to(navBar, 0.3, { width: '100vw', height: '100vh' });
    navButton.src = 'img/nav-hamburger-close.png';
    expanded = true;
  }
}

navButton.addEventListener('click', expandNavBar);
