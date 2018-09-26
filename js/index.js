// JS goes here


//MENU
class Menu {
    constructor(element) {
        this.element = element;
        this.button = document.querySelector('.menu-button');
        this.menu = document.querySelector('.menu');
        this.button.addEventListener('click', () => {this.toggleMenu()});  //this.element? pass in argument?
    }
    toggleMenu () {
        //console.log('before', menu.classList)
        this.menu.classList.toggle('menu-open');  //am i naming this or need to refer to something?  need this.?
        //console.log('after', menu.classList)
    }
}

let menuSelector = document.querySelectorAll('.menu');  
console.log(menuSelector);
let menuButton = document.querySelectorAll('.menu-button');
menuSelector = Array.from(menuSelector).map( menu => new Menu(menu));  //map menuSelector???



//TABS
class TabCard {
    constructor(element) {
    this.element = element;
    }
    selectCard() {
        this.element.style.display = 'flex';
    }
}

class TabLink {
    constructor(element) {
        console.log(element);
        this.element = element;
        this.tabData = this.element.dataset.tab;
        this.cards = document.querySelectorAll(`.tab-card`);
        this.cards = Array.from(this.cards).map( card => new TabCard(card));
        this.element.addEventListener('click', () => {this.selectTab()});
    }

    selectTab() {
        let tabs = document.querySelectorAll('.tab');  //dont need declaration 'let'? can reuse tabs from below?
        tabs.forEach( tab => {
            tab.classList.remove('active-tab');
        })
        let cards = document.querySelectorAll('.tab-card');
        cards.forEach(card => card.style.display = 'none');
        this.element.classList.add('active-tab');
        this.cards.forEach( card => card.selectCard());
    }
}


let tabs = document.querySelectorAll('.tab');
console.log(tabs);
tabs = Array.from(tabs).map( tab => new TabLink(tab));