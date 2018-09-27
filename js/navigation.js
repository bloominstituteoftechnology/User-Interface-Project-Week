//
// let nav = document.querySelector('nav div');
// let navButton = document.querySelector('.nav-hamburger');
//
// navButton.addEventListener('click', drop, {once:true});
//
// function close(){
//   nav.classList.remove('dropped');
//   document.querySelector('.full-width-nav').style = 'opacity: 1';
//
//   nav.classList.add('dropdown');
//   navButton.innerHTML = '<img src="./img/nav-hamburger.png" alt="menu button" />';
//   navButton.addEventListener('click', drop, {once:true});
// }
//
// function drop(){
//   nav.classList.remove('dropdown');
//   document.querySelector('.full-width-nav').style = 'opacity: .95';
//
//   nav.classList.add('dropped');
//   navButton.innerHTML = '<img src="./img/nav-hamburger-close.png" alt="menu button" />';
//   navButton.addEventListener('click', close, {once:true});
// }
//
//


// explore with greensock:

let menuOpen = new TimelineMax({paused:true, reversed:true});

let links=document.querySelectorAll('.nav-link');



TweenMax.set("#menu", {
      height: '0vh',
  });

menuOpen
  .to("#menu", 1, {
  height: "100vh",
  ease:Back.easeIn
  })
  .staggerFrom(links, .25, {
    y: '-30',
    ease: Power1.easeOut, }, .1);
  // });



let nav = document.querySelector('nav div');
let navButton = document.querySelector('.nav-hamburger');

navButton.addEventListener('click', drop, {once:true});



function close(){

  menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();

  // document.querySelector('.full-width-nav').style = 'opacity: 1';
  // nav.classList.remove('dropped');
  // nav.classList.add('dropdown');
  navButton.innerHTML = '<img src="./img/nav-hamburger.png" alt="menu button" />';
  navButton.addEventListener('click', drop, {once:true});
}

function drop(){

  menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();
  // nav.classList.remove('dropdown');
  // document.querySelector('.full-width-nav').style = 'opacity: .95';
  // nav.classList.add('dropped');
  navButton.innerHTML = '<img src="./img/nav-hamburger-close.png" alt="menu button" />';
  navButton.addEventListener('click', close, {once:true});
}
