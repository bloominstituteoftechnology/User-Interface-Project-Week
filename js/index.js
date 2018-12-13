// JS goes here
class ToggleMenu {
    constructor(elem) {
        this.elem = elem;

        // reference for drop down button
        this.button = document.querySelector('.dropdownButton');

        // reference for drop down content
        this.content = document.querySelector('.dropdownContent');

        //event listener
        this.button.addEventListener('click', () => this.toggleContent());
    }
    toggleContent() {
        this.content.classList.toggle('dropdownHidden');
        if (!this.content.classList.contains('dropdownHidden')) {
            this.button.src = "../img/nav-hamburger-close.png";
        } else {
            this.button.src = "../img/nav-hamburger.png";
        }
    }
}

// reference to drop down content element
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new ToggleMenu(dropdown));

// ---------------------------------------------------------------------------
// Tab Section For Services Page
class TabLink {
    constructor(elem) {
        // Individual Tabs
        this.elem = elem;

        // Data Attribute
        this.data = this.elem.dataset.tab;

        // Item Selector
        this.itemElem = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);

        // create new instance of TabItem class constructor
        this.itemElem = new TabItem(this.itemElem);

        // event linstener
        this.elem.addEventListener('click', () => this.select())
    }

    select() {
        // reference tabs-links class
        const links = document.querySelectorAll('.tabs-link');

        // removed tabs-link-selected class 
        links.forEach(link => link.classList.remove('tabs-link-selected'));

        // add tabs-link-selected class to selected link
        this.elem.classList.add('tabs-link-selected');

        // call select method from TabItem class construtor
        this.itemElem.selected();
    }
}

class TabItem {
    constructor(itemElem) {
        this.itemElem = itemElem;
    }

    selected() {
        //reference tab items
        const items = document.querySelectorAll('.tabs-item');

        // remove tabs-item-selected class
        items.forEach(item => item.classList.remove('tabs-item-selected'));

        // add tabs-item-selected class to selected tab
        this.itemElem.classList.add('tabs-item-selected');

    }
}


const links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));

const html = document.querySelector('html')
TweenLite.from(html, 1.5, { ease: Power1.easeIn, opacity: 0 });
