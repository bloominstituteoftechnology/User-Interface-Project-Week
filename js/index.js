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

        tab = Array.from(tab).forEach( item => {
            item.classList.remove('tab-selected')
        });
    
        this.element.classList.add('tab-selected')
        
        this.tabContent.selectContent();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }
    selectContent() {
        let tabGrabber = document.querySelectorAll('.tab-content')
        tabGrabber = Array.from(tabGrabber).forEach( item => {
            TweenMax.fromTo('.tab-content-selected', 1, {opacity: 1}, {opacity:0})
            item.classList.remove('tab-content-selected')
        
        });
        this.element.classList.add('tab-content-selected');
        TweenMax.fromTo('.tab-content-selected', 1, {opacity: 0}, {opacity:1})
    }
}








let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tabs => new TabLink(tabs));

tabs[0].select();


