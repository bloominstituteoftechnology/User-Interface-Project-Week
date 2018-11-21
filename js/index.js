// JS goes here
class Tabs {
  constructor(element) {
    this.element = element;
    this.id = this.element.dataset.tab;
    this.contentElement = document.querySelector(
      `.services__option[data-content='${this.id}']`
    );
    console.log(this.contentElement);
    this.elementContent = new Contents(this.contentElement);
    this.element.addEventListener("click", _ => this.click());
  }
  click() {
    const buttons = document.querySelectorAll(".services__options__btn");
    buttons.forEach(e => e.classList.remove("active"));
    this.element.classList.add("active");
    this.elementContent.click();
  }
}
class Contents {
  constructor(content) {
    this.content = content;
  }
  click() {
    const contentList = document.querySelectorAll(".services__option");
    contentList.forEach(e => e.classList.remove("shown"));
    this.content.classList.add("shown");
  }
}
const tabs = document
  .querySelectorAll(".services__options__btn")
  .forEach(tab => new Tabs(tab));

// Animation

const nav = document.querySelector(".nav");
const list = document.querySelector(".nav__list");
const menu = document.querySelector(".nav__menu");
const close = document.querySelector(".nav__close");
const time = _ => list.classList.toggle("flex");
const navTime = _ => nav.classList.toggle("nav--toggled");

menu.addEventListener("click", e => {
  menu.classList.toggle("none");
  close.classList.toggle("flex");
  list.classList.toggle("flex");
  TweenMax.to(".nav__list", 0.7, { opacity: 1 });
  if (window.innerWidth <= 640) {
    TweenMax.to(".nav", 0.5, { height: 443 });
  } else {
    TweenMax.to(".nav", 0.5, { height: 598 });
  }
  setTimeout(navTime, 500);
});

close.addEventListener("click", e => {
  menu.classList.toggle("none");
  close.classList.toggle("flex");
  TweenMax.to(".nav__list", 0.2, { opacity: 0 });
  TweenMax.to(".nav", 0.5, { height: 50 });
  setTimeout(time, 700);
  nav.classList.toggle("nav--toggled");
});
//640
//443
