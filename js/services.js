class Tablink {
  constructor(element) {
    this.element = element;
    this.tabData = this.element.dataset.tab;

    // get related tab content
    this.tabContent = document.querySelector(`.tab-content[data-tab='${this.tabData}']`);

    // create new Tabcontent instance
    this.tabContent = new Tabcontent(this.tabContent);

    // click event to activate tab
    this.element.addEventListener('click', event => this.select(event));
  }

  select(event) {
    
    // unselect all tabs

    // select this tab

    // call select function on this.tabContent

  }
}

class Tabcontent {
  constructor(element) {
    this.element = element;
  }
}

let tabs = document.querySelectorAll('tab-link');
tabs = Array.from(tabs).map(t => new Tablink(t));