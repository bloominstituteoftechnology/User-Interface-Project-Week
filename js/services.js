class TabButton {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tab-links[data-tab="${this.data}"]`);
        // data-info??

        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => {this.select()});

    };

    select() {
        const tabs = document.querySelectorAll('.button');
        Array.from(tabs).forEach(tab => {tab.classList.remove('button-active')});
        this.element.classList.add('button-active');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const tabs = document.querySelectorAll('.tab-links');
        Array.from(tabs).forEach(tab => {tab.classList.remove('tab-active')});
        this.element.classList.add('tab-active');
    }
}

let links = document.querySelectorAll('.button');
links = Array.from(links).map(item => new TabButton(item));

links[0].select();