// Tabs

class TabLink {
    constructor(link) {
      this.link = link;
      this.data = this.link.dataset.tab;
      this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
      
     
      this.tabItem = new TabItem(this.itemElement);
      
      
      this.link.addEventListener('click', () => { this.select() });
  
    };
  
    select() {
      
      const links = document.querySelectorAll('.tab');
  
      
      Array.from(links).forEach(function(links) {
        links.classList.remove('tab-selected');
      });
  
      
      this.link.classList.add('tab-selected');
      
      
    this.tabItem.select();
     }
  }
  
  class TabItem {
    constructor(tabItems) {
      this.tabItems = tabItems;
    }
  
    select() {
  
      // Select all items elements from the DOM
      const allItems = document.querySelectorAll('.tab-item');
      // Remove the class "tabs-item-selected" from each element
      Array.from(allItems).forEach(function(allItems) {
        allItems.classList.remove('tab-item-selected');
      });
  
      // Add a class named "tabs-item-selected" to this element 
      this.tabItems.classList.add('tab-item-selected');
    }
  }
  
  

  let tablinks = document.querySelectorAll('.tab');
  
  
  tablinks = Array.from(tablinks).map( link => new TabLink(link));
  
  
  tablinks[0].select();
  