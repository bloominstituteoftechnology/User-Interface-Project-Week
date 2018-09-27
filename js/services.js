// //services

class Tab {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;

    this.itemElement = document.querySelector(`.tab-item[data-tab="${this.tabData}"]`)

    this.tabItem = new TabItem(this.itemElement);

    //click event listener
    this.element.addEventListener('click', () => {
      this.select();
    });  
  }

  select() {
    const tabs = document.querySelectorAll('.tab');

    Array.from(tabs).forEach(function(tab){
      tab.classList.remove('tab-item-selected');
    });

    this.element.classList.add('tab-item-selected');

    this.tabItem.select();

  }
}

class TabItem {
  constructor(element){
    this.element = element;
  }

  select(){
    const items = document.querySelectorAll('.tab-item')

    Array.from(items).forEach(function(item){
      item.classList.remove('tab-item-selected');
    });

    this.element.classList.add('tab-item-selected');
  }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(element => {
  return new Tab(element)
});

tabs[0].select()