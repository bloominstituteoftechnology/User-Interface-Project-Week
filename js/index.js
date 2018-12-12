class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => { this.select() });
  };
  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach((item) => item.classList = 'tabs-link');
    this.element.classList.toggle('tabs-link-selected');
    this.tabItem.select();
  }
}
class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    let itemLinks = document.querySelectorAll('.tabs-item');
    itemLinks.forEach((item) => item.classList = 'tabs-item');
    this.element.classList.toggle('tabs-item-selected');

  }
}

links = document.querySelectorAll(".tabs-link").forEach(element => { return new TabLink(element) }); 

