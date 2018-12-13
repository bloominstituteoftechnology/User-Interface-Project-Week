const hamburger = document.querySelector('.nav-hamburger');
const closed = document.querySelector('.nav-closed');
const navTabs = document.querySelector('.nav-tabs');
const aTags = document.getElementsByTagName('a');


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

window.onload = function() {
  Array.from(aTags).forEach( (tag) => {
    if (window.location.href.includes(tag.className)) {
      tag.style.color = 'rgb(63, 55, 55)';
    }
  })
};