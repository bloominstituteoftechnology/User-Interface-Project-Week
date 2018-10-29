let nav = document.querySelector('.navigation');

let hamburger = document.querySelector('.hamburger-menu');
let menuItems = document.querySelector('.navigation-links');

let jumbotron = document.querySelector('.home-jumbotron');

hamburger.addEventListener('click', () => {
        nav.classList.toggle('max-height');
        menuItems.classList.toggle('links-hidden');
        jumbotron.classList.toggle('hide-jumbo');

        if (menuItems.classList.contains('links-hidden')) {
            hamburger.src = 'img/nav-hamburger.png';
        } else {
            hamburger.src = 'img/nav-hamburger-close.png';
        }
})