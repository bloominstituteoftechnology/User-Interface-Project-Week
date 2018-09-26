//navBar functionality
const hamburger = document.querySelector('.menu-button');
const nav = document.querySelector('.navBar')
const close = document.querySelector('.close-button');
const menuText = document.querySelector('.nav-hidden');

hamburger.addEventListener('click', () => {
    nav.classList.remove('nav-hidden');
    nav.classList.add('expanded');
    menuText.classList.remove('nav-hidden');
    menuText.classList.add('drop-down')
    nav.style.flexDirection = 'column-reverse';
    nav.style.opacity = '50%';
   
    
})

close.addEventListener('click', () => {
    nav.classList.add('navBar');
    nav.classList.remove('expanded');
    menuText.style.display = 'none';
})


// Tab Navigator Component 

class TabLink {
  constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
       this.itemElement = document.querySelector(`.tab[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', (event) => {this.select(); event.preventDefault();});
  };
   select() {
      const tabLinks = document.querySelectorAll('.tab');
      Array.from(tabLinks).forEach(item => item.classList.remove('tab-link-selected'));
       this.element.classList.add('tab-link-selected');
      this.tabItem.select();
  }
}
class TabItem {
  constructor(element) {
      this.element = element;
  }
   select() {
      let items = document.querySelectorAll('.card');
      items.forEach(item => item.classList.remove('tab-item-selected'));
       this.element.classList.add('tab-item-selected');
      
  }
}
let links = document.querySelectorAll('.tab');
links = Array.from(links).map(link => {return new TabLink(link);});
// links[0].select();
