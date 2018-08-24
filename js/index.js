const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  }

  const menu = document.querySelector('.menu');

  const menuButton = document.querySelector('.menu-button');
  
//   console.log(menuButton);
  
  menuButton.addEventListener('click', toggleMenu);