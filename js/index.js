// NAVBAR
// pulling in navbar and icon
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

// grab links that are display none
const navLinks = document.querySelector(".nav-links");

// add click event listener to display navbar
hamburger.addEventListener("click", function() {
    navbar.classList.toggle("active-navbar");

    if (hamburger.src.indexOf("nav-hamburger.png") !== -1) {
        // switch img path with clicked
        hamburger.src = "img/nav-hamburger-close.png";

        // display nav links once clicked
        navLinks.style.display = "flex";
    } else {
        hamburger.src = "img/nav-hamburger.png";
        navLinks.style.display = "none";
    }
});

// SERVICE PAGE -> tabs that switch info and picture
class TabsItem {
    constructor(element) {
        // attach dom element to object. Example in Tabs class
        this.element = element;
    }

    select() {
        // should use classList
        this.element.classList.add("tabs-item-selected");
    }

    deselect() {
        // should use classList
        this.element.classList.remove("tabs-item-selected");
    }
}

class TabsLink {
    constructor(element) {
        // attach dom element to object. Example in Tabs class
        this.element = element;
    }

    select() {
        // adds color to tab selected
        this.element.style.backgroundColor = "#6c9eb6";
        this.element.style.color = "white";
        this.element.classList.add("tabs-link-selected");
    }

    deselect() {
        // removes color to tab selected
        this.element.style.backgroundColor = "white";
        this.element.style.color = "black";
        this.element.classList.remove("tabs-link-selected");
    }
}

class Tabs {
    constructor(element) {
        this.index = 0;

        // attaches the dom node to the object as this.element
        this.element = element;

        // create a reference to the "service-tab" class nested in your tab object
        this.links = this.element.querySelectorAll(`.service-tab`);

        // map over the array creating new TabsLink class instances of each link.
        this.links = Array.from(this.links).map((link, index) => {
            link.addEventListener("click", () => {
                this.index = index;
                this.deselectActive();
                this.updateActive();
                this.selectActive();
            });
            return new TabsLink(link, this);
        });

        // need to refactor html because this is bad. future changes will destroy it
        this.tabsItems = Array.from(document.querySelectorAll(".service-tab-container")).map(
            tabItem => new TabsItem(tabItem)
        );

        this.updateActive();
        this.init();
    }

    init() {
        // invoke the method select() on activeLink
        this.selectActive();
    }

    deselectActive() {
        // deselect both link and item
        this.activeLink.deselect();
        this.activeItem.deselect();
    }

    updateActive() {
        this.activeLink = this.links[this.index];
        this.activeItem = this.tabsItems[this.index];
    }

    selectActive() {
        // select the item and link
        this.activeLink.select();
        this.activeItem.select();
    }
}

// create a reference to the ".tabs-row" classes
let tabs = document.querySelectorAll(".tab-row");

// map through each tabs element and create a new Tabs object.
tabs = Array.from(tabs).map(tab => new Tabs(tab));
