const navMenuBtn = document.querySelector('.nav-menu-btn');
const navContainer = document.querySelector('.nav-container');
const navCloseBtn = document.querySelector('.close-menu-btn');

navMenuBtn.addEventListener('click', () => {
  navContainer.classList.add('expanded');
  TweenMax.from(navContainer, .2, {opacity:0, yPercent: -5});
})

navCloseBtn.addEventListener('click', () => {
  TweenMax.to(navContainer, .1, {opacity:.7, onComplete: () => {
    navContainer.classList.remove('expanded')
    TweenMax.to(navContainer, .1, {opacity:1})
    } 
  });
})
