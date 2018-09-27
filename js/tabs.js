class TabLink {
    constructor(element) {
      this.element = element;
      this.data = element.dataset.tab; 
      this.itemElement = document.querySelector(`.tabs-item[data-tab= "${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {
        this.select();
      })
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      Array.from(links).forEach(function(element){
        element.classList.remove('tabs-link-selected');
      });
  
      this.element.classList.add('tabs-link-selected');
    
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      Array.from(items).forEach(function(element){
        element.classList.remove('tabs-item-selected');
      });
      
      this.element.classList.add('tabs-item-selected');
    }
  
    deselect(){
  
    }
  }
  
  let links = document.querySelectorAll('.tabs-link');
  
  links = Array.from(links).map(element => {
    return new TabLink(element);
  });
  
  
  
  links[0].select();