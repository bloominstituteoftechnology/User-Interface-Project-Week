// JS goes here

// Toggle menu button
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
 
menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  TweenMax.fromTo(menu, 1.5, {yPercent:-100}, {yPercent:0});
  menuButton.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  menuButton.style.display = 'block';
  menuClose.style.display = 'none';
  TweenMax.fromTo(menu, 1.5, {yPercent:0}, {yPercent:-100, onComplete:tweenComplete});
});  

function tweenComplete() {
  menu.classList.toggle('menu--open');
}

  //Services Tabs Component
  class Tabs {
    constructor(element) {
      this.element = element;
      this.links = this.element.querySelectorAll('.tabs-link');
      this.links = Array.from(this.links).map(link => {
        return new TabsLink(link, this);
      });
      this.activeLink = this.links[0];
      this.init();
    }
  
    init() {
      this.activeLink.select()
    }
  
    updateActive(newActive) {
      this.activeLink.deselect();
      this.activeLink = newActive;
    }
  
    getTab(data) {
      return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
    }
  
  }
  
  class TabsLink {
    constructor(link, parent) {
      this.link = link;
      this.tabs = parent;
      this.tabsItem = parent.getTab(this.link.dataset.tab);
      this.tabsItem = new TabsItem(this.tabsItem);
      this.link.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select()
      });
    };
  
    select() {
      this.link.classList.add('tabs-link-selected')
      this.tabsItem.select();
    }
  
    deselect() {
      this.link.classList.remove('tabs-link-selected');
      this.tabsItem.deselect();
    }
  }
  
  class TabsItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      this.element.classList.add('tabs-item-selected');
    }
  
    deselect() {
      this.element.classList.remove('tabs-item-selected');
    }
  }
  
  let tabs = document.querySelectorAll('.tabs');
  tabs = Array.from(tabs).map( tab => new Tabs(tab));