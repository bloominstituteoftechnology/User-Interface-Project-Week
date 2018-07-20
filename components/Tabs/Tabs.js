class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map( link => {
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
    return data;
  }

}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;  
    this.tabsItem = parent.getTab(this.element.dataset.tab);
    this.tabsItem = new TabsItem(document.querySelector(`.tabs-item[data-tab="${this.tabsItem}"]`));
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

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
    this.element.classList.remove("tabs-item-selected");
  }
}


let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
console.log(tabs)

