// JS goes here

//// Header Navigation ////
// get elements
const menu = document.querySelector('.hamburglar-links');
const menuToggle = document.querySelector('.hamburglar-toggle');
// watch for clicks. do the thing!
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');

    if(menuToggle.src.indexOf('nav-hamburger.png') !== -1) {
        menuToggle.src = 'img/nav-hamburger-close.png';
    } else {
        menuToggle.src = 'img/nav-hamburger.png';
    }
});


//// Tab Navigation ////

