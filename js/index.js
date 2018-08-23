// JS goes here

//// Header Navigation ////
const menu = document.querySelector('.hamburglar-links');
const menuToggle = document.querySelector('.hamburglar-toggle');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show-links');

    if(menuToggle.src.indexOf('nav-hamburger.png') !== -1) {
        menuToggle.src = 'img/nav-hamburger-close.png';
    } else {
        menuToggle.src = 'img/nav-hamburger.png';
    }
});


//// Tab Navigation ////
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select() );
    }

    select() {
        const links = document.querySelectorAll('.tab-link');
        Array.from(links).forEach((link) => link.classList.remove('tab-select') );
        this.element.classList.add('tab-select');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tab-item');
        Array.from(items).forEach((item) => item.classList.remove('show-item') );
        this.element.classList.add('show-item');
    }
}

let links = document.querySelectorAll('.tab-link'); 
links = Array.from(links).map((link) => new TabLink(link) );

links[0].select();
