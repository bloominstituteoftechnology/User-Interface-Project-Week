// JS goes here
class Tabs{
    constructor(element){
        this.element = element;
        this.tabs = this.element.querySelectorAll('.tab');
        this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab,this));
        this.activeTab = this.tabs[0];
        this.init();
    }

    init() {
        this.activeTab.selectTab();
    }

    updateActive(newActive) {
        this.activeTab.deselectTab();
        this.activeTab = newActive;
    }

    getTab(data) {
        return document.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
}

class TabLink{
    constructor(element,parent){
        this.element = element;
        this.parent = parent;
        this.items = this.parent.getTab(this.element.dataset.tab);
        this.items = new TabItem(this.items);
        this.element.addEventListener('click', () => {this.selectTab()});
    }

    selectTab(){
        this.parent.updateActive(this);
        this.element.classList.add('active-tab');
        this.items.selectItem();
    }
    
    deselectTab() {
        this.element.classList.remove('active-tab');
        this.items.deselectItem();
    }
}

class TabItem{
    constructor(element){
        this.element = element;
    }
    selectItem(){
        this.element.classList.add('tabs-item-selected');
    }

    deselectItem(){
        this.element.classList.remove('tabs-item-selected');
    }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));

//Navigation Scroll
let nav = document.querySelector('.navigation');

document.addEventListener('scroll', () =>{
    nav.classList.add('scrolled');
    
})

//Navigation Overlay

let overlay = document.querySelector(".nav-overlay");
let menuBtn = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".close-button");

menuBtn.addEventListener('click', function() {
  // I want overlay to display block now
  overlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  // I want overlay to display none now
  overlay.style.display = "none";
});