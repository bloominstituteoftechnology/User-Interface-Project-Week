// JS goes here

// Navigation - Expandable Menu

const toggleMenu = () => {
    // menu.classList.toggle('menu--open');
     if(menu.className.includes("menu--open")) {
        console.log(event.currentTarget.parentNode.className);
        menu.classList.remove("menu--open");
        TweenLite.to(menu, 2.5, { 
          ease: Expo.easeOut, 
          height: 50
        });
      } else {
        menu.classList.add("menu--open");
        TweenLite.set(".menu--open", {clearProps:"all"})
        TweenLite.from(menu, 2, { 
          ease: Expo.easeOut, //.config(0.2, 0.7, false), 
          height: 50
        });
      }
    
    
  }

  const collapseButton = () => {
    menuButton.style.display = "none";
    menuClose.style.display = "block";
  }

  
  const expandButton = () => {
    menuButton.style.display = "block";
    menuClose.style.display = "none";
  }
  
  
  const menu = document.querySelector('.navbar');
  const menuClose = document.querySelector('.menu-close');

  const menuButton = document.querySelector('.menu-button');
 
  menuButton.addEventListener('click', () => {
    toggleMenu();
    collapseButton();
});

menuClose.addEventListener('click', () => {
    toggleMenu();
    expandButton();
});


    


 


  
// Tabs

class TabLink {
    constructor(link) {
      this.link = link;
           
      this.data = this.link.dataset.tab;
          
            this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
      
     
      this.tabItem = new TabItem(this.itemElement);
      
      
      this.link.addEventListener('click', () => { this.select() });
  
    };
  
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
  
      // Select all items elements from the DOM
      const allItems = document.querySelectorAll('.tab-item');
      // Remove the class "tabs-item-selected" from each element
      Array.from(allItems).forEach(function(allItems) {
        allItems.classList.remove('tab-item-selected');
      });
  
      // Add a class named "tabs-item-selected" to this element 
      this.tabItems.classList.add('tab-item-selected');
    }
  }
  
  

  let links = document.querySelectorAll('.tab');
  
  
  links = Array.from(links).map( link => new TabLink(link));
  
  
  links[0].select();
  