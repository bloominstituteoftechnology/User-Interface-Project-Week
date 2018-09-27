// JS goes here
let btn = document.querySelector(".nav-button");
let navItems = document.querySelector(".nav-items");
let carouselHeader = document.querySelector(".carousel-header");

btn.addEventListener("click", () => navToggle());

const navToggle = () => {
  if (carouselHeader) {
    carouselHeader.classList.toggle("nav-up");
  }
  navItems.classList.toggle("active");
  if (navItems.classList.contains("active")) {
    btn.src = "img/nav-hamburger-close.png";
  } else {
    btn.src = "img/nav-hamburger.png";
  }
};

class Content {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
  }
}

let contents = document.querySelectorAll(".tabbed-content");

contents = Array.from(contents).map(x => new Content(x));

class Tab {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    contents.forEach(x => {
      if (x.data == this.data) {
        this.content = x.element;
        return;
      }
    });
    this.element.addEventListener("click", () => this.selector());
  }
  selector() {
    tabs.forEach(x => {
      x.element.classList.remove("active-tab");
      x.content.classList.remove("active-content");
    });
    this.element.classList.toggle("active-tab");
    this.content.classList.toggle("active-content");
  }
}

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(x => new Tab(x));

//carousel

class ImageCard {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.img;
  }
}

let carouselImages = document.querySelectorAll(".carousel-img");
carouselImages = Array.from(carouselImages).map(x => new ImageCard(x));

class TextHeading {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.img;
    carouselImages.forEach(x => {
      if (x.data === this.data) {
        this.correspondingImage = x.element;
      }
    });
  }
  next() {
    let newCarousel;
    let newData = Number(this.data) + 1;
    if (newData === 5) {
      newData = 1;
    }
    this.element.classList.toggle("move-left");
    this.correspondingImage.classList.toggle("move-right");
    setTimeout(() => {
      this.element.classList.remove("active-text");
      this.correspondingImage.classList.remove("active-img");
      this.element.classList.remove("move-left");
      this.correspondingImage.classList.remove("move-right");
    }, 500);

    carouselText.forEach(x => {
      if (x.data == newData) {
        newCarousel = x;
      }
    });
    newCarousel.element.classList.toggle("move-right");
    newCarousel.correspondingImage.classList.toggle("move-left");
    setTimeout(() => {
      newCarousel.element.classList.toggle("active-text");
      newCarousel.correspondingImage.classList.toggle("active-img");
      newCarousel.element.classList.remove("move-right");
      newCarousel.correspondingImage.classList.remove("move-left");
    }, 500);
  }

  last() {
    let newCarousel;
    let newData = Number(this.data) - 1;
    if (newData == 0) {
      newData = 4;
    }
    this.element.classList.toggle("move-right");
    this.correspondingImage.classList.toggle("move-left");
    setTimeout(() => {
      this.element.classList.remove("active-text");
      this.correspondingImage.classList.remove("active-img");
      this.element.classList.remove("move-right");
      this.correspondingImage.classList.remove("move-left");
    }, 500);

    carouselText.forEach(x => {
      if (x.data == newData) {
        newCarousel = x;
      }
    });
    newCarousel.element.classList.toggle("move-left");
    newCarousel.correspondingImage.classList.toggle("move-right");
    setTimeout(() => {
      newCarousel.element.classList.toggle("active-text");
      newCarousel.correspondingImage.classList.toggle("active-img");
      newCarousel.element.classList.remove("move-left");
      newCarousel.correspondingImage.classList.remove("move-right");
    }, 500);
  }
}

class Arrow {
  constructor(element) {
    this.element = element;
    this.isLeft = this.element.classList.contains("left");
    this.element.addEventListener("click", () => this.carouselChange());
  }
  carouselChange() {
    let current;
    carouselText.forEach(x => {
      if (x.element.classList.contains("active-text")) {
        current = x;
      }
    });

    if (this.isLeft) {
      current.last();
    } else {
      current.next();
    }
  }
}

let arrows = document.querySelectorAll(".arrow");
arrows = Array.from(arrows).map(x => new Arrow(x));

let carouselText = document.querySelectorAll(".carousel-text");
carouselText = Array.from(carouselText).map(x => new TextHeading(x));
