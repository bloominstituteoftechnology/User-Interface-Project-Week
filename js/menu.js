
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    console.log(menu.classList);

    
    if (menu.classList.value !== 'menu menu--open') {
        menu.classList.toggle('menu--open');
        menuButton.setAttribute('src', './img/nav-hamburger-close.png');
        navWrapper.style.opacity = '0.96';
    }
    else if (menu.classList.value === 'menu menu--open') {
        menu.classList.toggle('menu--open');
        menuButton.setAttribute('src', './img/nav-hamburger.png');    
        navWrapper.style.opacity = '1';
    }
}

// Short notation for document
const doc = document;
// Start Here: Create a reference to the ".menu" class

const navWrapper= doc.querySelector('.nav-wrapper');
const body = doc.querySelector('body');
const menu = doc.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = doc.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
// console.log(menuButton);

menuButton.addEventListener('click', toggleMenu);
  
  
  