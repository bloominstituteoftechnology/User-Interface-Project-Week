const navHeaderButtonOpen = document.querySelector('.nav-header-button-open');
const navHeaderButtonClose = document.querySelector('.nav-header-button-close');
const navBarItems = document.querySelector('.nav-bar-items');
const homeJumbotronTitles = document.querySelectorAll('.jumbotron-title');

const toggleMenu = (navBarItems) => {
  navHeaderButtonOpen.classList.toggle('hide');
  navHeaderButtonClose.classList.toggle('hide');
  navBarItems.classList.toggle('invisible');
}

navHeaderButtonOpen.addEventListener('click', () => toggleMenu(navBarItems));
navHeaderButtonClose.addEventListener('click', () => toggleMenu(navBarItems));