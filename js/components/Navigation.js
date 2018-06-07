class Navigation {
  constructor(element, window, document) {
    this.element = element;
    this.window = window;
    this.document =document;
    this.ticking = false;
    this.triggerY = 50;
    this.button = element.querySelector('button');
    this.button = this.button.addEventListener('click', () => this.onClick());
    this.animationTiming = 250;

    this.links = this.element.querySelectorAll('.nav__link-container a');
    console.log(this.links);
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

    // animate links in
    if (this.element.classList.contains('is-open')) {
      let incrementTime = this.animationTiming;
      for (let i = 0; i < this.links.length; i++) {
        setTimeout(() => { this.links[i].classList.add('is-showing'); }, incrementTime);
        incrementTime += this.animationTiming;
      }
      console.log('opening nav');
    } else {
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].classList.remove('is-showing');
      }      
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