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


// ====================== SERVICES TAB NAVIGATOR
// CLASS CONSTRUCTOR

class TabButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services-content-container[data-tab='${this.data}']`);
    this.tabContent = new TabContent(this.itemElement);
    this.element.addEventListener('click', () => this.select());

  }
  select() {
    const links = document.querySelectorAll('.tab-button');
    links.forEach(param => param.classList.remove('button-selected'));
    this.element.classList.add('button-selected');
    this.tabContent.selectContent();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }

  selectContent() {
    const content = document.querySelectorAll('.services-content-container');
    content.forEach(param => param.classList.remove('content-selected'));
    this.element.classList.add('content-selected');
  }
}

const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(tab => new TabButton(tab));



//Scroll into view animation
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