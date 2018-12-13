// ====================== SERVICES TAB NAVIGATOR
// CLASS CONSTRUCTOR

class TabButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services-content-container[data-tab='${this.data}']`);
    this.tabContent = new TabContent(this.itemElement);
    this.element.addEventListener('click', () => this.select());

  }
  select() {
    const links = document.querySelectorAll('.tab-button');
    links.forEach(param => param.classList.remove('button-selected'));
    this.element.classList.add('button-selected');
    this.tabContent.selectContent();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }

  selectContent() {
    const content = document.querySelectorAll('.services-content-container');
    content.forEach(param => param.classList.remove('content-selected'));
    this.element.classList.add('content-selected');
  }
}

const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(tab => new TabButton(tab));