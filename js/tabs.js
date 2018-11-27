class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-content .tab-info[data-tab='${this.data}']`)
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  };

  select() {
    const links = document.querySelectorAll('.tabs .tab-link');
    links.forEach(x => x.classList.remove('active'));
    this.element.classList.add('active');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-content .tab-info');
    items.forEach(x => x.classList.remove('tab-content-active'));
    this.element.classList.add('tab-content-active');
  }
}

links = document.querySelectorAll('.tabs .tab-link').forEach(x => new TabLink(x));