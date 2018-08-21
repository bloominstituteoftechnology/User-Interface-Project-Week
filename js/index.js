// JS goes here
class Dropdown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');
        this.content = this.element.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => { this.toggleContent(); });

    }

    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');

        if (this.content.classList.contains('dropdown-hidden')) {
            this.button.src = 'img/nav-hamburger.png';
        }
        else {
            this.button.src = 'img/nav-hamburger-close.png';
        }
        

    }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));


class TabLink {
    constructor(element) {
        this.element = element;
        this.dataTab = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.dataTab}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => { this.select();});

    }

    select() {
        const links = document.querySelectorAll('.tabs-link');

        links.forEach(elem => {
            elem.classList.remove('tabs-link-selected');
        });

        this.element.classList.add('tabs-link-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;

    }

    select() {
        let allItems = document.querySelectorAll('.tabs-item');

        allItems.forEach(elem => {
            elem.classList.remove('tabs-item-selected');
        });

        this.element.classList.add('tabs-item-selected');
    }
}

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

links[0].select();