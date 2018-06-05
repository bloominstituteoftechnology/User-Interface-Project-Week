class Tabs {
    constructor(tabs) {
        this.element = tabs;
        this.links = Array.from(this.element.querySelectorAll('.tab-link'));
        this.links = this.links.map((link) => {
            return new TabLink(link, this)});
        this.activeLink = this.links[0];
        this.tabs = Array.from(this.element.querySelectorAll('.tab'));
        this.tabs = this.tabs.map((tab) => {
            return new Tab (tab);
        });
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
        this.data = this.element.datalist.tab;
        this.tabArr = this.getLinkedTabs();
    }
    getLinkedTabs() {
        return this.parent.tabs.filter((tab) => {
            tab.element.datalist.tab === this.data;
        });
    }
    activateTab() {
        this.tabArr.forEach((tab) => {
            tab.classList.add(hidden);
        });
    }
    deactivateTab() {
        this.tabArr.forEach((tab) => {
            tab.classList.remove(hidden);
        });
    }
    updateTabsOnClick() {
        this.parent.updateActive(this);
    }
}

let tabsArr = document.querySelectorAll(".tabs");
tabsArr = Array.from(tabs);
tabsArr = tabsArr.map((tabs) => {
    return new Tabs(tabs);
} );