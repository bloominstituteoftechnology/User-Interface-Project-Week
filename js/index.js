// JS goes here

// ====================================== Navigation ==========================

const toggleMenu = () => {
  menu.classList.toggle("menu-hidden");
  menuOpenButton.style.display = "none";
  menuCloseButton.style.display = "block";
  header.style.height = "100%";
  header.style.opacity = "0.90";
  document.body.style.overflow = "hidden";
};

const toggleCloseMenu = () => {
  menu.classList.toggle("menu-hidden");
  menuCloseButton.style.display = "none";
  menuOpenButton.style.display = "block";
  header.style.height = "56px";
  header.style.opacity = "1";
  document.body.style.overflow = "auto";
};

const menu = document.querySelector(".menu-content");
const menuOpenButton = document.querySelector(".menu-open-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const header = document.querySelector(".header");
menuOpenButton.addEventListener("click", toggleMenu);
menuCloseButton.addEventListener("click", toggleCloseMenu);

// ====================================== Services Page ==========================
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    this.element.addEventListener("click", () => this.select());
  }
  select() {
    links.forEach(link => {
      link.classList.remove("tabs-link-selected");
    });
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(item => {
      item.classList.remove("tabs-item-selected");
    });

    this.element.classList.add("tabs-item-selected");
  }
}

let links = document.querySelectorAll(".tabs-link");
links.forEach(link => new TabLink(link));

// ========================================================== Caro

class Carousel {
  constructor(element) {
    this.element = element;
    this.currentItemIndex = 0;

    this.carouselItem = this.element.querySelectorAll(".carousel-item");
    this.carouselItem[this.currentItemIndex].style.display = "block";

    const rightButton = this.element.querySelector(".right-button");
    rightButton.addEventListener("click", () => this.slideNext());

    const leftButton = this.element.querySelector(".left-button");
    leftButton.addEventListener("click", () => this.slideBack());
  }
  slideNext() {
    //console.log("slide next clicked");
    this.carouselItem[this.currentItemIndex].style.display = "none";
    this.currentItemIndex++;
    if (this.currentItemIndex === this.carouselItem.length) {
      this.currentItemIndex = 0;
    }
    this.carouselItem[this.currentItemIndex].style.display = "block";
  }

  slideBack() {
    //console.log("slide back clicked");
    this.carouselItem[this.currentItemIndex].style.display = "none";
    this.currentItemIndex--;
    if (this.currentItemIndex === -1) {
      this.currentItemIndex = this.carouselItem.length - 1;
    }
    this.carouselItem[this.currentItemIndex].style.display = "block";
  }
}

let carousel = document.querySelector(".carousel");
//console.log(carousel);
new Carousel(carousel);
