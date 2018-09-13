class Dropdown {
  constructor(element) {
    this.element = element;

    this.buttonOpen = this.element.querySelector(".hamburger");
    this.buttonClose = this.element.querySelector(".close");

    this.content = this.element.querySelector(".nav-links");

    this.buttonOpen.addEventListener("click", () => {this.openContent();});
    this.buttonClose.addEventListener("click", () => {this.closeContent();});
  }

  openContent() {
    this.buttonOpen.style.display = "none";
    this.buttonClose.style.display = "block";
    this.content.classList.add("nav-showing");
  }

  closeContent() {
    this.buttonOpen.style.display = "block";
    this.buttonClose.style.display = "none";
    this.content.classList.remove("nav-showing");
  }
}

class Tabs {
  constructor(element) {
    this.element = element;
    let links = document.querySelectorAll('.tabs-link');
    this.links = Array.from(links).map((link) => {return new TabLink(link)});
    this.selectedLink = this.links[0].element;
    this.selectedLink.classList.add('tabs-link-shown');
    this.selectedItem = this.links[0].tabItem.element;
    this.selectedItem.classList.add('tabs-item-shown');
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);    
    this.tabItem = new TabItem(this.itemElement);    
    this.element.addEventListener('click', () => this.select());
  };

  select() {
    this.deselect(tab.selectedLink);
    this.tabItem.deselect(tab.selectedItem);
    tab.selectedLink = this.element;
    tab.selectedItem = this.tabItem.element;
    this.element.classList.add('tabs-link-shown');
    this.tabItem.select();
  }

  deselect(link) {
    link.classList.remove('tabs-link-shown');
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-shown');
  }

  deselect(item) {
    item.classList.remove('tabs-item-shown');
  }
}

let navDropdown = document.querySelector(".navbar");
navDropDown = new Dropdown(navDropdown);

const tab = new Tabs(document.querySelector('.tabs-links'));