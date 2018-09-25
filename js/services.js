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

  select() {
    
    // unselect all tabs
    const tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(t => t.classList.remove('selected'));

    // hide all tab content
    const content = document.querySelectorAll('.tab-content');
    content.forEach(c => c.style.display = 'none');

    // select this tab
    this.element.classList.add('selected');

    // call select function on this.tabContent
    this.tabContent.select();

  }
}

class Tabcontent {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.style.display = 'block';
  }
}

let tabs = document.querySelectorAll('.tab-link');
tabs = Array.from(tabs).map(t => new Tablink(t));