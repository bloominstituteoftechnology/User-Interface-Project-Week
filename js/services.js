class Tablinks{
    constructor(item,index){
        this.element = item;
        this.index = index;
        this.data = this.element.dataset.tab;
        this.tabContent = document.querySelector(`.tabs-content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.tabContent,this.index);
        this.element.addEventListener('click', () => {
            this.select();
        })
    }
    select() {
        const links = document.querySelectorAll('.button');
        links.forEach((item) => {
            item.classList.remove('selected-button');
        })
        this.element.classList.add('selected-button');
        this.tabContent.select();
    }
}

class TabContent {
    constructor(item,index){
        this.index = index;
        this.element = item;
    }
    select() {
        const content = document.querySelectorAll('.tabs-content');
        content.forEach( (item) => {
            item.style.display = "none";  
        })
        this.element.classList.toggle('tabs-content-toggle');
        this.element.style.display = "";
    }
}




let tablinks = document.querySelectorAll('.button');
tablinks = Array.from(tablinks).map( (item,index) => new Tablinks(item,index));