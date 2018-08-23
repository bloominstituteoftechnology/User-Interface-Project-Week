// services tabs

class Tab {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.tabElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);

        this.tabContent = new TabContent(this.tabElement);

        this.element.addEventListener('click', () => {
            this.select();
        });
    }

    select() {
        const links = document.querySelectorAll('.button');

        links.forEach(element => {
            element.classList.remove('tabs-link-selected');
        })
        
        this.element.classList.toggle('tabs-link-selected');
       

        this.tabContent.select();
    
    }
}

class TabContent {
    constructor(element) {
        this.element = element;

    }

    select() {
        let items = document.querySelectorAll('.tab-item');

        items.forEach(element => {
            element.classList.remove('tabs-item-selected');
        })

        this.element.classList.add('tabs-item-selected');
    }

}

let links = document.querySelectorAll('.button');

links = Array.from(links).map(link => new Tab(link));

links[0].select();