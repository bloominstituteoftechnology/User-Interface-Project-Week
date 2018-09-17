class NavButton {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", () => this.navigator());
  }
  navigator() {
    let nav = document.querySelector(".navigation");
    nav.classList.toggle("navigation-open");
    let open = document.querySelector(".open-menu");
    open.classList.toggle("closed");
    let closedMenu = document.querySelector(".close-menu");
    closedMenu.style.display === "block"
      ? (closedMenu.style.display = "")
      : (closedMenu.style.display = "block");
  }
}

let navButttons = document.querySelectorAll(".change");

navButttons = Array.from(navButttons).map(
  navButton => new NavButton(navButton)
);

class MobileImg {
  constructor(element) {
    this.element = element;
    window.innerWidth <= 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
    window.addEventListener("resize", () => this.swapInMobile());
  }
  swapInMobile() {
    window.innerWidth <= 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
  }
}

let mobileImgs = document.querySelectorAll(".closed");

mobileImgs = Array.from(mobileImgs).map(mobileImg => new MobileImg(mobileImg));

class DesktopImg {
  constructor(element) {
    this.element = element;
    window.innerWidth > 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
    window.addEventListener("resize", () => this.swapInDesktop());
  }
  swapInDesktop() {
    window.innerWidth > 500
      ? this.element.classList.remove("closed")
      : this.element.classList.add("closed");
  }
}

let desktopImgs = document.querySelectorAll(".desktop-img");

desktopImgs = Array.from(desktopImgs).map(
  desktopImg => new DesktopImg(desktopImg)
);

class Tabs {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.matchingContent = document.querySelector(
      `.tab-box[data-tab="${this.data}"]`
    );
    this.tabBox = new TabBox(this.matchingContent);
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    const tabs = document.querySelectorAll(".tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("tab-selected"));
    this.element.classList.add("tab-selected");
    this.tabBox.select();
  }
}

class TabBox {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tab-box");
    Array.from(items).forEach(item =>
      item.classList.remove("tab-box-selected")
    );
    this.element.classList.add("tab-box-selected");
  }
}

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(tabLink => new Tabs(tabLink));

// tabs[0].select();

class Carousel {
  constructor(element) {
    this.element = element;
    this.left = document.querySelector(".left-button");
    this.right = document.querySelector(".right-button");
    this.images = document.querySelectorAll(".carousel img");
    this.currentIndex = 0;
    this.left.addEventListener("click", () => this.previousSlide());
    this.right.addEventListener("click", () => this.nextSlide());
  }

  previousSlide() {
    this.currentIndex = this.currentIndex === 0 ? 2 : this.currentIndex - 1;
    this.images.forEach(img => (img.style.display = "none"));
    this.images[this.currentIndex].style.display = "block";
    Tweenlite.from(this.images[this.currentIndex], 5, {opacity:0, right:"100px"});
  }

  nextSlide() {
    this.currentIndex = this.currentIndex === 2 ? 0 : this.currentIndex + 1;
    this.images.forEach(img => (img.style.display = "none"));
    this.images[this.currentIndex].style.display = "block";
    Tweenlite.from(this.images[this.currentIndex], 5, {opacity:0, right:"100px"});
  }
}

let residentialCarousel = document.querySelector(".resCarousel");
console.log(document.querySelector(".resCarousel"));
const resCarousel = new Carousel(residentialCarousel);
resCarousel.images[0].style.display = "block";


let commercialCarousel = document.querySelector(".comCarousel");
const comCarousel = new Carousel(commercialCarousel);
comCarousel.images[0].style.display = "block";


