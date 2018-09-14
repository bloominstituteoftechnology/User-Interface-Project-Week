class LinkClass {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.link;
        this.tabItem = document.querySelector(`.tab-item[data-item="${this.data}"]`);

        this.tabElement = new TabItem(this.tabItem);

        this.element.addEventListener('click', () => {
            this.select();
        })
    };

    select() {
        const arrOfLinks = document.querySelectorAll('.tab-link');
        arrOfLinks.forEach( link => {
            link.classList.remove('tab-link-selected');
        })
        
        this.element.classList.add('tab-link-selected');
        this.tabElement.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
       const arrOfItems = document.querySelectorAll('.tab-item')
        arrOfItems.forEach(item => {
            item.classList.remove('tab-item-open')
        })

        this.element.classList.add('tab-item-open');
    }
}

let links =document.querySelectorAll('.tab-link');

links = Array.from(links).map(tablink => new LinkClass(tablink));

links[0].select();