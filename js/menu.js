const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    // menuButton.classList.toggle('hide-hamburger');
    if (imgTracker === 'open') {
        menuButton.src='img/nav-hamburger-close.png';
        imgTracker = 'closed';
    } else {
        menuButton.src='img/nav-hamburger.png'
        imgTracker = 'open';
    }
}


const menu = document.querySelector('.menu-overlay');
const menuButton = document.querySelector('.menu-button');
let imgTracker = 'open';
menuButton.addEventListener('click', toggleMenu);
