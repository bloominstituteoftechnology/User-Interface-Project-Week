const navMenuBtn = document.querySelector('.nav-menu-btn');
const navContainer = document.querySelector('.nav-container');
const navCloseBtn = document.querySelector('.close-menu-btn');

navMenuBtn.addEventListener('click', () => {
  navContainer.classList.add('expanded');
  TweenMax.from(navContainer, .2, {opacity:0, xPercent: 50});
})

navCloseBtn.addEventListener('click', () => {
    navContainer.classList.remove('expanded');
})
