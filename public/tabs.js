class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabItem = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );
    this.tabItem = new TabItem(this.tabItem);

    this.element.addEventListener("click", () => this.select());
  }
  //method
  select() {
    const links = document.querySelectorAll(".tabs-link");
    links.forEach(link => link.classList.remove("tabs-link-selected"));
    // Array.from(links).forEach(link => link.classList.remove("tabs-link-selected"));
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    // secelect all tabs item content
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(item => item.classList.remove("tabs-item-selected"));
    this.element.classList.add("tabs-item-selected");
  }
}

let tabslink = document
  .querySelectorAll(".tabs-link")
  .forEach(item => new TabLink(item));
