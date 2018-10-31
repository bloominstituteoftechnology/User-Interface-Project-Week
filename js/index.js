// JS goes here
const hamburger = document.querySelector('.menu__hamburger');
const menuExpanded = document.querySelector('.menu-expanded');
const hamburgerClose = document.querySelector('.menu__hamburger--close');

hamburger.addEventListener('click', (e) => {
    menuExpanded.classList.toggle('menu-open');
    console.log(menuExpanded);
});
hamburgerClose.addEventListener('click',(e) => {
    e.stopPropagation();
    menuExpanded.classList.toggle('menu-open');
    console.log(menuExpanded);
});
