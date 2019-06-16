class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.querySelectorAll("img");
    this.currentImage = 0;
    this.rightButton = this.element.querySelector(".right-button");
    this.leftButton = this.element.querySelector(".left-button");
    this.imageNum = this.images.length;
    this.showImage();

    //event listeners
    this.rightButton.addEventListener("click", event => this.nextImage(event));
    this.leftButton.addEventListener("click", event => this.previousImage(event));
  }

  nextImage() {
    this.currentImage++;
    this.currentImage = this.currentImage % this.imageNum;
    this.showImage();
  }

  previousImage() {
    this.currentImage--;
    if (this.currentImage === -1) {
      this.currentImage = this.imageNum - 1;
    }
    this.showImage();
  }

  showImage() {
    this.images.forEach(i => (i.style.display = "none"));
    this.images[this.currentImage].style.display = "block";
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);
