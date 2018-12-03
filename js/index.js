const toggleMenu = () => {
    overlay.classList.toggle('overlay--open');
    TweenMax.from(".overlay-content", 1.5, {y:-500});
}

const hideMenu = () => {
    hiddenNav.classList.toggle('nav--close');
}

const overlay = document.querySelector('.overlay');
const hamburgerButton = document.querySelector('.hamburger-button');
const closedHamburgerButton = document.querySelector('.hamburger-close-button');
const hiddenNav = document.querySelector('.hidden-nav');

closedHamburgerButton.addEventListener('click', toggleMenu);
closedHamburgerButton.addEventListener('click', hideMenu);

hamburgerButton.addEventListener('click', toggleMenu);
hamburgerButton.addEventListener('click', hideMenu);

// Tabs
class Tablink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    }
    select() {
        const links = document.querySelectorAll('.tabs-link');
        Array.from(links).forEach(element => element.classList.remove('tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const items = document.querySelectorAll('.tabs-item');
        Array.from(items).forEach(element => element.classList.remove('tabs-item-selected'));
        this.element.classList.add('tabs-item-selected');
    }
}


const links = document.querySelectorAll('.tabs-link').forEach(link => new Tablink(link));