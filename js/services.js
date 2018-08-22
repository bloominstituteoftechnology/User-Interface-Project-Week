
class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item')
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');

links = Array.from(links).map(link => new TabLink(link));

links[0].select();

