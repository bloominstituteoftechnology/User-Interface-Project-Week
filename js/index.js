// JS goes here

// HEADER TURNS GREY WHEN SCROLLED

greyScrollbar = function() {
    header.style.background = '#9DA7B1';
    header.style.opacity = '.95';
}

let header = document.querySelector('.header');
window.addEventListener('scroll', greyScrollbar);