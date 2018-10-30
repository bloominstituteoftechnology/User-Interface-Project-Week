class TabLinks {
    constructor(link) {
        this.link = link;
        this.data = this.link.dataset.tab;
        console.log(this.data);
        this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        console.log(this.tabItem);
        this.tabItem = new TabItem(this.tabItem);
        console.log(this.tabItem);
        this.link.addEventListener('click', () => { this.select() });

    }
    select() {
        const allLinks = document.querySelectorAll('.tabs-link');
        Array.from(allLinks).forEach( item => { item.classList.remove('tabs-link-selected') });
        this.link.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(tabElement) {
        this.tabElement = tabElement;
    }
    select() {
        const allTabItems = document.querySelectorAll('.tabs-item');
        Array.from(allTabItems).forEach( item => { item.classList.remove('tabs-item-selected') });
        // need to add class='tabs-item-selected' to the CSS and html where needed
        this.tabElement.classList.add('tabs-item-selected');
    }
}


let tabLinks = document.querySelectorAll('.tabs-link');

tabLinks = Array.from(tabLinks).map( link => new TabLinks(link) );
console.log(tabLinks)