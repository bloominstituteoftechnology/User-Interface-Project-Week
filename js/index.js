// JS goes here
// Navigation system design
let menu = document.querySelector('.hamburger');
let content = document.querySelector('.dropdown-content');
let close = document.querySelector('.menu-close');

menu.addEventListener('click', () => {
    content.classList.toggle('hidden');
    menu.classList.toggle('img-hide');
    close.classList.toggle('img-hide');
});

close.addEventListener('click', () => {
    content.classList.toggle('hidden');
    menu.classList.toggle('img-hide');
    close.classList.toggle('img-hide');
});


















// let menu = document.querySelector('.hamburger');
// let content = document.querySelector('.dropdown-content');
// let close = document.querySelector('.menu-close');

// function expand() {
//         menu.classList.toggle('hidden');
//         content.classList.toggle('hidden');
//         close.classList.toggle('hidden');
// };

// menu.addEventListener('click', () => {expand()});
// close.addEventListener('click', () => {expand()});











// Services page tab navigator design
class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.select()});
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
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
      Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
      this.element.classList.add('tabs-item-selected');
    }
  }
  
 
  let links = document.querySelectorAll('.tabs-link');
  links = Array.from(links).map( link => new TabLink(link));
  
 
  links[0].select();