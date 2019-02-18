class TabLink {
    constructor(link){
        this.link = link;

        this.data = this.link.dataset.tab;

        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);

        this.tabItem = new TabItem(this.itemElement);

        this.link.addEventListener('click', () => this.select());
    }

    select() {
        const links = document.querySelectorAll('.tab-link');

        Array.from(links).forEach((tabsLinks) => {
            tabsLinks.classList.remove("tab-link-selected");
        });

        this.link.classList.add("tab-link-selected");

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.items = Array.from(document.querySelectorAll('.tab-item'));

        this.items.forEach(item => item.classList.remove('tab-item-selected'));

        this.element.classList.add('tab-item-selected');
    }
}

let links = document.querySelectorAll('.tab-link');

links = Array.from(links).map(link => new TabLink(link));

links[0].select();