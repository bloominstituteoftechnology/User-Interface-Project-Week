class tabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.tabContent = document.querySelector(`.tab-content[data-tab="${this.data}"]`);

    this.element.addEventListener('click', () => this.toggleContent());
    
    
  }
  toggleContent() {
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => content.classList.remove('selected-tab'));
    console.log(tabContent);
    this.tabContent.classList.toggle('selected-tab');
  }
}

const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => new tabLink(link));