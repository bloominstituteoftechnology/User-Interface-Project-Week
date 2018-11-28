// JS goes here
const toggleMenu = () => {
    
      menu.classList.toggle('menu--open');
    };
    
    let menu = document.querySelector('.menu');
    
    let menuButton = document.querySelector('.menu-button');
    
    menuButton.addEventListener('click', toggleMenu, false);