// JS goes here

class TabLink {
    constructor(element) {
      this.element = element;
      
      this.data = this.element.dataset.tab;
      this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.item);
      
      this.element.addEventListener('click', () => {
        this.select();
      });
    };
  
    select() {
      const links = document.querySelectorAll('.tab-button');
  
      links.forEach( link => {
        link.classList.remove('tab-button-selected')
      });
      this.element.classList.add('tab-button-selected');
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      this.element.classList.add('tabs-item-selected');
    }
  }
  
 
  let links = document.querySelectorAll('.tab-button');
  links = Array.from(links).map( link => new TabLink(link));
  
  
  links[0].select()
