// JS goes here

// Tab Navigation Services

// .active-tab provides blue color

// .hide display: none

// .show display: block

// Scroll main page -- I can't get it work the way I want to -_-
const navScroll = () => {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.style.backgroundColor = "#9DA7B1";
        nav.style.opacity = .95;
    } else {
        nav.style.backgroundColor= "transparent";
        nav.style.opacity = 1;
    }
}

const nav = document.querySelector(".navigation")
document.addEventListener("scroll", navScroll);

class Dropdown {
    constructor(element, parent) {
        this.element = element;

        this.button = this.element.querySelector(".modal-button");
        this.close = this.element.querySelector(".close-button");
        this.content = this.element.querySelector(".modal");
        this.button.addEventListener("click", () => {
            this.toggleContent();
        })
        this.close.addEventListener("click", () => {
            this.toggleClose()
        })
    }

    toggleContent() {
        this.content.classList.toggle("modal-hidden");
        this.button.classList.toggle("modal-hidden");
    }

    toggleClose() {
        this.content.classList.toggle("modal-hidden");
        this.button.classList.toggle("modal-hidden");
    }
}
let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));


class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".tabs-link");
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this)
        })
        this.activeLink = this.links[0];
        this.init()
    }

    init() {
        this.activeLink.select()
    }

    updateActive(newActive) {
        this.activeLink.deselect
        this.actliveLink = newActive;
    }

    getTab(data) {
        return this.element.querySelecter(`.tabs-item[data-tab='${data}']`)
    }
}

class TabsLink {
    constructor(element, parent) {
        this.element = element;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.element.dataset.tab);
        this.tabsItem = new this.tabsItem(this.tabsItem);
        this.element.addEventListener("click", () => {
            this.tabs.updateActive(this);
            this.select();
        })
    }

    select() {
        this.element.classList.add("tabs-link-selected");
        this.tabsItem.select();
    }

    deselect() {
        this.element.classList.remove("tabs-link-selected");
        this.tabsItem.deselect();
    }
 }

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("tabs-item-selected");
    }

    deselect() {
        this.element.classList.remove("tabs-item-selected")
    }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));