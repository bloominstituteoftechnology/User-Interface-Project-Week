// JS goes here
const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu.classList.toggle('menu--open');
    
  }

let toggle = false;

const toggleimg = () => {
    if(toggle === false){
        menuButton.src = 'img/nav-hamburger-close.png';
        toggle = true;
    } else if (toggle === true){
        menuButton.src = 'img/nav-hamburger.png';
        toggle = false;
    }
}

  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.hamburger');
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  
  menuButton.addEventListener('click', (e) => {
     toggleMenu();
     toggleimg();
  });