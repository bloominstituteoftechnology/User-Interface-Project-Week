class TabCompotent {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;
        this.linkedTitle = document.querySelector(`.service-title[data-tab='${this.data}']`)
        this.titleItem = new TitleItems(this.linkedTitle)
        this.element.addEventListener('click', () => this.select())
    }
    select() {
        console.log('hi');
        let buttons = document.querySelectorAll('.services .btn');
        buttons.forEach(element => {element.classList.remove('btn-active')});
        this.element.classList.toggle('btn-active')
        this.titleItem.select();        
    }
}

class TitleItems{
    constructor(element) {
        this.element = element;        
    }
    select() {
        let titleItems = document.querySelectorAll('.service-title')
        titleItems.forEach(element => element.style.display = "none")
        this.element.style.display = 'block';
    }
}

let buttons = Array.from(document.querySelectorAll(".services .btn")).map(element => new TabCompotent(element));
// console.log(document.querySelector('.service-title').style.display = 'block');
(document.querySelector('.service-title').style.display = 'block');
(document.querySelector(".services .btn").classList.add('btn-active'));
