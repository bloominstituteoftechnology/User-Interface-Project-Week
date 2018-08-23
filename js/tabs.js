// Tabs

class TabLink {
    constructor(link) {
      this.link = link;
      this.data = this.link.dataset.tab;
      this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.link.addEventListener('click', () => { 
        this.select() });
    }
  
    select() {
      const links = document.querySelectorAll('.tab');
      Array.from(links).forEach(function(links) {
        links.classList.remove('tab-selected');
      });
      this.link.classList.add('tab-selected');
      this.tabItem.select();
      }
    }
  
  class TabItem {
    constructor(tabItems) {
      this.tabItems = tabItems;
    }
  
    select() {
      const allItems = document.querySelectorAll('.tab-item');
    
      
      Array.from(allItems).forEach(function(allItems) {
        allItems.classList.remove('tab-item-selected');
        // TweenLite.to(allItems, 1, {
        //   ease: Circ.easeOut,
        //   height: 0
        // });
      });

      this.tabItems.classList.add('tab-item-selected');
      // TweenLite.set('.tab-item-selected', {clearProps:"all"})
      // TweenLite.from(menu, 1 {
      //   ease: Circ.easeOut,
      //   height: 0
      // });
    }
  }
  
  

  let tablinks = document.querySelectorAll('.tab');
  tablinks = Array.from(tablinks).map( link => new TabLink(link));
  tablinks[0].select();
  