// JS goes here

let menu = document.querySelector('.hamburger');
let navLinks = document.querySelector('.links');
let xMark = document.querySelector('.x-mark')

function expand() {
        menu.classList.toggle('hide');
        navLinks.classList.toggle('hide');
        xMark.classList.toggle('hide');
    };


menu.addEventListener('click', () => {expand()});
xMark.addEventListener('click', () => {expand()});