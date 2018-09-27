// nav expanded javascript
const hamburger = document.querySelector('.burgerMenu img');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function (event) {
    let close = 'close';
    if (hamburger.src.includes(close)) {
        hamburger.src = './img/nav-hamburger.png';
    } else {
        hamburger.src = './img/nav-hamburger-close.png';
    }
    menu.classList.toggle('expand');
})

// JS goes here
class Tabnav {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        this.tabItem = document.querySelector(`.tabItem[data-tab='${this.data}']`);
        
        this.content = new TabItem(this.tabItem);

        this.element.addEventListener('click', () => {
            event.preventDefault();
            this.select();
        });

    }

    select() {
        const tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => tab.classList.remove('selected'))
        this.element.classList.add('selected')
        this.content.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;

    }

    select() {
        const tabItem = document.querySelectorAll('.tabItem');

        Array.from(tabItem).forEach(item => item.classList.remove('active'));
        this.element.classList.add('active')
    }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new Tabnav(tab));
tabs[0].select();

// very hacky way of making the images change based on screen size
const imgOne = document.querySelector('.imgOne');
const imgTwo = document.querySelector('.imgTwo');
const villas = document.querySelector(".villas");
const outskirts = document.querySelector('.outskirts');
const blocks = document.querySelector('.blocks');

const checkImages = function() {
    if (window.screen.availWidth > 500) {
        imgOne.src = "../img/home/home-img-1.png";
        imgTwo.src = "../img/home/home-img-2.png";
        villas.src = "../img/home/home-villas-img.png";
        outskirts.src = "../img/home/home-outskirts-img.png";
        blocks.src = "../img/home/home-the-blocks-img.png";
    } else {
        imgOne.src = "../img/home/home-mobile-img-1.png";
        imgTwo.src = "../img/home/home-mobile-img-2.png";
        villas.src = "../img/home/home-mobile-villas-img.png";
        outskirts.src = "../img/home/home-mobile-outskirts-img.png";
        blocks.src = "../img/home/home-mobile-the-blocks-img.png";
    }
}
window.onresize = checkImages;
