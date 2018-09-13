class TabMenuItem {
    constructor(item) {
        this.item = item;
        this.data = this.item.dataset.tab;
        this.item.addEventListener('click', () => this.tabSelect());
        this.content = document.querySelector(`.tab-content[data-tab='${this.data}']`);
    }

    tabSelect() {
        document.querySelectorAll('.tab').forEach(tabContent => tabContent.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tabContent => tabContent.classList.remove('active'));
        this.item.classList.add('active');
        this.content.classList.add('active');
    }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new TabMenuItem(tab));
tabs[0].tabSelect();