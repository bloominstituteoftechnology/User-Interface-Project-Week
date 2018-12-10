const navMenuBtn = document.querySelector('.nav-menu-btn');
const navContainer = document.querySelector('.nav-container');
const navCloseBtn = document.querySelector('.close-menu-btn');

navMenuBtn.addEventListener('click', () => {
  navContainer.classList.add('expanded');
})

navCloseBtn.addEventListener('click', () => {
  navContainer.classList.remove('expanded');
})
