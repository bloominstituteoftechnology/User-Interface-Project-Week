// --TABS--
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabItem = document.querySelector(`.tab-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.tabItem);
    this.element.addEventListener('click', event => {
      this.select(event);
    });
  }
  select() {
    let links = document.querySelectorAll('.tab-link');
    Array.from(links).forEach(element => {
      element.classList.remove('tab-link-selected');
    });
    this.element.classList.add('tab-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    let items = document.querySelectorAll('.tab-item');

    Array.from(items).forEach(element => {
      element.classList.remove('tab-item-selected');
    });

    this.element.classList.toggle('tab-item-selected');
  }
}

let links = document.querySelectorAll('.tab-link');

links = Array.from(links).map(link => new TabLink(link));

links[0].select();
