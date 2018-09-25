// JS goes here

// navigation
const hamburger = document.querySelector('.nav-img');
const navbar = document.querySelector('.hidden');
let open = false;

hamburger.addEventListener('click', () => open === false ? openNav() : closeNav());

const openNav = () => {
    navbar.style.display = 'block';
    hamburger.src = "img/nav-hamburger-close.png";
    open = true;
};

const closeNav = () => {
    navbar.style.display = 'none';
    hamburger.src = "img/nav-hamburger.png";
    open = false;
}

// services page tabs

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select())
    };

    select() {        
        const links = document.querySelectorAll('.tab-link');       
        Array.from(links).forEach(cb => cb.classList.remove('tab-link-selected'));        
        this.element.classList.add('tab-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const items = document.querySelectorAll('.tab-item')
        Array.from(items).forEach(cb => cb.classList.remove('tab-item-selected'))
        this.element.classList.add('tab-item-selected')
    }
}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(cb => new TabLink(cb))
links[0].select();