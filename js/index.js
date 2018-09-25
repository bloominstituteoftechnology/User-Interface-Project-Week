// JS goes here


//dropdown menu
class Dropdown {
  constructor(element){
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => {
      this.toggleContent() })
    

  }
  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));




//tabs
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    this.tabItem = new TabItem(this.item);
    this.element.addEventListener('click', () => {
      this.selected();
    });
  };
  selected() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach( link => {
      link.classList.remove('tabs-link-selected');
    });
    this.element.classList.add('tabs-link-selected');
    this.tabItem.selected();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  selected() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach( item => {
      item.classList.remove('selected');

    })
    this.element.classList.add('selected');
  }
}
let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));

links[0].selected()