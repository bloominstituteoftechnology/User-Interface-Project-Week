class TabLink {
    constructor(element) {
      this.element = element;
      this.data = element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.deselect(); this.select(); currentTab = this});
    };
  
    select() {
      this.element.classList.add('tabs-link-selected');
      this.tabItem.select();
    }
    deselect() {
      currentTab.element.classList.remove('tabs-link-selected')
      this.tabItem.deselect();
    }
  }
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      this.element.classList.add('tabs-item-selected');
    }
    deselect() {
      currentTab.tabItem.element.classList.remove('tabs-item-selected');
    }
  }
  let links = document.querySelectorAll('.tabs-link');
  links = Array.from(links).map( link => new TabLink(link));
  links[0].select();
  let currentTab = links[0];