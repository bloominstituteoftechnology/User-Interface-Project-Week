// JS goes here

// TAB COMPONENTS JS //

class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click',() => {
        this.select() 
      });
    };
   
  
  select() {
    const links = document.querySelectorAll('.tabs-link');
      links.forEach(links => links.classList.remove('tabs-link-selected'));
      
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
      
      items.forEach(items => 
      items.classList.remove('tabs-item-selected'));
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  
 
  
  let links = document.querySelectorAll('.tabs-link');
  links.forEach( link => new TabLink(link));


  //MENU [JS]

  // OPEN:

  const toggleMenu = () => {
    navs.classList.toggle('menu--open')
    ;}

  const navs = document.querySelector('.toggle-menu');

  const menuImg = document.querySelector('.nav-ham')
  menuImg.addEventListener('click', toggleMenu);


  //CLOSE:

  const toggleClose = document.querySelector('.toggle-menu')
  toggleClose.addEventListener('click', toggleMenu);
  