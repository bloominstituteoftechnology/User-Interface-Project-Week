// JS goes here

// navbar scroll 

let nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    nav.style.background = "#9DA7B1";
    nav.style.opacity = "0.95";
    nav.style.zIndex = "1";
})


// navbar overlay 

let hamburger = document.querySelector(".hamburger");
let overlay = document.querySelector("#overlay");
let anchor = document.querySelector(".home");
let closeHamburger = document.querySelector(".hamburger-close");


hamburger.addEventListener("click", () => {
    overlay.style.display = "block";
})

closeHamburger.addEventListener("click", () => {
    overlay.style.display = "none";
})


// tabs 




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
    constructor(element, parent) {
      this.element = element;
      this.tabs = parent;
      this.tabsItem = parent.getTab(this.element.dataset.tab);
      this.tabsItem = new TabsItem(this.tabsItem);
      this.element.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select()
      });
    };
  
    select() {
      this.element.classList.add('tabs-link-selected')
      this.tabsItem.select();
    }
  
    deselect() {
      this.element.classList.remove('tabs-link-selected');
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