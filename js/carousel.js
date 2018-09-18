class Carousel {
  constructor(element, left, right, imgs, infoButton, info) {
    this.element = element;
    this.left = document.querySelector(left);
    this.right = document.querySelector(right);
    this.images = document.querySelectorAll(imgs);
    this.infoButton = document.querySelector(infoButton);
    this.info = document.querySelector(info);
    this.currentIndex = 0;
    this.infoButton.addEventListener("mouseenter", () => this.infoOverlay());
    this.infoButton.addEventListener("mouseleave", () => this.exitOverlay());
    this.left.addEventListener("click", () => this.previousSlide());
    this.right.addEventListener("click", () => this.nextSlide());
  }

  infoOverlay() {
    this.info.classList.add("hover-box");
    this.infoButton.style.opacity = "0.1";
  }

  exitOverlay() {
    this.info.classList.remove("hover-box");
    this.infoButton.style.opacity = "";
  }

  previousSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.images.forEach(img => (img.style.display = "none"));
    this.images[this.currentIndex].style.display = "block";
    Tweenlite.from(this.images[this.currentIndex], 5, {
      opacity: 0,
      right: "100px"
    });
  }

  nextSlide() {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.images.forEach(img => (img.style.display = "none"));
    this.images[this.currentIndex].style.display = "block";
    Tweenlite.from(this.images[this.currentIndex], 5, {
      opacity: 0,
      right: "100px"
    });
  }
}

let residentialCarousel = document.querySelector(".resCarousel");
const resCarousel = new Carousel(
  residentialCarousel,
  ".res-left-button",
  ".res-right-button",
  ".resCarouselImg",
  ".res-info-button",
  ".res-box"
);
resCarousel.images[0].style.display = "block";

let commercialCarousel = document.querySelector(".comCarousel");
const comCarousel = new Carousel(
  commercialCarousel,
  ".com-left-button",
  ".com-right-button",
  ".comCarouselImg",
  ".com-info-button",
  ".com-box"
);
comCarousel.images[0].style.display = "block";
