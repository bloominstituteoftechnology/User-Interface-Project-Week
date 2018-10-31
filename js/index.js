// JS goes here

// navbar menu

const navBurger = document.querySelector('.navBurger');
const dropdownNav = document.querySelector('.dropdownNav');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.navBar');

navBurger.addEventListener('click', () => {
    // menu-open should be menu-closed. got it backwards. whoops
    if (navBurger.classList.contains('navOpen')) {
        // expand
        navBurger.classList.remove('navOpen');
        navBurger.src = '/img/nav-hamburger-close.png';
        dropdownNav.style.display = 'flex';
        dropdownNav.style['flex-direction'] = 'column';
        navBar.style.display = 'block';
        fixedNav.style['justify-content'] = 'space-around';
    } else {
        // hide menu
        navBurger.classList.add('navOpen');
        navBurger.src = '/img/nav-hamburger.png';
        dropdownNav.style.display = 'none';
    }
});