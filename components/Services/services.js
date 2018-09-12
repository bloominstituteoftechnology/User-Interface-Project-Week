class TabLink {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.tabContent = document.querySelector(`.tab-content div[data-tab='${this.data}']`);

        this.tabItem = new TabItem(this.tabContent);

        this.element.addEventListener('click', () => this.select())

    };

    select() {
        const tabs = document.querySelector('.tabs');

        Array.from(tabs.children).forEach(el => el.classList.remove('tab-selected'));

        this.element.classList.add('tab-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        let links = document.querySelectorAll('.tab-content .wrapper');
        Array.from(links).forEach(el => el.classList.remove('tabs-item-selected'));
        this.element.classList.add('tabs-item-selected');
    }
}

let links = document.querySelector('.tabs');

links = Array.from(links.children).map(el => new TabLink(el));

links[0].select();