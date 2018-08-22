// JS goes here

// Navigation JS
let menu = document.querySelector('.hamburger');
let content = document.querySelector('.dropdown-content');
let close = document.querySelector('.menu-close');

menu.addEventListener('click', () => {
    content.classList.toggle('hidden');
    menu.classList.toggle('img-hide');
    close.classList.toggle('img-hide');
});

close.addEventListener('click', () => {
    content.classList.toggle('hidden');
    menu.classList.toggle('img-hide');
    close.classList.toggle('img-hide');
});
