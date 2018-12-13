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
    TweenMax.from(this.images[currentIndex], 4, {
      opacity: 0
    });
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
    TweenMax.from(this.images[currentIndex], 2, {
      opacity: 0
    });
  }
}

let currentIndex = 0;
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);