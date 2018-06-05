class Tabs {
    constructor(tabs) {
        this.element = tabs;
        this.tabs = Array.from(document.querySelectorAll('.tab'));
        this.links = Array.from(document.querySelectorAll('.tab-link'));
        this.links = this.links.map((link) => {
            return new TabLink(link, this)});
        this.activeLink = this.links[0];
        this.init();
    }

    updateActive (link) {
        this.activeLink.deactivateTab();
        this.activeLink = link;
        this.activeLink.activateTab();
    }

    init () {
        this.links.forEach((link) => {
            link.deactivateTab();
            link.element.addEventListener("click", link.updateTabsOnClick.bind(link));
        });
        this.activeLink.activateTab();
    }
}

class TabLink {
    constructor (link, parent) {
        this.element = link;
        this.parent = parent;
        this.data = this.element.dataset.tab;
        this.tabArr = this.getLinkedTabs();
    }
    getLinkedTabs() {
        return this.parent.tabs.filter((tab) => {
            return tab.dataset.tab === this.data;
        });
    }
    activateTab() {
        this.element.classList.add("selected");
        this.tabArr.forEach((tab) => {
            tab.classList.remove("hidden");
        });
    }
    deactivateTab() {
        this.element.classList.remove("selected");
        this.tabArr.forEach((tab) => {
            tab.classList.add("hidden");
        });
    }
    updateTabsOnClick() {
        this.parent.updateActive(this);
    }
}

let tabsArr = document.querySelectorAll(".tabs");
tabsArr = Array.from(tabsArr);
tabsArr = tabsArr.map((tabs) => {
    return new Tabs(tabs);
});

tabsArr.forEach((tabs) => {
    tabs.init();
});