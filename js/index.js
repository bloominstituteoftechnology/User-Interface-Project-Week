// JS goes here

//Navbar
let image_tracker = 'f';
function change() {
    var image = document.querySelector('.burger');
    var nav = document.querySelector('nav');
    var menu = document.querySelector('.menu');
    if (image_tracker == 'f') {
        image.src = 'img/nav-hamburger-close.png';
        image_tracker = 't';
        TweenMax.to('nav', 1, {height: '100%'});
        TweenMax.staggerFrom('.menu a', 1, {opacity:0}, .1);
        nav.style.opacity = '0.9';
        menu.style.display = 'block';

        
    }
    else {
        image.src = 'img/nav-hamburger.png';
        image_tracker = 'f';
        TweenMax.to('nav', 0.5, {height: 35});
        menu.style.display = 'none';
    }
}

class TabLink {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => this.select());
    };

    select() {
        const links = document.querySelectorAll('.tabs-link');
        Array.from(links).forEach(element => element.classList.remove('tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        let tabsItems = document.querySelectorAll('.tabs-item');
        Array.from(tabsItems).forEach(element => element.classList.remove('tabs-item-selected'));
        this.element.classList.add('tabs-item-selected');
    }
}



let links = document.querySelectorAll('.tabs-link');

links = Array.from(links).map(link => new TabLink(link));

links[0].select();