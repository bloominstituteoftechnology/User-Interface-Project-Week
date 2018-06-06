


class TabNavigator {
    constructor(element) {
        this.element = element;
        this.tabLinks = this.element.querySelectorAll('tab-link');
        this.tabLinks = Array.from(this.tabLinks).map(tabLink => new TabLink(tabLink, this));
    }
    
}

class TabLink {
    constructor(element, parent) {

    }
}
let tabNav = document.querySelectorAll('.tab-navigator');

tabNav = Array.from(tabNav).map(tab => new TabNavigator(tabNav));