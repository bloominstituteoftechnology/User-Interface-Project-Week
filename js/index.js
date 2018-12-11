// JS goes here
class TabLink {
    constructor (element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabItem[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => {
            this.select();
        })
    }

    select() {
        let links = document.querySelectorAll('.tabs-link');
        links.forEach((link) => {
            link.classList.remove('link-selected');
        });
        this.element.classList.add('link-selected');
        this.tabItem.select(this.itemElement);
    }
}

class TabItem {
    constructor(element){
        this.element = element;
    }
    select () {
        let items = document.querySelectorAll('.tabItem');
        items.forEach((item) => {
            item.classList.remove('item-selected');
        });
        this.element.classList.add('item-selected');
    }
}

let tabs = document.querySelectorAll('.tabs-link').forEach( tab => new TabLink(tab));

// --------------------------- MENU -----------------------------------------

let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    // navigation.classList.toggle('toggle');

    if(navigation.classList.toggle('hidden')){
        hamburger.src = "./img/nav-hamburger.png"
    } else {
        hamburger.src = "./img/nav-hamburger-close.png"
    }
})