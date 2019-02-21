const toggleMenu = () => {
    // 4. Toggle the "menu--open" class on your menu refence.
    menu.classList.toggle('menu--open');
    headerHide.classList.remove('header');
    headerHide.classList.add('hide');
  };

  const toggleOff = () => {
    menu.classList.remove('menu--open');
    headerHide.classList.add('header');

  };

  
  // Start Here: 1. Create a reference to the ".menu" class
  const menu = document.querySelector('.menu');
  console.log(menu, 'menu')

  const headerHide = document.querySelector('.header');
  console.log(headerHide, 'hide')

  
  
  // 2. create a reference to the ".menu-button" class
  const menuButton = document.querySelector('.menu-button');
  console.log(menuButton, 'menuButton')

  const menuOff = document.querySelector('.menu-off')
  console.log(menuOff, 'menuOFF')
  
  // 3. Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click', toggleMenu);
  menuOff.addEventListener('click', toggleOff)


