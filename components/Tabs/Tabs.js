class Tab {
  constructor(element) {
    this.element = element;
    this.data = element.dataset.tab;
    let item = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
    this.tabItem = item;
    console.log(tabItem);
  }
}

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(item => new Tab(item));
