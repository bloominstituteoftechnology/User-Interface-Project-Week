class Tabnav {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        this.tabItem = document.querySelector(`.tabItem[data-tab='${this.data}']`);

        this.content = new TabItem(this.tabItem);

        this.element.addEventListener('click', () => {
            event.preventDefault();
            this.select();
        });

    }

    select() {
        const tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => tab.classList.remove('selected'))
        this.element.classList.add('selected')
        this.content.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;

    }

    select() {
        const tabItem = document.querySelectorAll('.tabItem');

        Array.from(tabItem).forEach(item => item.classList.remove('active'));
        this.element.classList.add('active')
    }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new Tabnav(tab));
tabs[0].select();