// Services.html tab functionality
class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.link.addEventListener('click', () => { this.select() });
  }

  select() {
    const links = document.querySelectorAll(".tabs-link");

    Array.from(links).forEach(link => { link.classList.remove("tabs-link-selected") });

    this.link.classList.add("tabs-link-selected");

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const allItems = document.querySelectorAll(".tabs-item");

    Array.from(allItems).forEach(item => { item.classList.remove("tabs-item-selected") });

    this.element.classList.add("tabs-item-selected");
  }
}

let allLinks = document.querySelectorAll(".tabs-link");

allLinks = Array.from(allLinks).map( link => new TabLink(link));

allLinks[0].select();
