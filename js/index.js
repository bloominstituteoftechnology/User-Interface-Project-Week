// JS goes here

class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.link.addEventListener('click', () => { this.select() });
  }

  select() {
    const link = document.querySelectorAll(".tabs-link");
  }
}
