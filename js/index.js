// JS goes here

//Tabs
class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map(link=>{
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.activeLink.select();
  }

  activate(link) {
    this.activeLink.deselect();
    this.activeLink = link;
  }

  getTab(dataValue) {
    return this.element.querySelector(`.tab-item[data-tab="${dataValue}"]`);
  }
}

// tablink
class TabsLink {
  //  parentElement of the objects
  constructor(element, parentElements) {
    this.element = element;
    this.tabs = parentElements;
    this.tabsItem = parentElements.getTab(element.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener("click", () => {
      this.tabs.activate(this);
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

// TabsItem
class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("tab-item-selected");
  }

  deselect() {
    this.element.classList.remove("tab-item-selected");
  }
}

// "services" Tabs
let tabs = document.querySelectorAll(".services");
tabs = Array.from(tabs).map(tab => {
  return new Tabs(tab);
});

// overlay
let overlay = document.querySelector(".overlay-container");
let burgerBtn = document.querySelector(".nav-burger");
let closeBtn = document.querySelector(".close-button");
let nav = document.querySelector(".navbar");

//  overlay EventListeners
burgerBtn.addEventListener("click", function() {
  overlay.setAttribute("style", "display: block;");
});
closeBtn.addEventListener("click", function() {
  overlay.setAttribute("style", "display: none;");
});
