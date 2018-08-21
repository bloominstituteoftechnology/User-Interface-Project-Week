// tabs class kinda like a tab factory
class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.activeLink.select();
  }

  activate(link) {
    this.activeLink.deselect();
    this.activeLink = link;
  }

  getTab(dataValue) { return this.element.querySelector(`.tabs-item[data-tab="${dataValue}"]`); }

}

// tablink class
class TabsLink {
  // decided it might be easyer if I just track the parentElement of the objects
  constructor(element, parentElements) {
    this.element = element;
    this.tabIndex = element.dataset.tab;
    this.tabs = parentElements;
    this.tabItem = parentElements.getTab(this.tabIndex);
    this.tabItem = new this.tabItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.activate(this);
      this.select();
    })
  }
  select() {
    this.element.classList.add("tabs-link-selected");
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected");
    this.tabsItem.deselect();
  }
}

// tabsitem class TODO: fill in logic
class TabsItem {
  constructor(element) {}

  select() {}

  deselect() {}
}
