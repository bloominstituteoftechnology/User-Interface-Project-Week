class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll('.tab');
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
        console.log("these links", this.links);
        
        this.activeLink = this.links[0];
        this.init();
    }

    init() {
        this.activeLink.select()
    }

    updateActive(newActive) {
        console.log("newactive", newActive);
        
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        console.log(document.querySelector(`.tab-content[data-content="${data}"]`));
        
        return document.querySelector(`.tab-content[data-content="${data}"]`);
    }

}

class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        
        this.tabsItem = parent.getTab(this.link.dataset.content);
        
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener('click', () => {
            
            this.select()
        });
    };

    select() {
        this.tabs.updateActive(this);
        this.link.classList.add('active-tab')
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove('active-tab');
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        console.log("this element", this.element);
        
        this.element.classList.add('selected-content');
    }

    deselect() {
        this.element.classList.remove('selected-content');
    }
}


let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));