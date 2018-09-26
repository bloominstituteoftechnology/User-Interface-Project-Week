// JS goes here


//MENU
class Menu {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', () => {this.toggleMenu()});
    }
    toggleMenu () {
        console.log('before', menu.classList)
        menu.classList.toggle('menu-open');  //or closed?  need this.?
        console.log('after', menu.classList)
    }
}

let menuSelector = document.querySelector('.menu');
let menuButton = document.querySelector('.menu-button');
menuSelector = Array.from(menuSelector).map( menu => new Menu(menu));  //map menuSelector???



//TABS
class TabLink {
    constructor(element) {
        this.element = element;
    }
    
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new TabLink(tab));