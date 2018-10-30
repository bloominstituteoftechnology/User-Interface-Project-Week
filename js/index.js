// JS goes here

// toggling nav classes
const toggleNav= () => {
    navigation.classList.toggle ('navigation-active');
    dropdown.classList.toggle ('nav-active');
}

let navigation = document.querySelector('.navigation');
let dropdown = document.querySelector('.nav-dropdown');
let ham = document.querySelector('.nav-ham');
let close = document.querySelector('.nav-close')
ham.addEventListener('click',toggleNav);
close.addEventListener('click', toggleNav);

// services tabs
class TabLink{
    constructor(element){
        this.element = element;

        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        this.itemElement = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => { this.select() })
    }
    select() {
        const btns = document.querySelectorAll('.btns');
        Array.from(btns).forEach(item => item.classList.remove('btn-selected'));
        this.element.classList.add('btn-selected');
        this.itemElement.select();
    }

}
class TabItem{
    constructor(element){
        this.element = element;
    }
    select(){
        this.tabsItem = document.querySelectorAll('.tabs-item');
        this.tabsItem.forEach(item => item.classList.remove('tabs-selected'));
        this.element.classList.add('tabs-selected');
    }
}

let tabs = document.querySelectorAll('.btns')
tabs =Array.from (tabs).map (item => new TabLink (item));
tabs[1].select()