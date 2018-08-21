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

// tablink class TODO: fill in logic
class TabsLink {
  constructor(element, parentElement) {}
  select() {}
  deselect() {}
}
