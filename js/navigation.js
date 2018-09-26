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

let links=document.querySelectorAll('nav div a');



TweenMax.set("#menu", {
      y: '-100%',
  });

menuOpen

  .to("#menu", 1.3, {
  y: "0%",
  })
  .staggerFrom(links, .25, {
    y: '-30',
    ease: Power1.easeOut}, .1);
  // });



// menuOpen.to("#menu", 1, {height: "100vh", ease:Power2.easeInOut, paused:true})
// .fromTo("#menu", 1, {height: "0vh"}{height: "100vh", ease:Power2.easeInOut, paused:true})
let nav = document.querySelector('nav div');
let navButton = document.querySelector('.nav-hamburger');

navButton.addEventListener('click', drop, {once:true});



function close(){
  menuOpen.reverse();
  nav.classList.remove('dropped');
  document.querySelector('.full-width-nav').style = 'opacity: 1';
  nav.classList.add('dropdown');
  navButton.innerHTML = '<img src="./img/nav-hamburger.png" alt="menu button" />';
  navButton.addEventListener('click', drop, {once:true});
}

function drop(){
  // menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();
  menuOpen.restart();
  nav.classList.remove('dropdown');
  document.querySelector('.full-width-nav').style = 'opacity: .95';
  nav.classList.add('dropped');
  navButton.innerHTML = '<img src="./img/nav-hamburger-close.png" alt="menu button" />';
  navButton.addEventListener('click', close, {once:true});
}
