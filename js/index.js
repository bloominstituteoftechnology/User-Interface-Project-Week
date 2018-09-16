const toggleMenu = () => {
    menu.classList.toggle("menu--open");
  }
  
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu-button");
  const menuButtonClose = document.querySelector(".menu-button-close");
  menuButton.addEventListener("click", toggleMenu);
  menuButtonClose.addEventListener("click", toggleMenu);

// Services Tabs
class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
        
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.itemLink = document.querySelector(`.tabs-link[data-tab='${this.data}']`);
  
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', () => { this.select() });
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
  links = Array.from(links).map(link => new TabLink(link));