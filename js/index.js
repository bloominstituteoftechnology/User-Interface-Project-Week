// nav
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header.header');

let open = hamburger.addEventListener('click', () => {
    navigation.classList.toggle('navigation-show');
    header.classList.toggle('navigation-show');

    if (header.classList.contains('navigation-show')) {
        hamburger.src = 'img/nav-hamburger-close.png';
        hamburger.alt = 'Close Menu';
    }
    else {
        hamburger.src = 'img/nav-hamburger.png';
        hamburger.alt = 'Open Menu';
    }
});