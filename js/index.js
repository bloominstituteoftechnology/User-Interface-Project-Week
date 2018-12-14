// // JS goes here
TweenMax.to(document.querySelector('.menu-img'), 1, { rotation:360, scale:1} );
TweenMax.to(document.querySelector('.menu-close'), 6, { rotation:720, scale:1} );

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  
}
const menu = document.querySelector('.menu');


const menuButton = document.querySelector('.menu-img')
menuButton.addEventListener('click', toggleMenu);

const closeButton = document.querySelector('.menu-close')
closeButton.addEventListener('click', toggleMenu);



 




// SERVICES TAB COMPONENT

class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
  
      this.element.addEventListener('click', () => 
      this.select());
    };
  
 
  
  
  
    select() {
      
      const links = document.querySelectorAll('.tabs-link');
  
      links.forEach((link) => {
      link.classList.remove('tabs-link-selected') 
      });
  
      this.element.classList.toggle('tabs-link-selected'); 
      this.tabItem.select(); 
    }
  }
  
  
  
  
 
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
       const items = document.querySelectorAll('.tabs-item');
    
      items.forEach((item) => { 
      item.classList.remove('tabs-item-selected')
      });
      this.element.classList.toggle('tabs-item-selected');
    }
  }
  
  
  
  links = document.querySelectorAll('.tabs-link');
  
  links.forEach((link) => {
    return new TabLink(link)
  
  });
  
  