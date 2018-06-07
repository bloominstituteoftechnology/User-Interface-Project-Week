class Header {
  constructor(element, window) {
    this.element = element;
    this.window = window;
    this.textLines = this.element.querySelectorAll('p');
    this.animationTiming = 350;
    this.animationDelay = 350;
  }

  init() {
    setTimeout(() => { this.playIntro(); }, this.animationDelay);
  }

  playIntro() {
    for (let i = 0; i < this.textLines.length; i++) {
      setTimeout(() => { this.textLines[i].classList.add('is-showing'); }, this.animationTiming);
      this.animationTiming += this.animationTiming;
    }
  }
  
}