class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map( link => {
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
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = parent.getTab(element.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

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

let tabs = document.querySelectorAll(".services");
tabs = Array.from(tabs).map(tab => {
  return new Tabs(tab);
});

let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".nav-btn");
let closeBtn = document.querySelector(".close-btn");
let nav = document.querySelector('.nav-container');

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1 && overlay.style.display !== "block") {
    nav.style.background = "#9DA7B1";
    nav.style.opacity = "0.95";
    nav.style.zIndex = "100";
  } else {
    nav.style.background = "none";
    nav.style.opacity = "1";
  }
});

menuBtn.addEventListener("click", function() {
  overlay.style.display = "block";
  nav.setAttribute("style", "display: none;");
});

closeBtn.addEventListener("click", function() {
  overlay.style.display = "none";
  nav.removeAttribute("style", "display");
  if (document.documentElement.scrollTop > 1) {
    nav.style.background = "#9DA7B1";
    nav.style.opacity = "0.95";
    nav.style.zIndex = "100";
  }
});
