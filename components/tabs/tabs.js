class TabLink {
    constructor(element) {
        this.element = element;

        this.dataSet = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.service-well[data-tab="${this.dataSet}"]`);

        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => this.select());
    };

    select() {
        let tabs = document.querySelectorAll('.service-button');

        Array.from(tabs).forEach(tab => tab.classList.remove('active'));

        this.element.classList.add('active');
        
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {

        const items = document.querySelectorAll('.service-well');
    
        Array.from(items).forEach(item => item.style.display='none');
     
        this.element.style.display = '';
    }
}






let tabs = document.querySelectorAll('.service-button');

tabs = Array.from(tabs).map(tab => new TabLink(tab));

tabs[0].select();