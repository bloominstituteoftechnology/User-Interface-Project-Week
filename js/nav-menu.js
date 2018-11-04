const navHeaderButtonOpen = document.querySelector('.nav-header-button-open');
const navHeaderButtonClose = document.querySelector('.nav-header-button-close');
const navBarItems = document.querySelector('.nav-dropdown-container');

const toggleMenu = (navBarItems) => {
  navHeaderButtonOpen.classList.toggle('hide');
  navHeaderButtonClose.classList.toggle('hide');
  navBarItems.classList.toggle('hide');
}

navHeaderButtonOpen.addEventListener('click', () => toggleMenu(navBarItems));
navHeaderButtonClose.addEventListener('click', () => toggleMenu(navBarItems));