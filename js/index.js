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
