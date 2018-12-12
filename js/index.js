// JS goes here

//---------- Tab Navigator Functionality Here --------------//
class TabLink{
    constructor(element){
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
      this.itemElement = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.select()});
    };
    select() {
      const links = document.querySelectorAll('.tabs-link');
      Array.from(links).forEach(links => links.classList.remove('tabs-link-selected'));
      this.element.classList.add('tabs-link-selected');   
      this.itemElement.select();
    }
}
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach(items => items.classList.remove("tabs-item-selected"));
      this.element.classList.add("tabs-item-selected");
    }
  }
links = document.querySelectorAll('.tabs-link').forEach( element => new TabLink(element));