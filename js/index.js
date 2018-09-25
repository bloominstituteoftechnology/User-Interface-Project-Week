// EXPAND NAVIGATION
const navigation = document.querySelector('.navigation');
const navigationMenu = document.querySelector('.navigation__menu');
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navigation__list');
const navItems = document.querySelectorAll('.navigation__text');

// Add event listener to navigationMenu
navigationMenu.addEventListener('click', () => {
  navigation.classList.toggle('navigation--expanded');
  navigation.firstElementChild.classList.toggle(
    'navigation__container--expanded'
  );
  navList.classList.toggle('navigation__list--expanded');
  navItems.forEach(item => item.classList.toggle('navigation__text--expanded'));

  // hamburger
  hamburger.classList.toggle('closed');
  if (hamburger.classList.contains('closed')) {
    hamburger.src = 'img/nav-hamburger-close.png';
  } else {
    hamburger.src = 'img/nav-hamburger.png';
  }
});
