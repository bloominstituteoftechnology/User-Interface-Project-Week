// JS goes here
class TabButton{
    constructor(element){
        this.element = element;
        // console.log(this.element)
        this.data = this.element.innerHTML;
        // console.log(this.data);
        this.card = document.querySelector(`#${this.data}-tab`);
        // console.log(this.card)
        this.element.addEventListener('click', this.tabClick.bind(this));
    }
    tabClick(){
        const allTabs = document.querySelectorAll('.tab');
        allTabs.forEach(function(element){
            element.classList.remove('active-tab')
        });
        this.element.classList.add('active-tab');

        const allTabBlocks = document.querySelectorAll('.tab-block');
        allTabBlocks.forEach(function(element){
            element.style.display = 'none'
        });
        this.card.style.display = 'flex';
    }
};

let tabList = document.querySelectorAll('.tab');

tabList = Array.from(tabList).map(function(element){
    return new TabButton(element)
});