function toggleMenuOn() {
  closedNav.style.display = 'none';
  openNav.style.display = 'block';
  navItems.style.display = 'block';
  nav.style.height = '100%';
}
function toggleMenuOff() {
  closedNav.style.display = 'block';
  openNav.style.display = 'none';
  navItems.style.display = 'none';
  nav.style.height = 'auto';
}

const nav = document.querySelector('.nav-bar');
const navItems = document.querySelector('nav');

const closedNav = document.querySelector('.closed');
const openNav = document.querySelector('.open');

console.log(navItems);
console.log(closedNav);
console.log(openNav);

closedNav.addEventListener('click', toggleMenuOn);
openNav.addEventListener('click', toggleMenuOff);
