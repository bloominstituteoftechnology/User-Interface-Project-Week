// GLOBAL VARIABLES
const body = document.querySelector('body');

// ====================== NAVIGATION 
// VARIABLES
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.top-nav');
const contactLink = document.querySelector('#scroll');

// EVENT LISTENERS
hamburgerMenu.addEventListener('click', () => toggleMenu())
closeMenu.addEventListener('click', () => toggleMenu());
contactLink.addEventListener('click', () => toggleMenu());

// CALLBACK FUNCTIONS
toggleMenu = function () {
  hamburgerMenu.classList.toggle('hide')
  closeMenu.classList.toggle('hide');
  nav.classList.toggle('open');
  body.classList.toggle('overflow-hidden');
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

// VARIABLES
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(tab => new TabButton(tab));



// ==================================== Carousel
class Carousel {
  constructor(element) {
    this.element = element; // each img tag
    this.images = document.querySelectorAll('.carousel-image');
    this.rightArrow = document.querySelector('.right-arrow');
    this.leftArrow = document.querySelector('.left-arrow');

    this.leftArrow.addEventListener('click', () => this.scrollLeft());
    this.rightArrow.addEventListener('click', () => this.scrollRight());

  }
  scrollLeft() {
    if (currentIndex === 0) {
      this.images[currentIndex].classList.remove('carousel-selected');
      currentIndex = this.images.length - 1;
      this.images[currentIndex].classList.add('carousel-selected');
    } else {
      this.images[currentIndex].classList.remove('carousel-selected');
      currentIndex--;
      this.images[currentIndex].classList.add('carousel-selected');
    }
  }

  scrollRight() {
    if (currentIndex === this.images.length - 1) {

      this.images[currentIndex].classList.remove('carousel-selected');
      currentIndex = 0;
      this.images[currentIndex].classList.add('carousel-selected');

    } else {
      this.images[currentIndex].classList.remove('carousel-selected');
      currentIndex++;
      this.images[currentIndex].classList.add('carousel-selected');
    }
    TweenMax.from(this.images[currentIndex], 1, {
      opacity: 1,
      transform: translateX(-50),
      x: 2000,
    });
    // TweenMax.from(".carousel-images img", 2, {
    //   opacity: 0,
    //   x: -100
    // })
  }
}
let currentIndex = 0;
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);