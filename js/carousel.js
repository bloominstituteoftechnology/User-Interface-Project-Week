class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.imageArr = Array.from(this.carousel.querySelectorAll("img"));
    this.leftButton = this.carousel.querySelector(".left-button");
    this.rightButton = this.carousel.querySelector(".right-button");
    let imageIndex = 0;

    this.rightButton.addEventListener("click", () => {
      if (imageIndex === this.imageArr.length) {
        imageIndex = 0;
      }
      this.displayImage(this.imageArr[imageIndex]);
      imageIndex++;
    });
    this.leftButton.addEventListener("click", () => {
      if (imageIndex < 0) {
        imageIndex = this.imageArr.length - 1;
      }
      this.displayImage(this.imageArr[imageIndex]);
      imageIndex--;
    });

    this.img = this.imageArr[imageIndex];
;
  }

  displayImage(image) {
    this.imageArr.forEach(img => {
      img.style.display = "none";
    });
    image.style.display = "inline";
    image.style.zIndex = "-2";
  }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

carousel.displayImage(document.querySelector(".carousel img"));


