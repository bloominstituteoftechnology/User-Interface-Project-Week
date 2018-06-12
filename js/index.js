// JS goes here

// HEADER TURNS GREY WHEN SCROLLED

let header = document.getElementsByClassName('header');
window.addEventListener('scroll', () => {
    header.setAttribute('style', 'background: #9DA7B1, opacity:.95');
});