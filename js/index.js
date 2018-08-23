// JS goes here

const menu = document.querySelector('.menu-button');
const content = document.querySelector('.dropdown-content');
const close = document.querySelector('.menu-close');

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