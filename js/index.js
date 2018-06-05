const openIcon = document.querySelector('#navhamburger');
const closeIcon = document.querySelector('#navhamburgerclose');
const openMenu = document.querySelector('.nav-fullscreen');

openIcon.addEventListener('click', () => {
    toggleMenu()
});

closeIcon.addEventListener('click', () => {
    toggleMenu()
});
const toggleMenu = function () {
 openMenu.classList.toggle('open');

}
const controller = new ScrollMagic.Controller();
const navMenu = document.querySelector('.nav-container');
let scrollMenuMod = new TweenMax.to(navMenu, 1, {
    backgroundColor: 'rgba(157, 167, 177, 0.95)',
});

const scene = new ScrollMagic.Scene({
    offset: 10, 
})
.setTween(scrollMenuMod)
.addTo(controller);
