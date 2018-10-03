// Navigation System
class Dropdown {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector('.hamburger');
      
      this.content = this.element.querySelector('.navigation');

      this.exit = this.element.querySelector('.exit');
      
      this.button.addEventListener('click', () => { this.toggleContent()
  
      })
    }
  
    toggleContent() {
      
      this.content.classList.toggle('dropdown-hidden');
      this.button.classList.toggle('.hamburger-hidden');
      this.exit.classList.toggle('.exit');
    }
  }
  
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));




//Tab Functionality


class TabLink {
    constructor(element) {
      this.element= element;
      
      this.data = this.element.dataset.tab;
      
      this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      
      this.tabItem = new TabItem(this.item);
      
      this.element.addEventListener('click', () => {
        this.select();
      });
    };
  
    select() {
      const links = document.querySelectorAll('.tabs');
  
      links.forEach( link => {
        link.classList.remove('tabs-link-selected')
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
      items.forEach(item => {
        item.classList.remove('tabs-item-selected');
      })
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  let links = document.querySelectorAll('.tabs');
  
  links = Array.from(links).map( link => new TabLink(link));
  
  links[0].select();