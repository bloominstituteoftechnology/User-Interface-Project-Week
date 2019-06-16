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
    content.forEach(c => c.classList.remove('tab-content-showing'));

    // select this tab
    this.element.classList.add('selected');

    // check children for h2

    // // // create h1 from inner text
    // const header = document.createElement('h2');
    // header.innerText = this.element.innerText;

    // call select function on this.tabContent
    this.tabContent.select();
  }
}

class Tabcontent {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tab-content-showing');
  }
}

let tabs = document.querySelectorAll('.tab-link');
tabs = Array.from(tabs).map(t => new Tablink(t));

tabs[0].select();
