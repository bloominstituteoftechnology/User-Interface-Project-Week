//Nav Toggle

const navButtonOn = document.querySelector('.nav-toggle-on');
const navButtonOff = document.querySelector('.nav-toggle-off')
const navMenu = document.querySelector('.nav-menu');

navButtonOn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-toggle', true);
    console.log('clicked nav on')
})

navButtonOff.addEventListener('click', () => {
    navMenu.classList.toggle('nav-toggle', false)
    console.log('clicked nav off')
})