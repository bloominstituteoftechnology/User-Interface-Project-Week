// expanding nav menu functionality. doesn't specify home-page or services since it needs
//to function similarly on both
const menuButton = document.querySelector(".menu .button-img img");

const closedURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger.png?raw=true";
const openURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger-close.png?raw=true";
const menuNav = document.querySelector(".menu .nav");
menuButton.addEventListener("click", () => {
  //before greensock, this function just toggled .nav's display from 'none' to 'flex' and changed the button's image
  //now it transitions to slide open, with expanding text for the links, and goes in reverse when closed
  if (menuButton.src === closedURL) {
    event.currentTarget.src = openURL;
    menuNav.style.display = "flex";
    TweenMax.to(".nav", 1, { height: "100vh" });
    TweenMax.to(".nav-link", 0.5, { fontSize: "4.8rem" });
    TweenMax.to(".nav-link", 0.5, { lineHeight: "8.5rem" });
  } else {
    event.currentTarget.src = closedURL;
    // menuNav.style.display = "none";
    TweenMax.to(".nav", 1, { height: "0vh" });
    TweenMax.to(".nav", 0.8, { display: "none" });
    TweenMax.to(".nav-link", 1, { fontSize: "0rem" });
    TweenMax.to(".nav-link", 1, { lineHeight: "0rem" });
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
