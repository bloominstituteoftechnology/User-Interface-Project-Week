
let nav = document.querySelector('nav div');
let navButton = document.querySelector('.nav-hamburger');

navButton.addEventListener('click', drop, {once:true});

function close(){
  nav.classList.remove('dropped');
  document.querySelector('.full-width-nav').style = 'opacity: 1';

  nav.classList.add('dropdown');
  navButton.innerHTML = '<img src="./img/nav-hamburger.png" alt="menu button" />';
  navButton.addEventListener('click', drop, {once:true});
}

function drop(){
  nav.classList.remove('dropdown');
  document.querySelector('.full-width-nav').style = 'opacity: .95';

  nav.classList.add('dropped');
  navButton.innerHTML = '<img src="./img/nav-hamburger-close.png" alt="menu button" />';
  navButton.addEventListener('click', close, {once:true});
}

  // TweenMax.to("#menu", 4, {width:"100vw", height:"100vh"})
