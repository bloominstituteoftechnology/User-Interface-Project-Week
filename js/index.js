// JS goes here
class TabLink {
    constructor(elem) {
        // Individual Tabs
        this.elem = elem;

        // Data Attribute
        this.data = this.elem.dataset.tab;

        // Item Selector
        this.itemElem = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);

    }
}


















const links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));

