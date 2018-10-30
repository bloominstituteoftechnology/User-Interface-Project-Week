const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
const topBar = document.querySelector('.topbar');

navOpen.addEventListener('click', () => {
    console.log('Hamburger clicked');
        topBar.style.display = 'none';
        nav.style.display = 'flex';
        console.log(nav.classList);
    navClose.addEventListener('click', () => { 
        nav.style.display = 'none';
        topBar.style.display = 'flex';
    })
    })

