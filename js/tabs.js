
class TabLink {
    constructor(element) {
      this.element = element;
    
      this.linkData = this.element.dataset.tab;
  
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.linkData}"]`);
      
      this.tabItem = new TabItem(this.itemElement);
      
      this.element.addEventListener('click', () => {this.select()});
    };
  
    select() {
  
      const links = document.querySelectorAll('.tabs-link');
  
      Array.from(links).forEach(link  => link.classList.remove('tabs-link-selected'));
  
      this.element.classList.add('tabs-link-selected');
      
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
  
      const allItems = document.querySelectorAll('.tabs-item');
      
      Array.from(allItems).forEach(item => item.classList.remove('tabs-item-selected'));
      
      this.element.classList.add('tabs-item-selected');
    }
  }
  
	// console.log(window.onload = function(){
	// 							document.querySelector(`.tabs-item[data-tab="${1}"]`).classList.add('tabs-link-selected');
  // 						});
  window.onload = function(){
    document.querySelector(`.tabs-link[data-tab="${1}"]`).classList.add('tabs-link-selected');
    document.querySelector(`.tabs-item[data-tab="${1}"]`).classList.add('tabs-item-selected');

  }

  let links = document.querySelectorAll('.tabs-link');
  
  links = Array.from(links).map( link => new TabLink(link));
  