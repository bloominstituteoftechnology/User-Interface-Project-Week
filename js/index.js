// JS goes here
// Navigation Toggle Logic 
const togglerOpen = document.querySelector('.nav-toggle-open');
const togglerClose = document.querySelector('.nav-toggle-close');
const nav = document.querySelector('.navigation');

const toggleNav = () => {
    togglerOpen.classList.toggle('hide');
    togglerClose.classList.toggle('hide');
    nav.classList.toggle('navigation--open');
}
console.log(nav)

togglerOpen.onclick = () => toggleNav();
togglerClose.onclick = () => toggleNav();