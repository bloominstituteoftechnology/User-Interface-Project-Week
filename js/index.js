
// Burger Fun
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerButtonClose = document.querySelector('.hamburger-button-close');
const mainNav = document.querySelector('.main-nav');

const openNav = function() {
    mainNav.classList.add('main-nav-show');
    hamburgerButton.style.display = 'none';
    hamburgerButtonClose.style.display = 'block';
}

const closeNav = function() {
    mainNav.classList.remove('main-nav-show');
    hamburgerButton.style.display = 'block';
    hamburgerButtonClose.style.display = 'none';
}

hamburgerButton.addEventListener('click', ()=> {

})

// Tabs

class Tabs {
    constructor(element){
        this.element = element;
        this.links = this.element.querySelectorAll('.tab');
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link,this);
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
        return document.querySelector(`.content[data-tab= "${data}"]`);
    }
}


class TabsLink {
    constructor(link,parent){
        this.link = link;
        this.tabs = parent;
        this.tabsItem.parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select();
        });
    };

select() {
    this.link.classList.add('tab-active');
    this.tabsItem.select();
}

deselect() {
    this.link.classList.remove('tab-active');
    this.tabsItem.deselect();
    }
}

let tabs = document.querySelectorAll('.services-tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));




