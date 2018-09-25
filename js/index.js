// JS goes here


// navigation opener    

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav')
hamburger.addEventListener('click', () => {
    nav.classList.remove('nav-hidden');
    nav.classList.add('expanded');
})


