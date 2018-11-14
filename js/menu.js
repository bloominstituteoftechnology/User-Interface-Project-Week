
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 

    
    if  (menu.classList === 'menu-open') {
        menuButton.setAttribute('src', './img/nav-hamburger-close.png');
    }
    else{
        menu.classList.toggle('menu--open');
        menuButton.setAttribute('src', './img/nav-hamburger.png');
    }
    console.log(menuButton.classList);
}

// Short notation for document
const doc = document;
// Start Here: Create a reference to the ".menu" class
const menu = doc.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = doc.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
// console.log(menuButton);

menuButton.addEventListener('click', toggleMenu);
  
  
  