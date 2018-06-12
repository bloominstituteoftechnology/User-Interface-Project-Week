// HEADER TURNS GREY WHEN SCROLLED

greyScrollbar = function() {
    header.style.background = '#9DA7B1';
    header.style.opacity = '.95';
}

let header = document.querySelector('.header');
window.addEventListener('scroll', greyScrollbar);

// NAVIGATION OVERLAYS SCREEN WHEN CLICKED ON AND OFF

let overlay = document.querySelector('.navigation-overlay');
let navBtn = document.querySelector('.header-icon');
let navCloseBtn = document.querySelector('.header-close-icon');
let headerLogo = document.querySelector('.logo');

navBtn.addEventListener('click', () => {
    overlay.setAttribute('style', 'display: block');
    navCloseBtn.setAttribute('style', 'display: block');
    navBtn.setAttribute('style', 'display: none');
})

navCloseBtn.addEventListener('click', () => {
    overlay.setAttribute('style', 'display: none');
    navCloseBtn.setAttribute('style', 'display: none');
    navBtn.setAttribute('style', 'display: block');
});