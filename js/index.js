// Services Page
class TabLinks {
    constructor(link) {
        this.link = link;
        this.data = this.link.dataset.tab;
        this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.tabItem);
        this.link.addEventListener('click', () => { this.select() });

    }
    select() {
        const allLinks = document.querySelectorAll('.tabs-link');
        Array.from(allLinks).forEach( item => { item.classList.remove('tabs-link-selected') });
        this.link.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(tabElement) {
        this.tabElement = tabElement;
    }
    select() {
        const allTabItems = document.querySelectorAll('.tabs-item');
        Array.from(allTabItems).forEach( item => { item.classList.remove('tabs-item-selected') });
        this.tabElement.classList.add('tabs-item-selected');
    }
}


let tabLinks = document.querySelectorAll('.tabs-link');

tabLinks = Array.from(tabLinks).map( link => new TabLinks(link) );



// Navigation
let dropdown = document.querySelector('.dropdown');
let menuButton = document.querySelector('.menu-btn')
let menuBtnImages = document.querySelectorAll('.menu-btn img')
menuBtnImages = Array.from(menuBtnImages);
console.log(menuBtnImages);

menuButton.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown-hidden');
    menuBtnImages[0].classList.toggle('button-hidden');
    menuBtnImages[1].classList.toggle('button-hidden');
})