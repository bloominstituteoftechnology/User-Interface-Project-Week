// JS goes here
class Navigation {
  constructor(element, window) {
    this.element = element;
    this.window = window;
    this.ticking = false;
    this.triggerY = 50;
  }

  init() {
    this.window.addEventListener('scroll', this.checkBackground.bind(this));
  }

  checkBackground() {
    if (!this.ticking) {
      this.window.requestAnimationFrame(() => this.changeBackground()); // to save computations
      this.ticking = true;
    }
  }

  changeBackground() {
    if (this.window.scrollY > this.triggerY) {
      if (!this.element.classList.contains('is-scrolled')) {
        this.element.classList.add('is-scrolled');
      }
    } else {
      if (this.element.classList.contains('is-scrolled')) {
        this.element.classList.remove('is-scrolled');
      }
    }
    this.ticking = false;    
  }
}