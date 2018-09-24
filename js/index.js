
let menuBtn = document.querySelector('#mainMenu');
let closeBtn = document.querySelector('#mainMenuClose');
let menuDiv = document.querySelector('#menuDiv');
let navMenu = document.querySelector('#navMenu');
let headerTopNavDiv = document.querySelector('#headerTopNavDiv');

closeBtn.classList.add('hidden');
navMenu.classList.add('hidden');


menuBtn.addEventListener('click',() => {
    menuDiv.classList.add('header-overlay');
    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    headerTopNavDiv.classList.add('header-top-nav-expanded');
    navMenu.classList.remove('hidden');
})

closeBtn.addEventListener('click',() => {
    menuDiv.classList.remove('header-overlay');
    menuBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    headerTopNavDiv.classList.remove('header-top-nav-expanded');
    navMenu.classList.add('hidden');
})
