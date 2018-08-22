// JS goes here

const navigationOpenButton = document.querySelector('.nav-hamburger');
const navigationCloseButton = document.querySelector('.nav-close');
const navigationContent = document.querySelector('.navigation-content');

navigationOpenButton.addEventListener('click', (event) => {
    navigationContent.classList.toggle('navigation-hidden');
    console.log('Nav Open button clicked');
});

navigationCloseButton.addEventListener('click', (event) => {
    navigationContent.classList.toggle('navigation-hidden');
    console.log('Nav Open button clicked');
});

