/*const toggleMenu = () => {
    menu.classList.toggle('menu--open');
};

const menu = document.querySelector('.menu');

const menuButton= document.querySelector('.menuButton');

const menuCloseButton= document.querySelector('.menuCloseButton');

menuButton.addEventListener('click', function(e) {
    e.target= toggleMenu();
});

menuCloseButton.addEventListener('click', function(e) {
    e.target= toggleMenu();
});*/

class TabLink {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

        this.tabItem = new TabItem(this.item);

        this.element.addEventListener('click', () => {
            this.select();
        });
    }

    select() {
        const links = document.querySelectorAll(".tab-link");

        links.forEach(link => {
            link.classList.remove("tabs-link-selected");
        });

        this.element.classList.add("tabs-link-selected");

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll(".tabs-item");

        items.forEach(item => {
            item.classList.remove("tabs-item-selected");
        });
        this.element.classList.add("tabs-item-selected");
    }
}





















/* START HERE: 
- Select all classes named ".tab" and assign that value to the tabs variable
- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
*/



let links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));

