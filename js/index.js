// GLOBAL VARIABLES
const body = document.querySelector('body');

// ====================== NAVIGATION 
// VARIABLES
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.top-nav');
const contactLink = document.querySelector('#scroll');

// EVENT LISTENERS
hamburgerMenu.addEventListener('click', () => toggleMenu())
contactLink.addEventListener('click', () => toggleMenu());

// CALLBACK FUNCTIONS
toggleMenu = function () {
  hamburgerMenu.classList.toggle('menu-open');
  nav.classList.toggle('open');
  body.classList.toggle('overflow-hidden');
  hamburgerMenu.classList.toggle("clickHamburgerMenu");
}



// source: Brandon Lent
//Scroll into view opacity animation
let showOnScroll = function () {
  let elems;
  let windowHeight;

  function init() {
    elems = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -170) {
        TweenMax.to(elems[i], 1, {
          opacity: 1
        });
      }
    }
  }
  return {
    init: init
  };
};
showOnScroll().init();