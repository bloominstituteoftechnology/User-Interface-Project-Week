// Nav
let nav = document.querySelector('nav');
let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', e => {
    nav.style.display = (nav.style.display == 'none' ? 'flex' : 'none');
    navBtn.src = (nav.style.display == 'none' ? './img/nav-hamburger.png' : './img/nav-hamburger-close.png');
});

// Tabs
