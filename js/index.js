// JS goes here
class Dropdown {
    constructor(element) {
        
        this.element = element;

        // Get the element with the ".dropdown-button" 
        this.button = this.element.querySelector('.dropdown-button');
        // assign the reference to the ".dropdown-content" 
        this.content = this.element.querySelector('.dropdown-content');
        // assign reference to close hamburger-close
        this.close = this.element.querySelector('#close');
        //assign reference to open hamburger-open
        this.open = this.element.querySelector('#open');
        console.log(this.close);


        // Add a click handler to the button reference and call the toggleContent method.
        this.button.addEventListener('click', () => {
            this.toggleContent()
        });
    }

    toggleContent() {

        // Toggle the ".dropdown-hidden" class off and on
        this.content.classList.toggle('dropdown-hidden');
        // this.element.classList.toggle('dropdown-hidden');

        // toggle for x to close 
        this.close.classList.toggle('dropdown-hidden');
        //toggle for hamburger open
        this.open.classList.toggle('dropdown-hidden');
    }
}

// control starts here
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

//Services page

//Tabs
class TabLink {
    constructor(element) {
        this.element = element;

        // custom data attribute on the Link
        this.data = this.element.dataset.tab;

        // custom data attribute to get the associated Item element
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

        //  a new instance of the TabItem class.
        this.tabItem = new TabItem(this.itemElement);

        //  event listener calling the select method on click
        this.element.addEventListener('click', () => {
            this.select();
        });

    }

    select() {
        // Get all of the elements with the tabs-link class
        const links = document.querySelectorAll('.tabs-link');

        // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
        links.forEach(link => {
            link.classList.remove('tabs-link-selected');
        })
        // Array.from(links).forEach((link) => {
        //     link.classList.remove('tabs-link-selected');        
        // });

        // Add a class named "tabs-link-selected" to this link
        this.element.classList.add('tabs-link-selected');

        // Call the select method on the item associated with this link
        this.tabItem.select();
        //   this.element.addEventListener('click', () => { this.select() });
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tabs-item');

        items.forEach(item => {
            item.classList.remove('tabs-item-selected');
        });
        // Select all ".tabs-item" elements from the DOM
        // Remove the class "tabs-item-selected" from each element
        // Add a class named "tabs-item-selected" to this element 
        this.element.classList.add('tabs-item-selected');
    }
}


// control flow starts here 
let links = document.querySelectorAll('.tabs-link');

// iterate through the array above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(tabsLinks => new TabLink(tabsLinks));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
// links[0].select();