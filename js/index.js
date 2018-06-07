//sticky top nav bar
let nav = document.querySelector('.menu-bar');

window.addEventListener('scroll', navScroll);

function navScroll() {
    if (window.scrollY === 0) {
        nav.classList.remove('nav-colored');
    } else {
        nav.classList.add('nav-colored');
    }
}

//Menu items toggle
let menu = document.querySelector('.menu-items');
let hamburgerBtn = document.querySelector('.hamburger');
let hamBtn = 'img/nav-hamburger.png';
let xSrc = 'img/nav-hamburger-close.png';

hamburgerBtn.addEventListener('click', function () {
    menu.classList.toggle('flex');
    if (hamburgerBtn.getAttribute('src') === hamBtn) {
        hamburgerBtn.setAttribute('src', xSrc);
        console.log(hamburgerBtn.getAttribute('src'));
    } else {
        hamburgerBtn.setAttribute('src', hamBtn);
        console.log(hamburgerBtn.getAttribute('src'));
    }
});

//Tab Toggle
class Tabs {
    constructor(element) {
        this.element = element;
        // create a reference to the ".tabs-link" class nested in your tab object
        this.links = this.element.querySelectorAll('.tabs-link');
        // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
        // Set the active link to the first item in the array
        this.activeLink = this.links[0];
        // Nothing to update here, just notice we are invoking the init() method
        this.init();
    }

    init() {
        // invoke the method select() on activeLink
        this.activeLink.select();
    }

    updateActive(newActive) {
        // invoke the method deselect() on activeLink
        this.activeLink.deselect();
        // assign this.activeLink to the new active link (newActive)
        this.activeLink = newActive;
    }

    getTab(data) {
        // return a reference to the element's data attribute
        console.log(this.element.querySelector(`.tabs-item[data-tab='${data}']`));
        return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
    }

}

class TabsLink {
    // notice that we passesd in the element reference as well as a reference to the parent class.
    constructor(element, parent) {
        this.element = element;
        // assign this.tabs to parent
        this.tabs = parent;
        // Using the method from the parent class above, pass in a reference to the custom data attribute.  
        console.log(this.element.dataset.tab);
        this.tabsItem = parent.getTab(this.element.dataset.tab);
        // Create a new TabsItem object that passes in a tabsItem value that you just created above
        this.tabsItem = new TabsItem(this.tabsItem);

        this.element.addEventListener('click', () => {
            this.tabs.updateActive(this);
            // invoke the select() method on this
            this.select();
        });
    };

    select() {
        // Add a class named "tabs-link-selected" to the element
        this.element.classList.add('selected');
        // Notice that we are using the select method on tabsItem
        this.tabsItem.select();
    }

    deselect() {
        // Remove a class named "tabs-link-selected" from the element
        this.element.classList.remove('selected');
        // Notice that we are using the deselect method on tabsItem
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        // Add a class named "tabs-item-selected" to the element 
        this.element.classList.add('tab-item-selected');
    }

    deselect() {
        // Remove a class named "tabs-item-selected" from the element 
        this.element.classList.remove('tab-item-selected');
    }
}


let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));