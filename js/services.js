function services() {
  let menuOpen = true;

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", clickMenu);
  let menu = document.querySelector(".nav");

  function clickMenu() {
    if (menuOpen === true) {
      menu.classList.remove("nav-close");
      menu.classList.add("nav-open");
      menuOpen = false;
    } else {
      menu.classList.remove("nav-open");
      menu.classList.add("nav-close");
      menuOpen = true;
    }
  }

  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener("click", () => { this.select() });
    }

    select() {
      const links = document.querySelectorAll(".tabs-link");
      Array.from(links).forEach(function (item) {
        item.classList.remove('tabs-link-selected');
      });
      this.element.classList.add("tabs-link-selected");
      this.tabItem.select();
    }
  }

  class TabItem {
    constructor(element) {
      this.element = element;
    }

    select() {
      const allItems = document.querySelectorAll(".tabs-item");
      Array.from(allItems).forEach(function (item) {
        item.classList.remove('tabs-item-selected')
      });
      this.element.classList.add("tabs-item-selected")
    }
  }
  let links = document.querySelectorAll(".tabs-link");
  links = Array.from(links).map(item => new TabLink(item));
  links[0].select();
}

services();