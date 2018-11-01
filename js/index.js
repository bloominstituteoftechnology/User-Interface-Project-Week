// JS goes here

class TabLink {
    constructor(element) {
      this.element = element;

      this.data = this.element.dataset.tab;

      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
 
      this.tabItem = new TabItem (this.itemElement);
      
      this.element.addEventListener('click', () => { this.select() });
  
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
  
      Array.from(links).forEach(function(element) {
        element.classList.remove('tabs-link-selected');
      });

      this.element.classList.add('tabs-link-selected');
      
      this.tabItem.select();
  
    }
  }

class TabItem {
    constructor(element) {
      this.element = element;
    };
  
    select() {
  
      const items = document.querySelectorAll('.tabs-item');
      Array.from(items).forEach(function(element) {
        element.classList.remove('tabs-item-selected');
      });
  
      this.element.classList.add('tabs-item-selected');
    
    }
  }

  class Dropdown {
    constructor(element) {
     
      this.element = element;
      
      this.button = this.element.querySelector('.dropdown-button');
    
      this.content = this.element.querySelector('.dropdown-content');

      this.close = this.element.querySelector('.close-nav');
      this.open = this.element.querySelector('.open-nav');
      
      this.button.addEventListener('click', () => {
        this.toggleContent()
      });
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('dropdown-hidden');
      this.close.classList.toggle('dropdown-hidden');
      this.open.classList.toggle('dropdown-hidden');
    
    }
  }


let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));