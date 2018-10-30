const navBtn = document.querySelectorAll('.nav-menu-btn');
const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
const topBar = document.querySelector('.topbar');

navBtn.forEach( (item) => {
    item.addEventListener('click', () => {
        nav.classList.toggle('nav-display-toggle');
        navOpen.classList.toggle('display-toggle');
        navClose.classList.toggle('display-toggle');
    })
})

