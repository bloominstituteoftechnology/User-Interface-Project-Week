// JS goes here
class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".tab-link");
        this.items = document.querySelector(".tabs-items");
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
        return this.items.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
}

class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = this.tabs.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener('click', () => {
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
        this.element.classList.add("tabs-item-selected");
    }

    deselect() {
        this.element.classList.remove("tabs-item-selected");
    }
}


let tabs = document.querySelectorAll(".tabs-links");
tabs = Array.from(tabs).map(each => new Tabs(each));