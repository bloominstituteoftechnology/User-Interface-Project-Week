class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    }

    select() {
        const tlinks = document.querySelectorAll('.tab');

        Array.from(tlinks).forEach(tlink => {
            tlink.classList.remove('tab-selected');
        });

        this.element.classList.toggle('tab-selected');

        this.tabItem.select();
    }

}

class TabItem {
    constructor(tabContent) {
        this.tabContent = tabContent;
    }
    select() {
        let items = document.querySelectorAll('.service-description');

        Array.from(items).forEach(item => {
            item.classList.add('tab-selected');
        });

        this.tabContent.classList.toggle('tab-selected');
        console.log(this.element);
    }

}


let tlinks = document.querySelectorAll('.tab');
console.log(tlinks);
tlinks = Array.from(tlinks).map(tlink => new TabLink(tlink));