class ButtonLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.contentElement = document.querySelector(
      `.tabContent[data-tab='${this.data}']`
    );

    this.tabContent = new TabContent(this.contentElement);

    this.element.addEventListener("click", event => {
      this.select(event);
    });
  }

  select(event) {
    let buttonFunction = document.querySelectorAll(".tabButton");

    Array.from(buttonFunction).forEach(button =>
      button.classList.remove("tabButtonSelected")
    );

    this.element.classList.add("tabButtonSelected");

    this.tabContent.select();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }

  select() {
    let blah = document.querySelectorAll(".tabContent");
    Array.from(blah).forEach(link =>
      link.classList.remove("tabContentSelected")
    );
    this.element.classList.add("tabContentSelected");
  }
}

let buttonFunction = document.querySelectorAll(".tabButton");

buttonFunction = Array.from(buttonFunction).map(
  button => new ButtonLink(button)
);

class Dropdown {
  constructor(element) {
    this.element = element;
    this.menuButton = this.element.querySelector(".menuButton");
    this.content = document.querySelector(".menuHidden");
    this.menuButton.addEventListener("click", event =>
      this.toggleContent(event)
    );
  }

  toggleContent(event) {
    this.content.classList.toggle("menuOptions");
    this.menuButton.classList.toggle("otherMenuButton");
  }
}

let dropdownMenu = document.querySelectorAll(".menuContent");
dropdownMenu = Array.from(dropdownMenu).map(dropdown => new Dropdown(dropdown));

let closedNav = document.querySelector(".menuContent");
let navImage = document.querySelector(".menuButton");
