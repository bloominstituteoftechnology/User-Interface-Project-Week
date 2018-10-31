// JS goes here
const hamburger = document.querySelector('.menu__hamburger');
const menuExpanded = document.querySelector('.menu-expanded');
const hamburgerClose = document.querySelector('.menu__hamburger--close');

hamburger.addEventListener('click', (e) => {
    menuExpanded.style.display = 'block';
    console.log('click1');
});
hamburgerClose.addEventListener('click',(e) => {
    e.stopPropagation();
    e.preventDefault();
    menuExpanded.style.display = 'none'
    console.log('click2');
});
