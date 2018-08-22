// JS goes here

// Menu

const toggleMenu = () => {
     menu.classList.toggle('menu--open');
  }

  const collapseButton = () => {
    menuButton.style.display = "none";
    menuClose.style.display = "block";
  }

  
  const expandButton = () => {
    menuButton.style.display = "block";
    menuClose.style.display = "none";
  }
  
  
  const menu = document.querySelector('.menu');
  const menuClose = document.querySelector('.menu-close');

  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
    collapseButton();
});

menuClose.addEventListener('click', () => {
    toggleMenu();
    expandButton();
});

  



