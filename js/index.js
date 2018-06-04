const menuIcon = document.querySelector('#navhamburger');
const openMenu = document.querySelector('.nav-fullscreen');

menuIcon.addEventListener('click', () => {
    toggleMenu()
});

const toggleMenu = function () {
 openMenu.classList.toggle('open')
 if (menuIcon.getAttribute.src === '/img/nav-hamburger.png') {
menuIcon.setAttribute.src = '/img/nav-hamburger-close.png';
 } else {
     menuIcon.setAttribute.src = '/img/nav-hamburger.png';
 }
 menuIcon.classList.toggle('index-top')

}

