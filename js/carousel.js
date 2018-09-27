class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    // Slider
    this.slider = document.querySelector('.slider');
    // Images
    this.carouselImages = Array.from(
      document.querySelectorAll('.carousel img')
    );
    this.currentImage = this.carouselImages[0];

    // Buttons
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');

    // Button Event Listeners
    this.rightButton.addEventListener('click', () => this.nextImage());
    this.leftButton.addEventListener('click', () => this.previousImage());
  }

  nextImage() {
    let nextImg, toLast;
    this.carouselImages.forEach(img => {
      if (img.classList.contains('current-img')) {
        TweenMax.to(this.slider, 0.5, {
          x: '-100%',
          ease: Power1.easeInOut
        });
        setTimeout(() => {
          TweenMax.to(this.slider, 0, {
            x: '0%'
          });
          toLast = this.carouselImages.shift();
          this.carouselImages.push(toLast);
          this.slider.append(img);
          img.classList.remove('current-img');
          nextImg = this.carouselImages[0];
          nextImg.classList.add('current-img');
        }, 500);
      }
    });
  }

  previousImage() {
    let nextImg, fromLast;
    this.carouselImages.forEach(img => {
      if (img.classList.contains('current-img')) {
        this.slider.prepend(
          this.carouselImages[this.carouselImages.length - 1]
        );
        TweenMax.to(this.slider, 0, {
          x: '-100%'
        });
        TweenMax.to(this.slider, 0.5, {
          x: '0%',
          ease: Power1.easeInOut
        });
        setTimeout(() => {
          fromLast = this.carouselImages.pop();
          this.carouselImages.unshift(fromLast);
          img.classList.remove('current-img');
          nextImg = this.carouselImages[0];
          nextImg.classList.add('current-img');
        }, 500);
      }
    });
  }
}

let carousels = Array.from(document.querySelectorAll('.carousel')).map(
  carousel => new Carousel(carousel)
);
