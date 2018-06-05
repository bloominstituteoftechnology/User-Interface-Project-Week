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

