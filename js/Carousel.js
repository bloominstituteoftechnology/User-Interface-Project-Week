class Carousel {
  constructor(container) {
    this.container = container;
    this.images = Array.from(this.container.querySelectorAll('img'));
    this.currentImage = 0;
    this.activeClassName = 'carousel__img--active';

    this.rightBtn = this.container.querySelector('.carousel__right-button');
    this.leftBtn = this.container.querySelector('.carousel__left-button');

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);

    this.rightBtn.addEventListener('click', this.nextSlide);
    this.leftBtn.addEventListener('click', this.previousSlide);

    this.displayActive();
  }

  displayActive() {
    this.images[this.currentImage].classList.add(this.activeClassName);
  }

  previousSlide() {
    const previous =
      this.currentImage - 1 < 0
        ? this.images.length - 1
        : this.currentImage - 1;

    store.dispatch({
      type: 'UPDATE_ACTIVE',
      activeTabNumber: previous
    });

    const previousSlide = this.images[previous];
    const currentSlide = this.images[this.currentImage];
    previousSlide.classList.add(this.activeClassName);
    currentSlide.style.position = 'absolute';
    TweenMax.to(currentSlide, 0.5, {
      xPercent: 100,
      onComplete: () => {
        currentSlide.classList.remove(this.activeClassName);
        currentSlide.style.position = 'relative';
      }
    });
    TweenMax.fromTo(previousSlide, 0.5, { xPercent: -100 }, { xPercent: 0 });

    this.currentImage = previous;
  }

  nextSlide() {
    const next = (this.currentImage + 1) % this.images.length;

    store.dispatch({
      type: 'UPDATE_ACTIVE',
      activeTabNumber: next
    });

    const nextSlide = this.images[next];
    const currentSlide = this.images[this.currentImage];
    nextSlide.classList.add(this.activeClassName);
    currentSlide.style.position = 'absolute';
    TweenMax.to(currentSlide, 0.5, {
      xPercent: -100,
      onComplete: () => {
        currentSlide.classList.remove(this.activeClassName);
        currentSlide.style.position = 'relative';
      }
    });
    TweenMax.fromTo(nextSlide, 0.5, { xPercent: 100 }, { xPercent: 0 });

    this.currentImage = next;
  }
}

let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(carousel => new Carousel(carousel));
