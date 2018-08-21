// Tabs Class
class TabLink {
    constructor(element) {
        this.element = element;

        // Get the data from the tabs
        this.dataTab = this.element.dataset.tab;

        // Get and set the tabs-item data
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.dataTab}"]`);

        // Set the tab item to a new TabItem class
        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => { this.select();});

    }

    // Selects the selected tab
    select() {
        // Get all the tab links
        const links = document.querySelectorAll('.tabs-link');

        // Remove all tabs-link-selected class
        links.forEach(elem => {
            elem.classList.remove('tabs-link-selected');
        });

        // Add tabs-link-selected class to the currently selected tab
        this.element.classList.add('tabs-link-selected');

        // Calls the select method on the TabItem
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;

    }

    // Selects the currently selected tab
    select() {
        // Gather all the tabs items
        let allItems = document.querySelectorAll('.tabs-item');

        // Remove all tabs-item-selected class
        allItems.forEach(elem => {
            elem.classList.remove('tabs-item-selected');
        });

        // Add tabs-item-selected class to the currently selected item
        this.element.classList.add('tabs-item-selected');
    }
}

// Set the tab links and set the links to a class of TabLInk
let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

// Select the first tab item
links[0].select();