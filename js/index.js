// JS goes here

// Services Tab Navigator

class LinkCreator {
    constructor(link) {
      this.link = link;
      
      this.link.addEventListener('click', ()=> { this.linkClick()});
      this.link.addEventListener('mouseout', ()=> {this.mouseOut()});
     
      
      this.data = this.link.dataset.tab;        
      this.tabItem = document.querySelector(`.tabitem[data-tab="${this.data}"]`);
      
      this.tabItem = new TabItem(this.tabItem);
    }
    
    linkClick() {
      console.log('This worked!');
      this.tabItem.toggleContent();
    }
    mouseOut() {
      this.tabItem.away();
    }
  }
  
  class TabItem {
    constructor(tabItem) {
      console.log(tabItem);
      this.tabItem = tabItem;
    }
    
    toggleContent() {
      this.tabItem.classList.toggle('tabitem-show');
      console.log(event.currentTarget);
    }
    away() {
      this.tabItem.classList.remove('tabitem-show');
    }
  }
  
  
  let tabLinks = document.querySelectorAll('.tablink');
  
  tabLinks = Array.from(tabLinks).map( link => new LinkCreator(link));

  // Navigation System

  const toggleMenu = ()=> {
    navLinks.classList.toggle('hide');
  }
  
  const navLinks = document.querySelector('.navlinks');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', ()=>{
    toggleMenu();
    if (navLinks.classList.contains('hide')) {
      hamburger.src = 'img/nav-hamburger.png';
    } else {
      hamburger.src = 'img/nav-hamburger-close.png';
    }
  });