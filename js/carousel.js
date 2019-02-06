// Inifnite loop carousel for testimonials
class Carousel {
  constructor() {
    // set current index to 0
    this.currentIndex = 0;
    // select testimonial for show on first load
    this.initialDisplay = document.querySelector(`.testimonial-item[data-tab="0"]`);
    this.initialDisplay.classList.add('show-testimonial');
    // grab all testimonials for method reference
    this.allTests = document.querySelectorAll('.testimonial-item');
    // grab activte testimonial for method reference
    
    // grab left and right buttons
    this.left = document.querySelector('.left-button');
    this.right = document.querySelector('.right-button');
    // add event listener to buttons
    this.left.addEventListener('click', () => this.increaseLeft());
    this.right.addEventListener('click', () => this.increaseRight());
  }

  increaseLeft() {
    if (this.currentIndex === 0) {
      this.currentIndex = 3;
    }
    else {
      this.currentIndex -= 1;
    }

    // remove show class from all tests
    this.allTests.forEach(item => item.classList.remove('show-testimonial'));
    // grab active test and activate show class
    this.activeTest = document.querySelector(`.testimonial-item[data-tab="${this.currentIndex}"]`);
    this.activeTest.classList.add('show-testimonial');
  }

  increaseRight() {
    if (this.currentIndex === 3) {
      this.currentIndex = 0;
    }
    else {
      this.currentIndex += 1;
    }

    // remove show class from all tests
    this.allTests.forEach(item => item.classList.remove('show-testimonial'));
    // grab active test and activate show class
    this.activeTest = document.querySelector(`.testimonial-item[data-tab="${this.currentIndex}"]`);
    this.activeTest.classList.add('show-testimonial');
  }
}

document.querySelectorAll('.testimonials').forEach(item => new Carousel(item));
