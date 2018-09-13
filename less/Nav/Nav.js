
const toggleMenu = () => {
    menu.classList.toggle('menu--active');
}


// Create a reference to the Menu
const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', (e) => {
    toggleMenu();
})
