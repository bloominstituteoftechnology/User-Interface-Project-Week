//navBar functionality
const hamburger = document.querySelector('.menu-button');
const nav = document.querySelector('.navBar')
const close = document.querySelector('.close-button');
const menuText = document.querySelector('.nav-hidden');

hamburger.addEventListener('click', () => {
    nav.classList.remove('nav-hidden');
    nav.classList.add('expanded');
    menuText.classList.remove('nav-hidden');
    menuText.classList.add('drop-down')
    nav.style.flexDirection = 'column-reverse';
   
    
})

close.addEventListener('click', () => {
    nav.classList.add('navBar');
    nav.classList.remove('expanded');
    menuText.style.display = 'none';
})

// let btn = document.querySelector('.nav-button');
// let navItems = document.querySelector('.nav-items');
//  btn.addEventListener('click', () => navToggle());
//  const navToggle =() =>{
//     navItems.classList.toggle('active');
//     if (navItems.classList.contains('active')){
//     btn.src = 'img/nav-hamburger-close.png';
//     }
//     else {
//         btn.src = 'img/nav-hamburger.png';
//     }
// }