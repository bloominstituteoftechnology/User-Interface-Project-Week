
let menuBtn = document.querySelector('#mainMenu');
let closeBtn = document.querySelector('#mainMenuClose');
let menuDiv = document.querySelector('#menuDiv');
let navMenu = document.querySelector('#navMenu');
let headerTopNavDiv = document.querySelector('#headerTopNavDiv');
let activePage = document.querySelector('#selectedPage');

closeBtn.classList.add('hidden');
navMenu.classList.add('hidden');


menuBtn.addEventListener('click',() => {
    menuDiv.classList.add('header-overlay');
    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    headerTopNavDiv.classList.remove('justCenter');
    headerTopNavDiv.classList.add('addMargin');
    navMenu.classList.remove('hidden');
    activePage.classList.add('selectedPage');
})

closeBtn.addEventListener('click',() => {
    menuDiv.classList.remove('header-overlay');
    menuBtn.classList.remove('hidden');
    headerTopNavDiv.classList.add('justCenter');
    headerTopNavDiv.classList.remove('addMargin');
    closeBtn.classList.add('hidden');
    navMenu.classList.add('hidden');
})


let logo = document.querySelector('#logo');
TweenMax.to(logo, 1, { x:100 ,  ease:Power2.easeIn });

let sjlogo = document.querySelector('#sjLogo');
TweenMax.to(sjlogo, 1, { x:100 ,  ease:Power2.easeIn });
    
let menu = document.querySelector('#menuDiv');
TweenMax.to(menu, 1, { y:50 ,  ease:Power2.easeIn } );

let hamburger = document.querySelector('#mainMenu');
TweenMax.to(hamburger, 1, { x:-100 ,  ease:Power2.easeIn } );
    

