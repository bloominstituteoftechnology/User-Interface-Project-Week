// JS goes here

/* Nav Menu */
const hamburger = document.querySelector('.menu-closed');
const hamburgerX = document.querySelector('.menu-opened');
const menu = document.querySelector('.menu-items');

/* Open menu on click */
hamburger.addEventListener( 'click', function(e) {
    console.log("hamburger clicked");
    hamburger.style.display = "none";
    hamburgerX.style.display = "inline";
    menu.style.display = "block";
});

/* Close menu on click */
hamburgerX.addEventListener( 'click', function(e) {
    console.log("X clicked");
    hamburgerX.style.display = "";
    hamburger.style.display = "";
    menu.style.display = "none";
});


/* Services Page - Tabs */
class TabLink {
    constructor(el) {
        this.el = el;

        // Get custom data attribute on the link
        this.data = this.el.dataset.tab;
        
        // Get associated item element
        this.itemElement = document.querySelector(`.service-tab[data-tab="${this.data}"]`);
        
        // Create a new instance of the TabItem class
        this.tabItem = new TabItem(this.itemElement);
        
        // Add a click listener - calling select method on click
        this.el.addEventListener('click', () => {this.select()});
    };

    select() {
        // Get all button elements
        this.links = document.querySelectorAll('.cta-row .button');
        
        // Remove the selected class from all links
        Array.from(this.links).forEach( function(element) {
            element.classList.remove('button-selected');
        });

        // Add .button-selected to this button
        this.el.classList.add('button-selected');

        // Call select method on item associated with this link
        this.tabItem.select();
    }
}

class TabItem{
    constructor(el) {
        this.el = el;
    }

    select() {
        console.log("this.el:", this.el);
        // Select all tab content
        this.itemElements = document.querySelectorAll('.cta-row.service-tab');
        
        // Remove class .service-tab-selected from each element
        Array.from(this.itemElements).forEach( function(itemElement) {
            itemElement.classList.remove('service-tab-selected');
        });

        // Add .service-tab-selected to selected element
        this.el.classList.add('service-tab-selected');
        console.log("classlist",this.el.classList);
    }
}

// Get all buttons
let links = document.querySelectorAll('.cta-row .button');

// Create a new instance of TabLink for each button item
links = Array.from(links).map( (link) => {return new TabLink(link)});

// Select the first item in the array.
links[0].select();
