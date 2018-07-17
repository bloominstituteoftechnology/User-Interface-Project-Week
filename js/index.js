
//  ============ Menu Fullscreen/Hidden Navigation ===========

const menuButton = document.querySelector('.open-hamburger'); 
const menuOpenContent = document.querySelector('.menu-content'); 
const closeMenuButton = document.querySelector('.closed-hamburger'); 

menuButton.addEventListener('click', function(){
    menuOpenContent.classList.remove('menu-hidden'); 
    menuButton.style.display = 'none'; 
    closeMenuButton.style.display = "flex"; 
})

closeMenuButton.addEventListener('click', function(){
    menuOpenContent.classList.add('menu-hidden'); 
    menuButton.style.display = "flex"; 
    closeMenuButton.style.display = "none";
})


// ================ Tabs Navigation =================

class Tabs {
    constructor(element) {
        this.element = element;
        console.log(this.element);
        this.links = this.element.querySelectorAll('.service-tab')
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
        return this.element.querySelector(`.tab-content[data-tab="${data}"]`);
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
        this.select();
    });
    };

    select() {
        this.link.classList.add('tab-selected');
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove('tab-selected'); 
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add('display-tab');
    }

    deselect() {
        this.element.classList.remove('display-tab');
    }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));








