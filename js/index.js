const navButton = document.querySelector('#nav-icon');
const navBar = document.querySelector('.main-nav');
const links = navBar.querySelectorAll('a');

// set flag to see if bar is expanded
let expanded = false;

function expandNavBar() {
  if (expanded === true) {
    TweenMax.to(navBar, 0.5, { ease: Power4.easeInOut, width: '0vw', height: '0vh' });
    links.forEach(i => TweenMax.to(i, 0.1, {ease: Bounce.easeInOut, opacity: 0}));
    navButton.src = 'img/nav-hamburger.png';
    expanded = false;
  }

  else {
    // navBar.classList.add('fullscreen-nav');
    TweenMax.to(navBar, 0.3, { ease: Power4.easeIn, width: '100vw', height: '100vh' });
    links.forEach(i => TweenMax.to(i, 0.41, {delay: 0.34, ease: Bounce.easeInOut, opacity: 0.9}));
    navButton.src = 'img/nav-hamburger-close.png';
    expanded = true;
  }
}

navButton.addEventListener('click', expandNavBar);
