let header = document.querySelector(".header")
document.addEventListener("scroll", () => {
  header.classList.add("opacity")
})

let menu = document.querySelector(".menu")
let navbtn = document.querySelector(".header img")
let menubtn = document.querySelector(".menu img")
navbtn.addEventListener("click", () => {
  header.classList.toggle("hidden")
    menu.classList.toggle("hidden")
})
menubtn.addEventListener("click", () => {
  header.classList.toggle("hidden")
    menu.classList.toggle("hidden")
})

class Sections {
  constructor(element) {
    this.element = element;
    this.buttons = this.element.querySelectorAll(".button");
    this.buttons = Array.from(this.buttons).map(button => {
      return new Button(button, this);
    });
    this.activebtn = this.buttons[0];
    this.init();
  }
  init() {
    this.activebtn.select();
  }
  updateActive(newActive) {
    this.activebtn.deselect();
    this.activebtn = newActive;
  }
  getTopic(data) {
    return this.element.querySelector(`.tab[data-topic="${data}"]`);
  }
}

class Button {
  constructor(element, parent) {
    this.element = element;
    this.sections = parent
    this.tab = parent.getTopic(this.element.dataset.topic);
    this.tab = new Tab(this.tab);
    this.element.addEventListener("click", () => {
      this.sections.updateActive(this);
      this.select();
    });
  };
  select() {
    this.element.classList.add("button-active");
    this.tab.select();
  }
  deselect() {
    this.element.classList.remove("button-active");
    this.tab.deselect();
  }
}

class Tab {
  constructor(element) {
    this.element = element;
  }
  select() {
    this.element.classList.add("tab-active")
  }
  deselect() {
    this.element.classList.remove("tab-active")
  }
}

let sections = document.querySelectorAll(".sections")
sections = Array.from(sections).map(element => new Sections(element));
