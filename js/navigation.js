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
//menu icon animation
// let hamIcon = document.getElementById('#burger');
// var iconToggle = new TimelineMax({paused:true, reversed:true});
// iconToggle
//   .to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
//   .to(' .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
//   .to(' .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
//   .add('rotate')
//   .to(' .top', .2, {y:'5'}, 'rotate')
//   .to(' .bot', .2, {y:'-5'}, 'rotate')
//   .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
//   .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')

//menu animation
// let menuOpen = new TimelineMax({paused:true, reversed:true});
// let links=document.querySelectorAll('.nav-link');
//
// TweenMax.set("#menu", {
//       height: '0vh',
//   });
//
// menuOpen
//   .to("#menu", 1.5, {
//   height: "100vh",
//   // visibility: 'visible',
//   ease:Power1.easeInOut
//   })
//   .staggerFrom(links, .25, {
//     y: '-30',
//     ease: Power1.easeOut, }, .2);
//   // });
//
//
// //event listener for both animations
// let nav = document.querySelector('nav div');
// let navButton = document.querySelector('.nav-hamburger');
//
//
// navButton.addEventListener('click', function(){
//   menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();
//   iconToggle.reversed() ? iconToggle.restart() : iconToggle.reverse();
// });
//exploring stop scroll (opacity issue)
let hamIcon = document.getElementById('#burger');
var iconToggle = new TimelineMax({paused:true, reversed:true});
iconToggle
  .to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
  .to(' .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
  .to(' .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
  .add('rotate')
  .to(' .top', .2, {y:'5'}, 'rotate')
  .to(' .bot', .2, {y:'-5'}, 'rotate')
  .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
  .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')

//menu animation
let menuOpen = new TimelineMax({paused:true, reversed:true});
let links=document.querySelectorAll('.nav-link');

TweenMax.set("#menu", {
      height: '0vh',

  });

menuOpen
  .to("#menu", 1.5, {
  height: "100vh",
  opacity: '.95',
  ease:Power1.easeInOut
  })
  .staggerFrom(links, .25, {
    y: '-30',
    ease: Power1.easeOut, }, .2);
  // });


//event listener for both animations
let nav = document.querySelector('nav div');
let navButton = document.querySelector('.nav-hamburger');


navButton.addEventListener('click', function(){
  iconToggle.reversed() ? iconToggle.restart() : iconToggle.reverse();
  if (menuOpen.reversed() ) {
    menuOpen.restart();
    document.body.style.overflow = 'hidden';
  }
  else {
    menuOpen.reverse();
    document.body.style.overflow = 'unset';
  }

});

// function close(){
//
//   // menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();
//   menuOpen.reverse();
//   // navButton.innerHTML = '<img src="./img/nav-hamburger.png" alt="menu button" />';
//      // iconToggle.reversed() ? iconToggle.restart() : iconToggle.reverse();
//   iconToggle.reverse();
//   navButton.addEventListener('click', drop, {once:true});
// }
//
// function drop(){
//
//   // menuOpen.reversed() ? menuOpen.restart() : menuOpen.reverse();
//   menuOpen.restart();
//
//   document.querySelector('.full-width-nav').style = 'opacity: .95';
//
//   // navButton.innerHTML = '<img src="./img/nav-hamburger-close.png" alt="menu button" />';
//   iconToggle.restart();
//   navButton.addEventListener('click', close, {once:true});
// }
