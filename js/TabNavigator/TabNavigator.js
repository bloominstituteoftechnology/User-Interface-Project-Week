class tabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.tabContent = document.querySelector(`.tab-content[data-tab="${this.data}"]`);

    this.element.addEventListener('click', () => this.toggleContent());
    
    
  }
  toggleContent() {
    const tabContentItems = document.querySelectorAll('.tab-content');
    tabContentItems.forEach(content => content.classList.remove('selected-tab'));
    
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('selected-link'));

    this.tabContent.classList.toggle('selected-tab');
    this.element.classList.toggle('selected-link');
  }
}

const tabLinks = document.querySelectorAll('.tab-link');
tabLinks.forEach(link => new tabLink(link));