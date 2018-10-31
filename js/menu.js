const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    TweenMax.to('.menu', 2, {right:100, opacity: .9, ease:Power2.easeOut});
    // TweenLite.to('.menu', 2.5, { ease: Bounce.easeInOut, y: 30 });
    // menu.classList.toggle('menu');
}

const toggleMenuOff = () => {
    menu.classList.toggle('menu--closed');
}


const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuButtonClosed = document.querySelector('.menu-button-closed');
const openedMenu = document.querySelector('.menu--open');
// const menuItems = document.querySelector('li');
menuButton.addEventListener('click', toggleMenu);
menuButtonClosed.addEventListener('click', toggleMenuOff)

// menuItems.addEventListener('click', hoverEffect);
