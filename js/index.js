
class TabNavigator {
    constructor(element) {
        this.element = element;
        this.tabLinks = this.element.querySelectorAll('.tab-link');
        console.log(this.tabLinks);
        this.tabLinks = Array.from(this.tabLinks).map(tabLink => new TabLink(tabLink, this));
        this.activeTab = this.tabLinks[0];
        this.init();
    }

    init() {
        this.activeTab.select();
    }
    updateActive(newActive) {
        this.activeTab.deselect();
        this.activeTab = newActive;
    }
}

class TabLink {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;

        this.element.addEventListener('click', function () {
            this.select();
        }.bind(this));
    }
    select() {
        this.parent.updateActive(this);
        console.log("yep");
        this.element.classList.add('tab-active');
    }
    deselect() {
        this.element.classList.remove('tab-active');
    }
}
let tabNavs = document.querySelectorAll('.tab-navigator');
console.log(tabNavs);
tabNavs = Array.from(tabNavs).map(tabNav => new TabNavigator(tabNav));