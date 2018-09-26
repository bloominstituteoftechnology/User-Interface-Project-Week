// JS goes here
let hamburger = document.querySelector('.navigation img');
// console.log(hamburger);
let navigation = document.querySelector('.navigation');
// console.log(navigation);
let nav = document.querySelector('.navigation nav');
// console.log(nav);

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('navigation-click');
    hamburger.src.includes('img/nav-hamburger.png') ?
        (hamburger.src = 'img/nav-hamburger-close.png') :
        hamburger.src = 'img/nav-hamburger.png';
})

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.item = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.item);
        this.element.addEventListener('click', ()=> {
            this.select();
        })
    }
    select() {
        const links = document.querySelectorAll('.tabs-links');
        // console.log(links);
        Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tab-item');
        console.log(items);
        items.forEach(item => item.classList.remove('tabs-item-selected'))
        this.element.classList.add('tabs-item-selected');
    }
}

let links = document.querySelectorAll('.tabs-links');
// console.log(links);
links = Array.from(links).map(link => new TabLink(link));
links[0].select()