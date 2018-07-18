// JS goes here
class NaviBar {
  constructor (element) {
    this.element = element;
    this.links = this.element.querySelector(".links");
    this.burger = this.element.querySelector(".navBurger");
    this.burger.addEventListener('click', () => {this.toggleContent()});
  }

  toggleContent() {
    this.element.classList.toggle("burger-select-nav");
    this.links.classList.toggle("links-hidden");
  }

}

let naviBar = document.querySelectorAll(".nav");
naviBar = Array.from(naviBar).map(nav => new NaviBar (nav));
