//Services Tab Component
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    const links = document.querySelectorAll('.tabs');
    Array.from(links).forEach(link => link.classList.remove('tabs-selected'));
    this.element.classList.add('tabs-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.services')
    Array.from(items).forEach(item => item.classList.remove('services-selected'));
    this.element.classList.add('services-selected');
  }
}

links = document.querySelectorAll('.tabs').forEach(link => new TabLink(link));
