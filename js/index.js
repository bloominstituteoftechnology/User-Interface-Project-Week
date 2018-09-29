// nav expanded javascript
const hamburger = document.querySelector('.burgerMenu img');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    let close = 'close';
    if (hamburger.src.includes(close)) {
        hamburger.src = './img/nav-hamburger.png';
    } else {
        hamburger.src = './img/nav-hamburger-close.png';
    }
    nav.classList.toggle('bgChange');
    menu.classList.toggle('expand');
})
