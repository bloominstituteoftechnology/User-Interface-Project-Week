class TabLink {
    constructor(element) {
        this.element = element;
        this.elementData = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.elementData}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    }

    select() {
        const links = document.querySelectorAll('.services-tabs button');
        Array.from(links).forEach(a => a.classList.remove('active'));
        this.element.classList.add('active');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const tabItems = document.querySelectorAll('.tab-item');
        Array.from(tabItems).forEach(item => item.classList.remove('active'));
        this.element.classList.add('active');
    }
}

class Tabs {
    constructor() {
        this.tabs = document.querySelectorAll('.tabs-link');
    }
}

let links = document.querySelectorAll('.services-tabs button');
links = Array.from(links).map(link => new TabLink(link));
links[0].select();
