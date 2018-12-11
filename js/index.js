/* Open */
class Carousel {
  constructor(ele) {
    this.ele = ele;
    this.leftBtn = this.ele.querySelector(".left-button");
    this.rightBtn = this.ele.querySelector(".right-button");
    this.images = this.ele.querySelectorAll("img");
    this.currentIndex = this.images[0];
    this.leftBtn.addEventListener("click", () => this.left());
    this.rightBtn.addEventListener("click", () => this.right());
    this.currentIndex.style.display = "block";
    this.i = 0;
    //setInterval(() => this.right(), 5000);
  }

  left() {
    this.images.forEach(img => (img.style.display = "none"));
    if (this.i > 0) {
      this.images[this.i].style.display = "block";
      this.i -= 1;
    } else {
      this.images[this.images.length - 1].style.display = "block";
      this.i = this.images.length - 1;
    }
  }

  right() {
    this.images.forEach(img => (img.style.display = "none"));
    //this.currentIndex = this.currentIndex.nextElementSibling;
    if (this.i < this.images.length) {
      this.images[this.i].style.display = "block";
      this.i += 1;
    } else {
      this.images[0].style.display = "block";
      this.i = 0;
    }
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    );
    //console.log(this.itemElement);
    this.tabItem = new TabItem(this.itemElement);

    // get links and item
    this.links = document.querySelectorAll(".tabs-link");
    this.tabItems = document.querySelectorAll(".tabs-item");

    // add click event to all links
    this.element.addEventListener("click", () => this.select(this.links));
  }

  select(links) {
    Array.from(links).forEach(tab =>
      tab.classList.remove("tabs-link-selected")
    );
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select(this.tabItems);
  }
}
class TabItem {
  constructor(element) {
    this.element = element;
  }
  select(tabItems) {
    // const tabItems = document.querySelectorAll('.tabs-item');
    tabItems.forEach(item => {
      item.classList.remove("tabs-item-selected");
    });
    this.element.classList.add("tabs-item-selected");
  }
}

const overlay = document.querySelector(".overlay");

function on() {
  overlay.style.display = "block";
}

function off() {
  overlay.style.display = "none";
}

links = document
  .querySelectorAll(".tabs-link")
  .forEach(link => new TabLink(link));

let carousel = document.querySelector(".carousel");
new Carousel(carousel);
