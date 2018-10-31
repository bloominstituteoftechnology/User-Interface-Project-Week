// JS goes here

const ham = document.querySelector('.ham');
const exit = document.querySelector('.exit');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
  nav.classList.toggle('nav-hidden');
  nav.classList.toggle('nav-expanded');
  ham.classList.toggle('ham');
  ham.classList.toggle('exit');
  exit.classList.toggle('ham');
  exit.classList.toggle('exit');
})

exit.addEventListener('click', () => {
  nav.classList.toggle('nav-hidden');
  nav.classList.toggle('nav-expanded');
  ham.classList.toggle('ham');
  ham.classList.toggle('exit');
  exit.classList.toggle('ham');
  exit.classList.toggle('exit');
})

class Tabs {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.tabItem = new Tab(document.querySelector(`.content[data-tab='${this.data}']`));
    this.element.addEventListener('click', () => {this.toggle()});
    console.log(this.data);
  }

  toggle() {
    console.log(this.tabItem.select());
    this.tabSelect();
  }
  tabSelect() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('tab-selected');
    })
    this.element.classList.toggle('tab-selected');
  }
}

class Tab {
  constructor(tab) {
    this.tab = tab; 
    console.log(tab);
  }
  select() {
    document.querySelectorAll('.content').forEach(tab => {
      tab.classList.add('hidden-tab-content');
      tab.classList.remove('display-tab-content');
    })
    this.tab.classList.add('display-tab-content');
    console.log('this was clicked')
  }
}

let buttonTabs = document.querySelectorAll('.tab');
buttonTabs = Array.from(buttonTabs).map(tab => {
  return new Tabs(tab);
})