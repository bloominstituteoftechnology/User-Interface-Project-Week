//navigation
const hamburger = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const header = document.querySelector('header');
let open = hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-show');

   header.classList.toggle('nav-show');
    if (header.classList.contains('nav-show')) {
    hamburger.src='img/nav-hamburger-close.png';
    hamburger.alt='Close Menu';
    } else {
    hamburger.src='img/nav-hamburger.png';
    hamburger.alt='Open Menu';
    }	    
 });