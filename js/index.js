class Tabs {
  constructor(element) {
    this.element = element;
    this.links = document.querySelectorAll('.nav-link');
    this.links = Array.from(this.links).map(link => {
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
    return this.element.querySelector(`.tab-pane[data-toggle="${data}"]`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsPane = parent.getTab(this.element.dataset.toggle);
    this.tabsPane = new TabsPane(this.tabsPane);

    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select(this.element);
    });
  };

  select() {
    this.element.classList.add('active');
    this.tabsPane.select();
  }

  deselect() {
    this.element.classList.remove('active');
    this.tabsPane.deselect();
  }
}

class TabsPane {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('active');
  }

  deselect() {
    this.element.classList.remove('active');
  }
}


let tabs = document.querySelectorAll('.tabs');

tabs = Array.from(tabs).map((element) => {new Tabs(element)});
