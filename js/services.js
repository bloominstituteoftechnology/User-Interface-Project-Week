class TabLink {
    constructor(tab){
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        this.textItem = document.querySelector(`.content[data-tab='${this.data}']`);
        console.log(this.textItem);

        this.tabContent = new TabContent(this.textItem);

        this.tab.addEventListener("click", event => {
            this.select();
        })
    }
    select() {

    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }
    select() {
        
    }
}







let tabs = document.querySelectorAll('.services-tab');

Array.from(tabs).map(tab => new TabLink(tab));
