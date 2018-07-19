class Tabs {
    constructor (element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".tab-link");
        this.links = Array.from(this.links).map( link => {
            return new TabsLink(link, this);
        });
        this.activeLink = this.links[0];
        this.init();
    }

    init() {
        this.activeLink.select();
    }

    updateActive (newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        return this.element.querySelector(`.tab-item[data-tab="${data}"]`);
    }
}

class TabsLink {
    constructor (link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener("click", () => {
            this.tabs.updateActive(this);
            this.select();
        });
    };

    select() {
        this.link.classList.add("tabs-link-selected");
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove("tabs-link-selected");
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }
    
    select() {
        this.element.classList.add("tab-item-selected");
    }

    deselect() {
        this.element.classList.remove("tab-item-selected");
    }
}




//Create reference to the ".tabs" classes
let tabs = document.querySelectorAll(".tabs");
// map through each tabs element and create a new Tabs object. Be sure to pass in a reference to the Tabs object.
tabs = Array.from(tabs).map( tab => new Tabs(tab));