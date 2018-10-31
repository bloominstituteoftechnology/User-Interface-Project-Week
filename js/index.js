// JS goes here

// Expand Navigation

const toggleMenu = () => {
    menu.classList.toggle('open-menu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
}

const closeMenu = () => {
    menu.classList.toggle('open-menu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
}

const menu = document.querySelector('nav');
const closeIcon = document.querySelector('.expanded');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', closeMenu);



// Tabbed Content for the Services Page

class Tablink {
    constructor(ele) {
        this.element = ele;
        this.tabData = this.element.dataset.tab;
        const mql = window.matchMedia("(min-width: 321px)");
        if (mql.matches) {
            this.content = document.querySelectorAll(`.desktop-tab[data-tab='${this.tabData}']`);
        } else {
            this.content = document.querySelectorAll(`.mobile-tab[data-tab='${this.tabData}']`);
        }
        this.content = Array.from(this.content).map( item => new TabContent(item));
        this.element.addEventListener('click', () => this.selectTab() );
        
    }

    selectTab() {
        const mql = window.matchMedia("(min-width: 321px)");
        let content;
        if (mql.matches) {
            content = document.querySelectorAll('.desktop-tab');
        } else {
            content = document.querySelectorAll('.mobile-tab');
        }
        content.forEach( item => item.classList.remove('selected') );
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach( item => item.classList.remove('selected') );
        this.element.classList.add('selected');
        this.content.forEach(item => item.selectContent());
    }
}

class TabContent {
    constructor(ele) {
        this.element = ele;
    }
    selectContent() {
        this.element.classList.add('selected');
    }
}

const mql = window.matchMedia("(min-width: 321px)");
let content;
    if (mql.matches) {
        content = document.querySelectorAll('.desktop-tab');
    } else {
        content = document.querySelectorAll('.mobile-tab');
    }
content[0].classList.add('selected');
content[4].classList.add('selected');
let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new Tablink(tab));
console.log(tabs[0]);
