// navbar.js - navbar logic on every page

const navButton = document.querySelector('nav img');
const navItems = document.querySelector('.nav-items');
const links = navItems.querySelectorAll('a');

let navState = false;

navButton.addEventListener('click', () => {

  navState = !navState;

  if (navState) {

    navItems.style.display = 'block';
    navButton.src = "./img/nav-hamburger-close.png";
    TweenMax.fromTo(navItems, 1, {opacity: 0, yPercent: -50}, {opacity: 1, yPercent: 0, onComplete: () => {

      for (let i = 0; i < links.length; i++) {

        TweenMax.fromTo(links[i], 0.7, {opacity: 0, scale: 0, rotation: 0, yPercent: -10}, {opacity: 1, scale: 1, rotation: 360, yPercent: 0, delay: 0.3 * i});

      }

    }});

  }

  else {

    navButton.src = "./img/nav-hamburger.png";
    TweenMax.fromTo(navItems, 1, {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -50, onComplete: () => {

      navItems.style.display = "none";

      links.forEach(link => link.style.opacity = 0);

    }});

  }

});

links.forEach(link => {

  link.addEventListener('mouseenter', () => {

    TweenMax.to(link, 1, {scale: 1.5});

  });

  link.addEventListener('mouseleave', () => {

    TweenMax.to(link, 1, {scale: 1});

  });

});
