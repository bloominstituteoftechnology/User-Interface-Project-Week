//**********************
// Menu ****************
//**********************

const menuButton = document.getElementById('hamb');
const menu = document.getElementById('menu-items');
class Dropdown {
  constructor(menu, menuButton) {
    this.menu = menu;
    this.menuButton = menuButton;
    this.menuButton.addEventListener('click', () => this.toggleMenu());
  }
  toggleMenu() {
    this.menu.classList.toggle('menu-hidden');
    this.menuButton.classList.toggle('open');
  }
}
new Dropdown(menu, menuButton);


//********************** 
// Services ************
//**********************

const tabs = document.querySelectorAll('.tab');
class Tab {
  constructor(tab){
    this.tab = tab;
    this.data = this.tab.dataset.tab;
    this.tabContent = document.querySelector(`.tab-content[data-tab='${this.data}']`);
    this.tabContent = new TabContent(this.tabContent);
    this.tab.addEventListener('click', () => this.select());
  }
  select(){
    Array.from(tabs).forEach(tab => tab.classList.remove('tab-selected'));
    this.tab.classList.add('tab-selected')
    this.tabContent.select();
  }
}
class TabContent {
  constructor(tabContent){
    this.tabContent = tabContent;
  }
  select() {
    const items = document.querySelectorAll('.tab-content');
    Array.from(items).forEach(item => item.classList.remove('tab-content-selected'))
    this.tabContent.classList.add('tab-content-selected');
  }
}
tabs.forEach(tab => new Tab(tab));