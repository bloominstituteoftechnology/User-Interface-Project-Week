// JS goes here

const hamburger = document.querySelector('.burgerMenu img');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(event) {
    let close = 'close';
    if (hamburger.src.includes(close)) {
        hamburger.src = './img/nav-hamburger.png';
    } else {
        hamburger.src = './img/nav-hamburger-close.png';
    }
    menu.classList.toggle('expand');
})
