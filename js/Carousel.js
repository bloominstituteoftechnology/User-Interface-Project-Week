class Carousel {
  constructor(cElement) {
    this.cElement = cElement;
    this.arrows = this.cElement.querySelectorAll('.arrow');
    this.leftArrow = this.arrows[0];
    this.rightArrow = this.arrows[1];
    this.slides = this.cElement.querySelectorAll('.carousel-img');
    this.currentSlide = 0;
    this.canSlide = true;

    this.rightArrow.addEventListener('click', _ => this.slideRight());
    this.leftArrow.addEventListener('click', _ => this.slideLeft());

    setInterval( _ => this.slideRight(), 5000);
    
  }

  slideRight() {
    if(this.canSlide){
      this.canSlide = false;
      let pastSlide = this.currentSlide;
      if(this.currentSlide < this.slides.length-1){
        this.currentSlide++;
      }else{
        this.currentSlide = 0;
      }
      this.slides[this.currentSlide].style.left = '855px';
      this.slides[this.currentSlide].classList.remove('hide');
      TweenMax.to(this.slides[pastSlide], 1, {left: -855, onComplete: _ => this.slideHide(this.slides[pastSlide])});
      TweenMax.to(this.slides[this.currentSlide], 1, {left: 0, onComplete: _ => this.canSlide = true});
    }
  }

  slideLeft() {
    if(this.canSlide){
      this.canSlide = false;
      let pastSlide = this.currentSlide;
      if(this.currentSlide > 0){
        this.currentSlide--;
      }else{
        this.currentSlide = this.slides.length -1;
      }
      this.slides[this.currentSlide].style.left = '-855px';
      this.slides[this.currentSlide].classList.remove('hide');
      TweenMax.to(this.slides[pastSlide], 1, {left: 855, onComplete: _ => this.slideHide(this.slides[pastSlide])});
      TweenMax.to(this.slides[this.currentSlide], 1, {left: 0, onComplete: _ => this.canSlide = true});
    }
  }


  slideHide(elem) {
    elem.classList.add('hide');
  }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);