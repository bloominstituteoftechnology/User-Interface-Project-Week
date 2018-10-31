class TabButton{
  constructor(tab){
    this.tab = tab; // element
    this.tabSelected = this.tab.dataset.tabname; // 1, 2, 3, 4
    this.tabContent = document.querySelector(`.tab-article[data-tabname='${this.tabSelected}']`); // element
    this.tabArticle = new TabArticle(this.tabContent); // Turn element into an object
    this.tab.addEventListener('click', () => this.selectTab());
  }
  selectTab(){
    const globalTabs = tabs;
    Array.from(globalTabs).forEach(globalTab => globalTab.classList.remove('tab-selected'));
    this.tab.classList.add('tab-selected');
    this.tabArticle.selectArticle();
  }
}

class TabArticle{
  constructor(tabContent){
    this.tabContent = tabContent;
  }
  selectArticle(){
    const tabArticles = document.querySelectorAll('.tab-article');
    Array.from(tabArticles).forEach(tabArticle => tabArticle.classList.remove('show'));
    this.tabContent.classList.add('show');
  }
}

let tabs = document.querySelectorAll('.tabs-link');
tabs = Array.from(tabs);
let tabButtons = tabs.map(tab => new TabButton(tab));