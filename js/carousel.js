class Carousel {

  constructor(element) {

    this.element = element;

    this.nextButton = element.querySelector('.right-button');
    this.previousButton = element.querySelector('.left-button');

    this.currentIndex = 0;

    this.images = Array.from(element.querySelectorAll('img')).map(image => new CarouselImg(image));

    this.clickable = false;

  }

  init() {

    this.images[0].moveIn('forwards');

    setTimeout(() => this.clickable = true, 2000);

    this.nextButton.addEventListener('click', () => this.nextImage());
    this.previousButton.addEventListener('click', () => this.prevImage());

  }

  prevImage() {

    if (this.clickable) {

      this.clickable = false;

      this.images[this.currentIndex].moveOut('reverse');

      this.currentIndex--;

      if (this.currentIndex < 0)
        this.currentIndex = this.images.length - 1;

      setTimeout(() => {
        this.images[this.currentIndex].moveIn('reverse');
        setTimeout(() => this.clickable = true, 2000);
      }, 2000);

    }

  }

  nextImage() {

    if (this.clickable) {

      this.clickable = false;

      this.images[this.currentIndex].moveOut('forwards');

      this.currentIndex++;

      if (this.currentIndex == this.images.length)
        this.currentIndex = 0;

      setTimeout(() => {
        this.images[this.currentIndex].moveIn('forwards');
        setTimeout(() => this.clickable = true, 2000);
      }, 2000);

    }

  }

}

class CarouselImg {

  constructor(element) {

    this.element = element;
    this.element.style.display = "none";
    this.element.style.zIndex = "-10";
    this.heading = document.querySelector(`.heading[data-project='${this.element.dataset.project}']`).textContent;
    this.text = document.querySelector(`.text[data-project='${this.element.dataset.project}']`).textContent;
    this.projectHeading = document.querySelector('.project-heading');
    this.projectText = document.querySelector('.project-text');

  }

  moveIn(direction) {

    this.element.style.display = "block";

    this.projectHeading.textContent = this.heading;
    this.projectText.textContent = this.text;

    TweenMax.fromTo(this.projectHeading, 2, {opacity: 0}, {opacity: 1});
    TweenMax.fromTo(this.projectText, 2, {opacity: 0}, {opacity: 1});

    if (direction == "forwards") {

      TweenMax.set(this.element, {xPercent: "-=50", opacity: 0});
      TweenMax.to(this.element, 2, {xPercent: "+=50", opacity: 1});

    }

    else {

      TweenMax.set(this.element, {xPercent: "+=50", opacity: 0});
      TweenMax.to(this.element, 2, {xPercent: "-=50", opacity: 1});

    }

  }

  moveOut(direction) {

    TweenMax.fromTo(this.projectHeading, 2, {opacity: 1}, {opacity: 0});
    TweenMax.fromTo(this.projectText, 2, {opacity: 1}, {opacity: 0});

    if (direction == "forwards") {

      TweenMax.to(this.element, 2, {xPercent: "+=50", opacity: 0, onComplete: () => {
        this.element.style.display = "none";
        TweenMax.set(this.element, {xPercent: "-=50"});
      }});

    }

    else {

      TweenMax.to(this.element, 2, {xPercent: "-=50", opacity: 0, onComplete: () => {
        this.element.style.display = "none";
        TweenMax.set(this.element, {xPercent: "+=50"});

      }});

    }

  }

}
