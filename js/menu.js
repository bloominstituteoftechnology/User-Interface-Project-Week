const toggleMenu = () => {
    // menuButton.stopPropagation();
    menu.classList.toggle('menu-closed')
    menu.classList.toggle('menu-open');
    TweenMax.to('.menu', 2, { opacity: .9, ease:Power2.easeOut});
    // TweenLite.to('.menu', 2.5, { ease: Bounce.easeInOut, y: 30 });
    // menu.classList.toggle('menu');
}

const toggleMenuOff = () => {
    // menuButtonClosed.stopPropagation();
    menu.classList.toggle('menu-open');
    menu.classList.toggle('menu-closed');
    
}

// menuButton.addEventListener('click', () => {
//     menu.classList.toggle('menu--open');
// });


const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuButtonClosed = document.querySelector('.menu-button-closed');

const closedMenu = document.querySelector('.menu-closed')
const openedMenu = document.querySelector('.menu-open');

menuButton.addEventListener('click', toggleMenu);
menuButtonClosed.addEventListener('click', toggleMenuOff);

// menuItems.addEventListener('click', hoverEffect);
