//carousel JS for Projects page

class Carousel {
  constructor(domElement) {
    this.domElement = domElement;
    this.leftButton = domElement.querySelector(".left-button");
    this.rightButton = domElement.querySelector(".right-button");
    this.images = domElement.querySelectorAll("img");
    this.images[0].style.display = "block";
    this.index = 0;
    this.leftButton.addEventListener("click", () => {
      this.cycleLeft();
    });
    this.rightButton.addEventListener("click", () => {
      this.cycleRight();
    });
  }
  cycleLeft() {
    this.images[this.index].style.display = "none";
    if (this.index === 0) {
      this.index = this.images.length - 1;
    } else {
      this.index--;
    }
    this.images[this.index].style.display = "block";
  }
  cycleRight() {
    this.images[this.index].style.display = "none";
    if (this.index === this.images.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.images[this.index].style.display = "block";
  }
}
let carousels = document.querySelectorAll(".carousel");

carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
