class Tabs {
    constructor(element) {
        this.element = element;
        this.links = document.querySelectorAll(".tabs-link");
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });

        this.activeLink = this.links[0];

        this.init();
    }

    init() {
        this.activeLink.select();
    }

    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
}

class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }

    select() {
        this.link.classList.add("tab-active");
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove("tab-active");
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("tab-item-active");
    }

    deselect() {
        this.element.classList.remove("tab-item-active");
    }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));



let open = false;
class ExpandedNav {
    constructor(element) {
        this.element = element;
        this.openButton = document.querySelector(".hamburger-button");
        this.closeButton = document.querySelector(".close-button");
        this.content = document.querySelector(".nav-content");
        this.links = document.querySelectorAll(".nav-content a");
        this.links = Array.from(this.links);
        this.openButton.addEventListener('click', () => {
            console.log("Open button pressed.")
            this.expandContent()});
        this.closeButton.addEventListener('click', () => {this.contractContent()});
    }

    expandContent() {
        this.content.classList.toggle("nav-expanded");
        this.closeButton.classList.toggle("show-close");
        this.closeButton.style.display = "block";
        this.openButton.style.display = "none";
    }

    contractContent() {
        // this.element.style.display = "none";
        this.closeButton.style.display = "none";
        this.openButton.style.display = "block";
        this.content.classList.toggle("nav-expanded");
        this.closeButton.classList.toggle("show-close");
    }
}


let expandedNav = document.querySelectorAll(".nav");
console.log(expandedNav);
expandedNav = Array.from(expandedNav).map(expanded => new ExpandedNav(expanded));
console.log(expandedNav);