//navBar functionality
const hamburger = document.querySelector('.menu-button');
const nav = document.querySelector('.navBar')
const close = document.querySelector('.close-button');
const menuText = document.querySelector('.nav-hidden');

hamburger.addEventListener('click', () => {
    nav.classList.remove('nav-hidden');
    nav.classList.add('expanded');
    nav.classList.add('drop-down')
    nav.style.flexDirection = 'column-reverse';
    
   
    
})

close.addEventListener('click', () => {
    nav.classList.add('navBar');
    nav.classList.remove('expanded');
     nav.classList.remove('drop-down');
    
})


// Tab Navigator Component 

class TabLink {
  constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.card[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', (event) => {
          this.select(); 
          
        });
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
 links[0].select();
