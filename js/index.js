// JS goes here
const toggleMenu = () => {
    console.log("Toggled menu.");

    menu.classList.toggle('active');
    menuButton.classList.toggle('not-active');
    navLogo.classList.toggle('not-active');
}
  
const menu = document.querySelector('.nav-text-extended');
const menuButton = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.nav-extended-topbar img');
const navLogo = document.querySelector('.nav-logo');

menuButton.addEventListener('click', (e) => {
  
    console.log("Calling the toggleMenu const.");
    toggleMenu();
});

menuCloseButton.addEventListener('click', (e) => {
  
    console.log("Calling the toggleMenu const.");
    toggleMenu();
});