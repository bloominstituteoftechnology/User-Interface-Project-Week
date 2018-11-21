//navigation
const hamburger = document.querySelector('.menu-button');
const nav = document.querySelector('.navigation a');
const header = document.querySelector('.navigation');
let open = hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-show');

   header.classList.toggle('nav-show');
    if (header.classList.contains('nav-show')) {
    hamburger.src='img/nav-hamburger-close.png';
    hamburger.alt='closed';
    } else {
    hamburger.src='img/nav-hamburger.png';
    hamburger.alt='open';
    }	    
 });
