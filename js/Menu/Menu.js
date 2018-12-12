const navMenuBtn = document.querySelector('.nav-menu-btn');
const navContainer = document.querySelector('.nav-container');
const navCloseBtn = document.querySelector('.close-menu-btn');

navMenuBtn.addEventListener('click', () => {
  navContainer.classList.add('expanded');
  TweenMax.from(navContainer, .2, {opacity:0, xPercent: 50});
})

navCloseBtn.addEventListener('click', () => {
  TweenMax.to(navContainer, 0, {opacity:0, onComplete: () => {
    navContainer.classList.remove('expanded')
    TweenMax.to(navContainer, .2, {opacity:1})
    } 
  });
})
