// JS goes here

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tab-content[data-tab='${this.data}']`);

    this.tabItem = new TabItem(this.item);
    this.element.addEventListener('click', () => ( this.select()));
  };

  select() {
    const links = document.querySelectorAll(".nav-tab");

    links.forEach(items => items.classList.remove('selected'));
   
    this.element.classList.add('selected');

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    let items = document.querySelectorAll('.tab-content');

    items.forEach(item => (item.classList.remove('active')));

    this.element.classList.add('active');
  }
}

links = document.querySelectorAll('.nav-tab').forEach(links => (new TabLink(links)));