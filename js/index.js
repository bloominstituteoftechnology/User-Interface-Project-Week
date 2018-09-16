// JS goes here
class TabLink {
    constructor(element) {
        this.element = element;
        //Get the custom data attribute on the link
        this.data = this.element.dataset.tab;
        //Use custom data attribute to get item element with same attribute
        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        //This creates a new instance of the TabItem class
        this.tabItem = new TabItem(this.itemElement);
        // Event listner to invoke selectTab method on a click of a user
        this.element.addEventListener('click', () => {
            this.selectTab()
        });
    };

    selectTab() {
        //Gets all of the elements with the tab-link class
        const links = document.querySelectorAll('.tab-link');
        //Using the forEach method remove the tab-link-selected class from each item
        Array.from(links).forEach((link) => {
            link.classList.remove('tab-link-selected');
        });
        //Add the class name 'tab-link-selected' to this link
        this.element.classList.add('tab-link-selected');
        //Call the select method on the item corresponding with this link
        this.tabItem.select()
    }



};

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        //Selecting all items
        const items = document.querySelectorAll('.tab-item');
        //Removing the class 'tab-item-selected'
        Array.from(items).forEach((item) => {
            item.classList.remove('tab-item-selected')
        });
        //Add the class named 'tab-item-selected'
        this.element.classList.add('tab-item-selected');
    }
}


//Creates a reference to the .tab-link classes
let links = document.querySelectorAll('.tab-link');
//Map over an array & convert each tab ref into a new TabLink
links = Array.from(links).map((link) => new TabLink(link));
links[0].selectTab();