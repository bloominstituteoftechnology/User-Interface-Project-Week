class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        
        this.element.addEventListener('click', (event) => {this.select(); event.preventDefault();});
    };

    select() {
        const tabLinks = document.querySelectorAll('.tab-link');
        Array.from(tabLinks).forEach(item => item.classList.remove('tab-link-selected'));

        this.element.classList.add('tab-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        let items = document.querySelectorAll('.tab-item');
        items.forEach(item => item.classList.remove('tab-item-selected'));
        items.forEach(item => {TweenMax.to(item, .7, {autoAlpha: 0, y:100})})

        this.element.classList.add('tab-item-selected');
        TweenMax.to(this.element, .7, {autoAlpha: 1, y: 0});
    }
}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link => {return new TabLink(link);});
links[0].select();


// Navigation JS -----------------------------------------
let dropdown = document.querySelector(".dropdown-button");
let content = document.querySelector(".dropdown-content");
let header = document.querySelector("header");
content.style.opacity = '0';
content.style.visibility = 'hidden';

dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "./img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "./img/nav-hamburger.png";
        TweenMax.to(content, 0.5, {autoAlpha:0, y:0});
        header.style.opacity = "1";

    }
    else {
        TweenMax.to(content, 0.5, {autoAlpha:0.98, y:0});
        header.style.opacity = "0.98";
    }
});