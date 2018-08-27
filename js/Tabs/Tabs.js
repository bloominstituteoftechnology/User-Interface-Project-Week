class TabLink {
  constructor(element) {
    this.element = element;
    
    this.data = this.element.dataset.tab;
    
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"`);
    
    this.tabItem = new TabItem(this.itemElement);
    
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');

    Array.from(links).forEach(linkItem => linkItem.classList.remove('tabs-link-selected'));

    this.element.classList.add('tabs-link-selected');
    
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
   let items = document.querySelectorAll('.tabs-item');
   Array.from(items).forEach(linkItem => linkItem.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');
 
links = Array.from(links).map(link => new TabLink(link));

links[0].select();
