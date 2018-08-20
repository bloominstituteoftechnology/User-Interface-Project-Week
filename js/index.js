// JS goes here
const hamburger = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');

const x = document.querySelector('.x');
hamburger.addEventListener('click', (event)=>{
    menu.classList.toggle('menu-hidden');
    console.log('hi');
})

 