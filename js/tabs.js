class Tabs {
    constructor(element){
        this.element = element
        this.link = element.querySelectorAll('.tabs-link')
        this.link = Array.from(this.link).map(tLink =>{
            return new TabsLink(tLink, this)
        })
        this.activeLink = this.link[0];
        this.init();
    }

    init(){
        this.activeLink.select();
    }

    updateActive(newActive){
        this.activeLink.deselect()
        this.activeLink = newActive
    }

    getTab(data){
        return this.element.querySelector(`.tab-item[data-tab="${data}"]`)
    }
}

class TabsLink {
    constructor(link, parent){
        this.link = link;
        this.parent = parent;
        this.tabItem = parent.getTab(link.dataset.tab)
        this.tabItem = new TabsItem(this.tabItem)
        this.link.addEventListener('click', () => {
            this.parent.updateActive(this);
            this.select();
        });
    }

    select() {
        this.link.classList.toggle('active-tab');
        this.tabItem.select();
      }
    
      deselect() {
        this.link.classList.toggle(`active-tab`);
        this.tabItem.deselect();
      }
}

class TabsItem {
    constructor(element){
        this.element = element
    }

    select() {
        this.element.classList.toggle(`selected-content`);
      }
    
      deselect() {
        this.element.classList.toggle(`selected-content`);
     }
}

let tabs = document.querySelectorAll(`.tabs`);
tabs = Array.from(tabs).map(tab => new Tabs(tab));