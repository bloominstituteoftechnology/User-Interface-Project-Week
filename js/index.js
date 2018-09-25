// JS goes here
let btn = document.querySelector('.nav-button');
let navItems = document.querySelector('.nav-items');

btn.addEventListener('click', () => navToggle());

const navToggle =() =>{
    navItems.classList.toggle('active');
    if (navItems.classList.contains('active')){
    btn.src = 'img/nav-hamburger-close.png';
    }
    else {
        btn.src = 'img/nav-hamburger.png';
    }
}