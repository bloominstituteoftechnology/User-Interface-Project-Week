class Tabs {
  constructor(tabConstructor){
    this.tabConstructor = tabConstructor;
    this.data = tabConstructor.dataset.tab;
    this.tabLink = new TabLink(this.tabConstructor);
    this.tabSelect = document.querySelector('.tabs-link-selected');
  }

  deselect() {
  }
}


class TabLink {
  constructor(element) {
    this.element = element;
    this.data = element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', e => this.select(e));
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();

  }

  deselect(){
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
  }

  deselect(){
    this.element.classList.remove('tabs-link-selected');
  }
}

links = document.querySelectorAll('.tabs-link').forEach(tabLinks => new TabLink(tabLinks));