class TabLink {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;
    if (this.tabData === 'all') {
      this.items = document.querySelectorAll(`.item`);
    } else {
      this.items = document.querySelectorAll(`.item[data-tab="${this.tabData}"]`)
    }
    this.items = Array
      .from(this.items)
      .map(item => new TabItem(item));
    this
      .element
      .addEventListener('click', (event) => {

        this.selectTab(event);
      });
  }
  selectTab(event) {

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(link => {
      link
        .classList
        .remove('selected-tab')
    });
    this
      .element
      .classList
      .add('selected-tab');
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.style.display = 'none';
    });

    this
      .items
      .forEach(item => item.selectItem());
  }
}

class TabItem {
  constructor(element) {

    this.element = element;
  }
  selectItem() {

    this.element.style.display = 'block';
  }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array
  .from(tabs)
  .map(link => new TabLink(link));

tabs[0].selectTab();