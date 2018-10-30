// JS goes here


const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu reference. 
    menu.classList.add('menu--open');

    menuButton.style.display = 'none';
    menuButtonClose.style.display = 'inline';
    // console.log('clicked');

  }

  const toggleMenuClose = () => {
    menu.classList.remove('menu--open');

    menuButtonClose.style.display = 'none';
    menuButton.style.display = 'inline';

    // console.log('clicked-close');
  }


  
  // Start Here: Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  
  // create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');
  const menuButtonClose = document.querySelector('.menu-close-button');

  // console.log(menuButton);
  // console.log(menu);
  // console.log(menuButtonClose);
  
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  menuButton.addEventListener('click', toggleMenu);
  menuButtonClose.addEventListener('click', toggleMenuClose);


