// JS goes here
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




class TabLink {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => {this.select()});
    }
    select() {
        const links = document.querySelectorAll('.tabs-link');

        Array.from(links).forEach(links => links.classList.remove('tabs-link-selected'));

        this.element.classList.add('tabs-link-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(tabItems) {
        this.tabItems = tabItems;
    }
    select() {
        const allItemElements = document.querySelectorAll('.tabs-item');

        Array.from(allItemElements).forEach(allItemElements => allItemElements.classList.remove('tabs-item-selected'));

        this.tabItems.classList.add('tabs-item-selected');
    }
}















let links = document.querySelectorAll('.tabs-link'); 

links = Array.from(links).map(element => new TabLink(element));

links[1].select();