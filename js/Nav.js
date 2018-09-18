// Toggle the menu active after event has been clicked
const toggleMenu = () => {
    menu.classList.toggle('menu--active');
}


// Create a reference to the Menu
const menu = document.querySelector('.menu');

// Create a reference to the hamburger button
const menuButton = document.querySelector('.hamburger');

//Event Listener on hamburger to open menu
menuButton.addEventListener('click', (e) => {
    toggleMenu();
})
