class TabBar {
  constructor(tabLink) {
    this.tabLink = tabLink;
    this.tabData = this.tabLink.dataset.tab;
    this.tabItem = document.querySelector(`.tab-content[data-tab='${this.tabData}']`);
    this.tabItem = new TabContent(this.tabItem);
    this.tabLink.addEventListener('click', (event) => this.select(event));
  }

  select() {
    const links = document.querySelectorAll('.tab-link');

    links.forEach(link => link.classList.remove('tab-link-selected'));
    this.tabLink.classList.add('tab-link-selected');

    this.tabItem.select();
  }
}

class TabContent {
  constructor(tabItem) {
    this.tabItem = tabItem;
    // console.log(tabItem);
  }

  select() {
    const items = document.querySelectorAll('.tab-content');

    items.forEach(item => item.classList.remove('tab-content-selected'));
    this.tabItem.classList.add('tab-content-selected');
  }
}

let tabs = document.querySelectorAll('.tab-link');
tabs = Array.from(tabs).map(tab => new TabBar(tab));
tabs[0].select();
