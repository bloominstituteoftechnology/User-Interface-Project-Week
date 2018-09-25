class Tablinks{
    constructor(item){
        this.element = item;
        this.data = this.element.dataset.tab;
        this.tabContent = document.querySelector(`.tabs-content[data-tab="${this.data}"]`);
        console.log(this.tabContent);
        this.tabContent = new TabContent(this.tabContent);
        this.element.addEventListener('click', () => {
            this.select();
        })
    }
    select() {
        this.tabContent.select();
    }
}

class TabContent {
    constructor(item){
        this.element = item;
    }
    select() {
        const content = document.querySelectorAll('.tabs-content');
        content.forEach( (item) => {
            item.style.display = "none";  
        })
        this.element.style.display = "flex";
    }
}




let tablinks = document.querySelectorAll('.button');
tablinks = Array.from(tablinks).map( (item) => new Tablinks(item));