let menuButton = document.querySelector('.menu-button');
let nav = document.querySelector('nav');

function toggleMenu() {
    nav.classList.toggle('main-nav-expanded');
}

menuButton.addEventListener('click', toggleMenu);


class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.content;
        this.itemElement = document.querySelector(`.tab-content[data-content='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => {
            this.select()
        });
    }

    select() {
        const links = document.querySelectorAll('.service-tab-links p');
        links.forEach(item => {
            return item.classList.remove('tab-link-selected')
        });
        this.element.classList.add('tab-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const tabItems = document.querySelectorAll('.tab-content');
        tabItems.forEach(item => {
            return item.classList.remove('tab-content-selected')
        });
        this.element.classList.add('tab-content-selected');
    }
}

let tabLinks = document.querySelectorAll('.service-tab-links p');
tabLinks = Array.from(tabLinks).map(tabLink => {
    return new TabLink(tabLink)
});

tabLinks[0].select();
