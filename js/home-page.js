//   Navigatioon System Design

const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

let menu = document.querySelector('.menu');
console.log(menu);

let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);

let container = document.querySelector('.container');



// function to toggle the menu button

let image_tracker = 'close';
const change = () => {
    let image = document.querySelector('.menu-button');
    if(image_tracker === 'open'){
        image.src = './img/nav-hamburger.png';
        image_tracker = 'close'
    }else{
        image.src = './img/nav-hamburger-close.png';
        image_tracker = 'open';
    }
}