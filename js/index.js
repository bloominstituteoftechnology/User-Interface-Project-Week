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

class Tabs {
    constructor(element){
      this.element = element;
      this.tabData = element.dataset.tab;
      this.tabContent = document.querySelector(`.card [data-tab='${this.tabData}']`);
      this.tabContent = new TabContent(this.tabContent);
      this.element.addEventListener('click', () => {
        this.select();
      })
    }
    select() {
      const tabs = document.querySelectorAll('.tab');
      Array.from(tabs).forEach(tab =>
      tab.classList.remove('active-tab'));
      this.element.classList.add('active-tab');
      this.tabContent.select();
    }
  };
  
  class TabContent {
    constructor(element) {
      this.element = element;
    }
    select() {
      const allContent = document.querySelectorAll('.card');
      Array.from(allContent).forEach(item =>
      item.classList.remove('active-tab'));
      
      this.element.classList.add('active-tab');
    }
  }
  
  let tabs = document.querySelectorAll('.tab');
  
  tabs = Array.from(tabs).map(tab =>
  new Tabs(tab));
  
  tabs[0].select();