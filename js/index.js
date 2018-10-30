// JS goes here

//Navigation Button
const navButton = document.querySelector('.burger-button');
const menu = document.querySelector('.expanding-menu');
let buttonImgs = navButton.querySelectorAll('img');

navButton.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    buttonImgs[0].classList.toggle('current-btn');
    buttonImgs[1].classList.toggle('current-btn');
});
//End of Nav Button
class Tab {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabContent = new TabContent (this.content);

        this.element.addEventListener('click',()=>this.select());
    };
    select() {
        // remove tab-selected class from all tabs
        let tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => tab.classList.remove('selected-tab'));
        this.element.classList.add('selected-tab');
        this.tabContent.select();
    }
}
class TabContent {
    constructor(banana){
        this.element = banana;
    }
    select () {
        let contentList = document.querySelectorAll('.tab-content');
        Array.from(contentList).forEach(content=>content.classList.remove('selected-content'));
        this.element.classList.add('selected-content');
    }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new Tab(tab));
