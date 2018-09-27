//carousel JS for Projects page

class Carousel {
  constructor(domElement) {
    this.domElement = domElement;
    this.leftButton = domElement.querySelector(".left-button");
    this.rightButton = domElement.querySelector(".right-buttton");
    this.images = domElement.querySelectorAll("img");
    this.currentIndex = 0;
    this.images[0].style.display = "block";
    console.log(this.images);
  }
}
let carousels = document.querySelectorAll(".carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
