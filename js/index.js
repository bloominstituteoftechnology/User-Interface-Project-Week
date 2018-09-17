// JS goes here
// functionality for dropdown navigation
const toggleDrop = () => {
    if (dd.classList.contains('dropdown--open')) {
        TweenMax.to(dd, .5, {top: -700, opacity: 0, onComplete: () => {dd.classList.remove('dropdown--open')}});
        ddButton.src = 'img/nav-hamburger.png';
        console.log(dd);
    } else {
        TweenMax.to(dd, .5, {top: 0, opacity: .9, onComplete: dd.classList.add('dropdown--open')});
        ddButton.src = 'img/nav-hamburger-close.png';
        console.log(dd);
    }
}

const dd = document.querySelector('.dropdown');

const ddButton = document.querySelector('.hamburger');

ddButton.addEventListener('click', function(event) {
    return toggleDrop();    
}); 

// end dropdown navigation

// Tabs functionality

class TabLink {
    constructor(el) {
        this.el = el;
        console.log(`this.el is`, this.el);
        this.data = this.el.dataset.tab;
        console.log(`The data for this.data is ${this.data}`);
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
        console.log(`The itemElement is ${this.itemElement}`);
        this.tabItem = new TabItem(this.itemElement);
        console.log(`The tabItem for this.data is ${this.tabItem}`);
        this.el.addEventListener('click', ()=>{this.select()})
    };

    select() {
        const links = document.querySelectorAll('.tab');

        Array.from(links).forEach(function(item){
            item.classList.remove('tabs-link-selected');
        });
        this.el.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(el) {
        this.el = el;
        console.log(`This TabItem is`, this.el);
    }

    select() {
        let items = document.querySelectorAll('.tabs-item');
        
        Array.from(items).forEach(function(item) {
            item.classList.remove('tabs-item-selected');
        })
        console.l
        this.el.classList.add('tabs-item-selected');
    }
}

let links = document.querySelectorAll('.tab');

links = Array.from(links).map( links => new TabLink(links));

links[0].select();