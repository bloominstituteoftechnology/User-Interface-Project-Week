class Navigation {
  constructor(element, window, document) {
    this.element = element;
    this.window = window;
    this.document =document;
    this.ticking = false;
    this.triggerY = 50;
    this.button = element.querySelector('button');
    this.button = this.button.addEventListener('click', () => this.onClick());
  }

  init() {
    this.window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    if (!this.ticking) {
      this.window.requestAnimationFrame(() => this.changeBackground()); // to save computations
      this.ticking = true;
    }
  }

  onClick() {
    this.element.classList.toggle('is-open');
    this.document.body.classList.toggle('body--nav-is-open');
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