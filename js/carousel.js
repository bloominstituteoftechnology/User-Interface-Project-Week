class Carousel {
  constructor(element){
    // this = Carousel{element}

    this.element = element;   // = div.carousel

    // create a reference to left & right button classes
    this.left = element.querySelector('.left-button');  // = div.left-button
    this.right = element.querySelector('.right-button'); // = div.right-button

    // create a reference to all img
    this.images = this.element.querySelectorAll('img');  // nodeList(4)
    //  0 = img, 1 = img, 2 = img, 3 = img
    // define defaults for carousel
    this.current = 0;
    this.currentIndex = this.images[this.current];
    this.currentIndex.style = 'display: block';

    // add event listeners for left & right button
    this.left.addEventListener( 'click', () => this.goLeft() );
    this.right.addEventListener( 'click', () => this.goRight() );
  }



  goLeft() {
    this.currentIndex.style = 'display: none';

    if(this.current === 0) {this.current = this.images.length - 1}
    else {this.current = this.current - 1}

    this.showDatImage();
  }

  goRight(){
    this.currentIndex.style = 'display: none';

    if(this.current === this.images.length - 1) {this.current = 0}
    else {this.current = this.current + 1}

    this.showDatImage();
  }

  showDatImage() {
    this.currentIndex = this.images[this.current];
    this.currentIndex.style.transition;
    this.currentIndex.style = 'display: block';
  }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);
