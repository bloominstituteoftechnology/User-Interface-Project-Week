const hamburger = document.querySelector('.nav-hamburger');
const closed = document.querySelector('.nav-closed');
const navTabs = document.querySelector('.nav-tabs');


hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  closed.style.display = 'block';
  navTabs.style.display = 'flex';
});

closed.addEventListener('click', () => {
  closed.style.display = 'none';
  hamburger.style.display = 'block';
  navTabs.style.display = 'none';
});