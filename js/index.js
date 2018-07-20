// JS goes here
class Tabs {
    constructor(element) {
      this.element = element;      
      this.links = this.element.querySelectorAll(".tabs-link");      
      this.links = Array.from(this.links).map( link => {
        return new TabsLink(link, this);
      });      
      this.activeLink = this.links[0];      
      this.init();
    }
  
    init() {      
      this.activeLink.select();
    }
  
    updateActive(newActive) {
      this.activeLink.deselect();      
      this.activeLink = newActive;
    }
  
    getTab(data) {
      return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
  
}
  
class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        console.log(this.tabsItem);
        this.link.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select();
        });
    };

    select() {
        this.link.classList.add("tabs-link-selected");               
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove("tabs-link-selected");
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("tabs-item-selected");
    }

    deselect() {
        this.element.classList.remove("tabs-item-selected");
    }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(element => new Tabs(element));

const toggleMenu = () => {     
    if (menu.classList.contains("menu--open")===true){
        menu.classList.toggle("menu--close");     
    }else{
        menu.classList.toggle("menu--open"); 
    }         
}

const toggleButton = () => {
    menuOpen.classList.toggle("off");
    menuClose.classList.toggle("off");
}


const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");


menuOpen.addEventListener("click", (event)=>{
    console.log("clicked")
    toggleMenu();
    toggleButton();
});

menuClose.addEventListener("click", (event)=>{
    console.log("clicked")
    toggleMenu();
    toggleButton();
});

 