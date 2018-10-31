const navBtn = document.querySelectorAll('.nav-menu-btn');
const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
const topBar = document.querySelector('.topbar');
const logo = document.querySelector('.logo');

navBtn.forEach( (item) => {
item.addEventListener('click', () => {                                navOpen.classList.toggle('display-toggle');
        nav.classList.toggle('nav-display-toggle'); 
        navClose.classList.toggle('display-toggle');
        // logo.classList.toggle('display-toggle');
        navLinks.forEach( (link) => link.classList.toggle('display-toggle'));
    })
})

