class TabLink {
    constructor(element) {
       this.element = element;
       this.data = this.element.dataset.tab;
       this.itemElement = document.querySelectorAll(`.tab-content[data-tab="${this.data}"]`);
       this.tabItem = new TabItem(this.itemElement);
       this.element.addEventListener('click', () => {
           this.select()});
    };

    select() {
        const tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => {tab.classList.remove('selected')});       
        this.element.classList.add('selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const content = document.querySelectorAll('.tab-content');
        Array.from(content).forEach(tab => {tab.classList.remove('content-selected')});
        this.element.classList.add('content-selected');
    }
}

let links = document.querySelectorAll('.tab');
links = Array.from(links).map(element => new TabLink(element));
links[0].select();



