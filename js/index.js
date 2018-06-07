class MenuItems {
    constructor(item) {
        this.item = item;
        this.button = document.querySelector(".ham-button");
        this.content = document.querySelector(".toggle");
        this.button.addEventListener("click", () => {this.expand()});
    }

    expand() {
        this.content.classList.toggle("hide");
        this.button.classList.toggle("close");
    }
}

let menu = document.querySelectorAll(".popup ul li a");
menu= Array.from(menu).map(item => new MenuItems(item));

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll("ul li");
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
        this.activeLink = this.links[0];
        this.init();
    }

    init(){
        this.activeLink.select();
    }

    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        this.element = document.querySelector(`.content[data-tab="${data}"]`);
        return this.element;
    }
}

class TabsLink {
    constructor(element, parent) {
        this.element = element;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.element.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.element.addEventListener("click", () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }

    select() {
        this.element.classList.add("highlight");
        this.tabsItem.select();
    }

    deselect() {
        this.element.classList.remove("highlight");
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("active");
    }

    deselect() {
        this.element.classList.remove("active");
    }
}


let tabs = document.querySelectorAll(".tab-links");
tabs= Array.from(tabs).map(tab => new Tabs(tab)); 