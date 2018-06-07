class TabNavigator {
  constructor (element) {
    this.element = element;
    this.links = element.querySelectorAll('.tab-navigator__link');
    this.links = Array.from(this.links).map( link => {
      return new TabNavigatorLink(link, this);
    });
    this.activeLink = this.links[0];
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tab-navigator__item[data-tab="${data.tab}"]`);
  }
}

class TabNavigatorLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.element.dataset);
    this.tabsItem = new TabNavigatorItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add('tab-navigator__link--is-active');
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove('tab-navigator__link--is-active'); 
    this.tabsItem.deselect();
  }
}

class TabNavigatorItem {
  constructor (element) {
    this.element = element;
  }  

  select() {
    this.element.classList.add('tab-navigator__item--is-active');
  }

  deselect() {
    this.element.classList.remove('tab-navigator__item--is-active');
  }
}