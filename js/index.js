//Menu Toggle
const toggleMenu = () => {
    menu.classList.add('open-menu');
    xButton.classList.add('show-x-button');
    menuButton.classList.add('hide-menu-button');
  }

  const toggleX = () => {
    menu.classList.remove('open-menu');
    xButton.classList.remove('show-x-button');
    menuButton.classList.remove('hide-menu-button');
  }

  const xButton = document.querySelector('.x-button');

  const menu = document.querySelector('.menu');

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    toggleMenu();
  });

  xButton.addEventListener('click', () => {
    toggleX();
  })


//Tab-Navigation

