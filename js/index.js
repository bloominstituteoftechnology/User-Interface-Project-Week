// JS goes here

// functionality for nav menu to open and close
// i know, i know, this is an ugly function. i was in a time crunch.
const navBurger = document.querySelector('.nav-burger');
const dropdownNav = document.querySelector('.dropdown-nav');
const navBar = document.querySelector('nav');
const fixedNav = document.querySelector('.fixed-nav');

navBurger.addEventListener('click', () => {
    // menu-open should be menu-closed. got it backwards. whoops
    if (navBurger.classList.contains('menu-open')) {
        // expand
        navBurger.classList.remove('menu-open');
        navBurger.src = '/img/nav-hamburger-close.png';
        dropdownNav.style.display = 'flex';
        dropdownNav.style['flex-direction'] = 'column';
        navBar.style.display = 'block';
        fixedNav.style['justify-content'] = 'flex-start';
    } else {
        // hide menu
        navBurger.classList.add('menu-open');
        navBurger.src = '/img/nav-hamburger.png';
        dropdownNav.style.display = 'none';
    }



});

