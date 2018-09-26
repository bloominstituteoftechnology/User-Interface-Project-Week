// expanding nav menu functionality. doesn't specify home-page or services since it needs
//to function similarly on both
const menuButton = document.querySelector(".menu .button-img img");

const closedURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger.png?raw=true";
const openURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger-close.png?raw=true";
const menuNav = document.querySelector(".menu .nav");
menuButton.addEventListener("click", () => {
  if (menuButton.src === closedURL) {
    event.currentTarget.src = openURL;
    menuNav.style.display = "flex";
  } else {
    event.currentTarget.src = closedURL;
    menuNav.style.display = "none";
  }
});

//tab navigator for services.html
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tab-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.item);
    this.element.addEventListener("click", event => {
      this.select(event);
    });
  }

  select() {
    const links = document.querySelectorAll(".tab-link");
    Array.from(links).forEach(link =>
      link.classList.remove("tab-link-selected")
    );
    this.element.classList.add("tab-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tab-item");
    Array.from(items).forEach(item =>
      item.classList.remove("tab-item-selected")
    );
    this.element.classList.add("tab-item-selected");
  }
}
let links = document.querySelectorAll(".tab-link");

links = Array.from(links).map(link => new TabLink(link));

links[0].select();
