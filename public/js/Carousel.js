class Carousel {
  constructor(element) {
      this.element = element;
      this.imgs = element.querySelectorAll('img');
      this.leftBtn = element.querySelector('.left-button');
      this.rightBtn = element.querySelector('.right-button');
      this.current = 0;

      this.leftBtn.addEventListener('click', () => {this.selectImg(-1)})
      this.rightBtn.addEventListener('click', () => {this.selectImg(1)})

      this.imgs[0].classList.add('img-active');
  }
  selectImg(direction) {
      this.imgs.forEach(img => img.classList.remove('img-active'));
      this.current += direction;
      if (direction === -1 && this.current < 0) {
          this.current = this.imgs.length -1;
      }
      if (direction === 1 && !this.imgs[this.current]) {
          this.current = 0;
      }
      this.imgs[this.current].classList.add('img-active');
  }
}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(item => new Carousel(item));