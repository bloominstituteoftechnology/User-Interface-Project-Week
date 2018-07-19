// JS goes here

class Tabs {
    constructor(element){
        this.element = element;
        this.tabs = this.element.querySelectorAll('.tab');
        this.tabs = Array.from(this.tabs).map( tab => new Tablink(tab, this) );
        this.activeTab = this.tabs[0];
        this.init();
    }

    init(){
        this.activeTab.selectTab();
    }

    updateActive(tabElement){
        this.activeTab.deselectTab();
        this.activeTab = tabElement;
    }

    getCards(data){
        return document.querySelectorAll(`.service-item[data-tab="${data}"]`);
    }
}

class Tablink {
    constructor(element, parent){
        this.element = element;
        this.parent = parent;
        this.cards = this.parent.getCards(this.element.dataset.tab);
        this.cards = Array.from(this.cards).map( card => new TabCard(card));
        console.log(this.cards);
        this.element.addEventListener('click', () => { this.selectTab() });
    }

    selectTab(){
        this.parent.updateActive(this);
        this.element.classList.add('active-tab');
        this.cards.forEach(card => card.selectCard());
    }
    deselectTab(){
        this.element.classList.remove('active-tab');
        this.cards.forEach( card => card.deselectCard());
    }
}

class TabCard {
    constructor(element){
        this.element = element;
    }
    selectCard(){
        this.element.classList.add('service-item-selected');
    }
    deselectCard(){
        this.element.classList.remove('service-item-selected');
    }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map( tab => new Tabs(tab));

// navigation menu

const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
menuButton.addEventListener('click', (event) => {
    toggleMenu();
})
menuClose.addEventListener('click', (event) => {
    toggleMenu();
})