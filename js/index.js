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

class CarouselItem {
  constructor(element) {
    this.element = element;

    this.rightArrow = this.element.querySelector('.right-arrow');
  }
}

const imageArray = document.querySelectorAll('.carousel-image');
imageArray.forEach(param => new CarouselItem(param));

console.log(imageArray);

// class Carousel {
//   constructor(element) {
//     this.element = element;
//     this.element.addEventListener('click', () => this.rotate());
//   }
//   rotate() {
//     document.querySelectorAll('.carousel img').forEach(img => img.classList.remove('image-active'));
//     if (this.element.classList.contains('left-button')) {
//       if (currentIndex === 0) {
//         currentIndex = carouselPics.length -1;
//       } else {
//         currentIndex--;
//       }
//       TweenMax.from(".carousel img", 2, {opacity:0, x:100})
//       document.querySelectorAll('.carousel img')[currentIndex].classList.add('image-active');
//     } 
//     else if (this.element.classList.contains('right-button')) {
//       if (currentIndex === carouselPics.length -1) {
//         currentIndex = 0;
//       } else {
//         currentIndex++;
//       }
//       document.querySelectorAll('.carousel img')[currentIndex].classList.add('image-active');
//       TweenMax.from(".carousel img", 2, {opacity:0, x:-100})
//     }
//   }
// }

// let buttons = document.querySelectorAll('.carousel div');
// let carouselPics = document.querySelectorAll('.carousel img');
// let currentIndex = 0;

// buttons = Array.from(buttons).map(button => new Carousel(button));
// document.querySelectorAll('.carousel img')[Math.floor(Math.random() * 3)].classList.add('image-active');