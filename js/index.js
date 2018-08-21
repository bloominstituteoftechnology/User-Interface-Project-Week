const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (e) => { 
    TweenMax.to(".main-nav", 2, {x:-20, opacity: 1});
  console.log(e.currentTarget);
});