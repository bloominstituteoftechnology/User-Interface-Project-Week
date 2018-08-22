//services tabs
class ServicesTab {
  constructor(tab) {
    this.element = tab;
    this.tabData = this.element.dataset.tab;
    this.tabElement = document.querySelector(`.item[data-tab="${this.tabData}"]`);
    this.tabItem = new TabContent(this.tabElement);
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.classList.remove('active-tab');
    });
    this.element.classList.add('active-tab');
    this.tabItem.selectItem();
  }
}

class TabContent {
  constructor(item) {
    this.element = item;
  }

  selectItem() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.classList.remove('active-item');
    });
    this.element.classList.add('active-item');
  }
}


let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new ServicesTab(tab));
// tabs[0].select();