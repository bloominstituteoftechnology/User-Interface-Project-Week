
class TabsContent {
  constructor(tab) {
    this.element = tab;
    this.links = this.element.querySelectorAll('.tabs-link');
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }
  init() {
    this.activeLink.select();
  }
  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }
}



class TabsLink {
  constructor(link, parent) {
    this.link = link;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  }

  select() {
    this.link.classList.add('tabs-link--selected');
    this.tabsItem.classList.add('tabs-item--active');
  }

  deselect() {
    this.link.classList.remove('tabs-link--selected');
    this.tabsItem.classList.remove('tabs-item--active');
  }
}


let tabs = document.querySelectorAll('.tabs-section');
tabs = Array.from(tabs).map(item => new TabsContent(item));