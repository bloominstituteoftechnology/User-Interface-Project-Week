// JS goes here
let hamburger = document.querySelector('.navigation img');
// console.log(hamburger);
let navigation = document.querySelector('.navigation');
console.log(navigation);
let nav = document.querySelector('.navigation nav');
// console.log(nav);

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('navigation-click');
    hamburger.src.includes('img/nav-hamburger.png') ?
        (hamburger.src = 'img/nav-hamburger-close.png') :
        hamburger.src = 'img/nav-hamburger.png';
})