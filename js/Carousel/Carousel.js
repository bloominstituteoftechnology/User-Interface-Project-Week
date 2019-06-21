class Carousel {
  constructor(domElement) {
      this.element = domElement;

      this.leftBtn = document.querySelector('.left-button');
      this.rightBtn = document.querySelector('.right-button');

      this.images = document.querySelectorAll('.carousel img');

      this.currentIndex = 0;

      this.images[0].style.display = 'block';

      this.leftBtn.addEventListener('click', () => {
          this.images.forEach(image => image.style.display = 'none');

          this.currentIndex -= 1;

          if(this.currentIndex < 0) {
              this.currentIndex = 3;
          }

          this.images.forEach((image, index) => {
              if(this.currentIndex === index) {
                  image.style.display = 'block';
                  TweenMax.from(image, .3, {x:-1000});
              }
          })
      })
      
      this.rightBtn.addEventListener('click', () => {
          this.images.forEach(image => image.style.display = 'none');

          this.currentIndex += 1;

          if(this.currentIndex > 3) {
              this.currentIndex = 0;
          }

          this.images.forEach((image, index) => {
              if(this.currentIndex === index) {
                  image.style.display = 'block';
                  TweenMax.from(image, .3, {x:1000});
              }
          })
      })
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);