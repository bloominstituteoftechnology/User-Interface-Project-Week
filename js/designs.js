
class Slide {
  constructor(props) {
    this.element = props;
    this.sliders = this.element.querySelectorAll('.slide');
    this.sliders = Array.from(this.sliders);
    this.buttonLeft = this.element.querySelector('.btn-left');
    this.buttonLeft.addEventListener('click', () => {this.moveLeft()});
    this.buttonRight = this.element.querySelector('.btn-right');
    this.buttonRight.addEventListener('click', () => {this.moveRight()});
    this.current = this.sliders[3];
    this.init();
  }
  
  init() {
    this.current.classList.add('active');
  }

  updateActive(update) {
    this.current.classList.remove('active');
    this.current = update;
    this.current.classList.add('active');
    TweenMax.from(this.current, .6, {opacity:0});
  }

  moveLeft() {
    let update;
    if (this.sliders.indexOf(this.current) === 0) {
      update = this.sliders[this.sliders.length - 1]
    } else {
      let i = this.sliders.indexOf(this.current);
      i--;
      update = this.sliders[i];
    }
    this.updateActive(update);
  }

  moveRight() {
    let update;
    if (this.sliders.indexOf(this.current) + 2 > this.sliders.length) {
      update = this.sliders[0];
    } else {
      let i = this.sliders.indexOf(this.current);
      i++;
      update = this.sliders[i];
    }
    this.updateActive(update);
  }
}

let slide = document.querySelector('.container');
slide = new Slide(slide);