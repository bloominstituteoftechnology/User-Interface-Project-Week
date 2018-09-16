// JS goes here
const toggleMenu = () => {
    menu.classList.toggle('menu--open'); 
  }
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.nav-button');
  menuButton.addEventListener('click', toggleMenu);

 const navClose = document.querySelector('.nav-close');
 navClose.addEventListener('click', toggleMenu);

 class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-content[data-tab='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.select()})
    };
  
    select() {
      const links = document.querySelectorAll('.tab');
      Array.from(links).forEach(links => {
        links.classList.remove('tab-selected');
      });
        this.element.classList.add('tab-selected');
      this.tabItem.select(); 
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  select() {
      const items = document.querySelectorAll('.tabs-content');
      Array.from(items).forEach(items => {
        items.classList.remove('tabs-content-selected');
      });  
      this.element.classList.add('tabs-content-selected');
    }
  }
  
  let links = document.querySelectorAll('.tab');
  
  links = Array.from(links).map(link => {
  new TabLink(link);
  })