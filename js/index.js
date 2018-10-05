// Navigation System
class Dropdown {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector('.hamburger');
      
      this.content = this.element.querySelector('.navigation');

      this.close = this.element.querySelector('.hamburger-close');
      
      this.button.addEventListener('click', () => { this.toggleContent();
      })
      this.close.addEventListener('click', () => {this.toggleContent();
      
    })
    }
    // toggleButtons(){
    //   this.close.classList.toggle('hamburger-close');
    //   this.button.classList.toggle('dropdown-hidden');
    // }
    toggleContent() {
      
      this.content.classList.toggle('dropdown-hidden');
      this.button.classList.toggle('dropdown-hidden');
      this.close.classList.toggle('hamburger-close');
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

  // let newsrc = '/img/nav-hamburger-close.png';

  // function changeImg(){
  //   if ( newsrc == '/img/nav-hamburger-close.png') {
  //     document.images["pic"].alt = "X";
  //     newsrc  = "earth.jpg";
  //   }
  //   else {
  //     document.images["pic"].src = "/img/nav-hamburger.png";
  //     document.images["pic"].alt = "Hamburger";
  //     newsrc  = "/img/nav-hamburger-close.png";
  //   }

  // } 