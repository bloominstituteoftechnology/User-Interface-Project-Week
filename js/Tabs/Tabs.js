class Tab {
  constructor(tab) {
    this.tab = tab;
    this.dataTab = this.tab.dataset.tab;
    this.tabContent = document.querySelector(`.tab-content[data-tab="${this.dataTab}"]`);
    this.tabContent = new TabContent(this.tabContent);
    this.tab.addEventListener('click', _ => this.pickTab());
  }

  pickTab() {
    document.querySelectorAll('.tab').forEach( tab => tab.classList.remove('tab-selected'));
    this.tab.classList.add('tab-selected');
    this.tabContent.pickTabC();
  }

}

class TabContent {
  constructor(tabContent) {
    this.tabContent = tabContent;
  }

  pickTabC() {
    document.querySelectorAll('.tab-content').forEach( tabC => tabC.classList.remove('tab-show'));
    this.tabContent.classList.add('tab-show');
  }
}

const tabs = document.querySelectorAll('.tab').forEach(tab => new Tab(tab));