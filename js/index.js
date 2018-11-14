// JS goes here
let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu-button');
let menuClose = document.querySelector('.menu-close')

menuButton.addEventListener('click',(event)=>{
    menu.classList.toggle('menu-open');
    menuButton.classList.toggle('buttonClosed');
    menuClose.classList.toggle('buttonClosed');
});

menuClose.addEventListener('click',(event)=>{
    menu.classList.toggle('menu-open');
    menuButton.classList.toggle('buttonClosed');
    menuClose.classList.toggle('buttonClosed');
});