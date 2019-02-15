// JS goes here

function toggle() {
    menu.classList.toggle('menu-hidden');
}



const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');
const menu = document.querySelector('.menu-hidden');

menuBtn.addEventListener('click', toggle);
closeBtn.addEventListener('click', toggle);