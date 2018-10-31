// JS goes here

const ham = document.querySelector('.ham');
const exit = document.querySelector('.exit');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
  nav.classList.toggle('nav-hidden');
  nav.classList.toggle('nav-expanded');
  ham.classList.toggle('icon-display');
  exit.classList.toggle('icon-display');
})

exit.addEventListener('click', () => {
  nav.classList.toggle('nav-hidden');
  nav.classList.toggle('nav-expanded');
  ham.classList.toggle('icon-display');
  exit.classList.toggle('icon-display');
})

class Tabs {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabItem = new Tab(document.querySelector(`.content[data-tab='${this.data}']`));
    this.element.addEventListener('click', () => {this.toggle()});
  }

  toggle() {
    this.tabSelect();
  }
  tabSelect() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('tab-selected');
    })
    this.tabItem.select();
    this.element.classList.toggle('tab-selected');
  }
}

class Tab {
  constructor(tab) {
    this.tab = tab; 
  }
  select() {
    console.log('here')
    document.querySelectorAll('.content').forEach(tab => {
      tab.classList.add('hidden-tab-content');
      tab.classList.remove('display-tab-content');
    })
    this.tab.classList.add('display-tab-content');
  }
}

let buttonTabs = document.querySelectorAll('.tab');
buttonTabs = Array.from(buttonTabs).map(tab => {
  return new Tabs(tab);
})