//tab navigator for services.html
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tab-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.item);
    this.element.addEventListener("click", event => {
      this.select(event);
    });
  }

  select() {
    const links = document.querySelectorAll(".tab-link");
    Array.from(links).forEach(link =>
      link.classList.remove("tab-link-selected")
    );
    this.element.classList.add("tab-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tab-item");
    Array.from(items).forEach(item =>
      item.classList.remove("tab-item-selected")
    );
    this.element.classList.add("tab-item-selected");
  }
}

let links = document.querySelectorAll(".tab-link");

links = Array.from(links).map(link => new TabLink(link));
links[0].select();
