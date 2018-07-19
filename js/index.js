// Nav expansion

let nav = document.querySelector('nav');
let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', e => {
    if (nav.style.display == 'none') {
      TweenMax.fromTo(nav, .75, {y: -600}, {y: 0, ease: Power2.ease});
      nav.style.display =  'flex';
      navBtn.src = './img/nav-hamburger-close.png';
    } else {
      TweenMax.fromTo(nav, .5, {y: 0}, {y: -800, ease: Power2.ease, onComplete: () => {
        nav.style.display = 'none';
        navBtn.src = './img/nav-hamburger.png';
      }});
    }
});