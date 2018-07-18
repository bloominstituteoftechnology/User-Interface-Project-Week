// JS goes here
class NaviBar {
  constructor (element) {
    this.element = element;
    this.links = this.element.querySelector(".links");
    this.burger = this.element.querySelector(".burger-div");
    // this.burgers = this.element.querySelectorAll(".navBurger");
    this.img = this.element.querySelector(".burger-img")
    this.burger.addEventListener('click', () => {this.toggleContent()});
  }

  toggleContent() {
    this.element.classList.toggle("burger-select-nav");
    this.links.classList.toggle("links-hidden");
    this.burger.classList.toggle("burger-on");
  }

}

let naviBar = document.querySelectorAll(".nav");
naviBar = Array.from(naviBar).map(nav => new NaviBar (nav));
