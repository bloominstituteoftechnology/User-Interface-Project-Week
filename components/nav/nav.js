const navBtn = document.querySelectorAll('.nav-menu-btn');
const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
const topBar = document.querySelector('.topbar');

navBtn.forEach( (item) => {
    item.addEventListener('click', () => {
        console.log('Hamburger clicked');
        nav.classList.toggle('nav-display-toggle');
        console.log(nav.classList);
        navOpen.classList.toggle('display-toggle');
        console.log(navOpen.classList);
        navClose.classList.toggle('display-toggle');
        console.log(navClose.classList);
    })
})

