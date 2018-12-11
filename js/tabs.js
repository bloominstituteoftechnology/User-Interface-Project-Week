class TabLink {
    constructor(link) {
        this.link = link;  
        this.data = this.link.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.link.addEventListener('click', () => this.select());  
    };
  
    select() {
        const tabContents = document.querySelectorAll('.tab-content').forEach( content => content.classList.remove('tab-content-selected'));
        this.content.classList.add('tab-content-selected');

        const links = document.querySelectorAll('.tab-link').forEach( link => link.classList.remove('tab-link-selected'));
        this.link.classList.add('tab-link-selected');
    }
}
  
const links = document.querySelectorAll('.tab-link').forEach(link => new TabLink(link));