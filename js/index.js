// JS goes here

//Expanded Nav
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

menu.addEventListener('click', () => {
    nav.classList.add('full-menu');
});

menu.addEventListener('click', () => {
    menu.src = "img/nav-hamburger-close.png";
});

const close = document.querySelector('.close')

close.addEventListener('click', () => {
    nav.classList.remove('full-menu');
    menu.src = "img/nav-hamburger.png"
});

//Tab Component
class TabLink {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

     
        this.tabItem = new TabItem(this.itemElement);

        
        this.element.addEventListener('click', (event) => { 
            event.preventDefault();
            this.select(); 
            
        });
    }


    select() {
        let links = document.querySelectorAll('.tabs-link');

        links = Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

        this.element.classList.add('tabs-link-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
      
        let items = document.querySelectorAll('.tabs-item');
        
        items = Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
        
        this.element.classList.add('tabs-item-selected');
    }
}


let links = document.querySelectorAll('.tabs-link');


links = Array.from(links).map(linkItem => new TabLink(linkItem));


//GSAP Animations

// TweenMax.to(".header-text", 2, {left:100});