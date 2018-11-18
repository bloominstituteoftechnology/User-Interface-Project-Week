class Carousel{
  constructor(carouselElement){
    this.carouselElement = carouselElement;
    this.left = carouselElement.querySelector('.left-button');
    this.right = carouselElement.querySelector('.right-button');
    this.left.addEventListener('click', () => this.moveLeft());
    this.right.addEventListener('click', () => this.moveRight());
    this.currentIndex = 0;
    this.carouselBlock = Array.from(carouselElement.querySelectorAll('.carousel-item'));
    this.display(this.currentIndex);
    console.log(this.carouselBlock);
  }

  display(index){
    this.carouselBlock[index].style.display="block";
  }

  displayNone(){
    this.carouselBlock.forEach(block => (block.style.display = 'none'));
  }

  moveLeft(){
    this.displayNone();
    if (this.currentIndex === 0){
      this.currentIndex = this.carouselBlock.length -1
    } else {
      this.currentIndex = this.currentIndex -1
    }
    this.display(this.currentIndex);
  }

  moveRight(){
    this.displayNone();
    if (this.currentIndex === this.carouselBlock.length - 1){
      this.currentIndex = 0
    } else {
      this.currentIndex = this.currentIndex + 1
    }
    this.display(this.currentIndex);
  }
}


let carousel = document.querySelectorAll('.projects-container').forEach(carouselItem => new Carousel(carouselItem));
