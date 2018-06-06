// Dropdown Class/functions
class Dropdown {
  constructor(element, parent) {
    this.element = element;

    this.button = this.element.querySelector(".dropdown-button");
    this.close = this.element.querySelector(".close-btn");
    this.content = this.element.querySelector(".dropdown-content");
    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
    this.close.addEventListener("click", () => {
      this.toggleClose();
    });
  }

  toggleContent() {
    this.content.classList.toggle("dropdown-hidden");
    this.button.classList.toggle("dropdown-hidden");
  }

  toggleClose() {
    this.content.classList.toggle("dropdown-hidden");
    this.button.classList.toggle("dropdown-hidden");
  }
}

let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));





//scroll function
const dropdownScroll = () => {
  nav.style.position = "fixed";
  nav.style.top = 0;
  nav.style.backgroundColor = "#9DA7B1";
  nav.style.opacity = 0.95;
};
const nav = document.querySelector(".dropdown");
window.addEventListener("scroll", dropdownScroll);





//Tabs Classes/functions
class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map(link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.element.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener("click", () => {
      this.tabs.updateActive(this);
      this.select();
    });
  }

  select() {
    this.element.classList.add("tabs-link-selected");
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected");
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");
  }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
