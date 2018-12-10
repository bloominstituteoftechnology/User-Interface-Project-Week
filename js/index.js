// JS goes here
const hamburger = document.querySelector('.hb-btn');
const navLinks = document.querySelector('nav');
hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('show-nav');
    navLinks.classList.toggle('hidden');
});