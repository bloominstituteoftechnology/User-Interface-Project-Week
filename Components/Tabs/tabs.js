class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabContent = new TabContent(this.contentElement);

        this.element.addEventListener('click', () => {this.select()});
    }
    select() {
        let tab = document.querySelectorAll('.tab')

        let tab = Array.from(tab).map.forEach( item => {
            item.classList.remove('tab-selected')
        });
    
        this.element.classList.add('tabs-selected')
        this.tabContent.select();
    }
}







let tabs = document.querySelectorAll('.tab')

Array.from(tabs).map(tabs => new TabLink(tabs));