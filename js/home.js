//home-page

let menu = document.querySelector('.hamburger');
let navLinks = document.querySelector('.links');
let xMark = document.querySelector('.x-mark')

function expand() {
        menu.classList.toggle('hide');
        navLinks.classList.toggle('hide');
        xMark.classList.toggle('hide');
        TweenMax.to('.links', 2, {opacity: 1})
};

menu.addEventListener('click', () => {expand()});
xMark.addEventListener('click', () => {expand()});

function welcome() {
  TweenMax.to('.letter', 4, {y: 75, rotation:360, scale: 2});
}

welcome(); 

const enter = document.querySelector('.arrows');
enter.addEventListener('click', () => {hide()});

function hide() {
  document.querySelector('.welcome').classList.add('hide');
}

AOS.init({
  duration: 1200
});

//Carousel
class Carousel {
  constructor(element) {
    this.element = element;

    this.left = document.querySelector('.left-button');
    this.left.addEventListener('click', () => {this.selectLeft()});

    this.right = document.querySelector('.right-button');
    this.right.addEventListener('click', () => {this.selectRight()});

    this.imgs = document.querySelectorAll('.home-jumbotron');
    Array.from(this.imgs);

    this.position = 0;

    this.showing = this.imgs[this.position].classList.add('show');
  } 

  selectLeft() {
    if (this.position === 0) {
    this.position = 3;
    } else {
    this.position = this.position - 1;
    }

    this.imgs.forEach(img => {
      img.classList.remove('show');
    })

    this.showing = this.imgs[this.position].classList.add('show');
  }

  selectRight() {
    if (this.position === 3) {
    this.position = 0;
    } else {
    this.position = this.position + 1;
    }

    this.imgs.forEach(img => {
      img.classList.remove('show');
    })

    this.showing = this.imgs[this.position].classList.add('show');
  }

}

let carousel = document.querySelector('.home-motto');
carousel = new Carousel(carousel);


