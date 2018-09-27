// JS goes here
class Tabnav {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        this.tabItem = document.querySelector(`.tabItem[data-tab='${this.data}']`);
        

        console.log(this.tabItem);
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    // select() {
    //     const tabsItem = document.querySelectorAll()
    // }
}



let tabs = document.querySelectorAll(".tab");

Array.from(tabs).map(tab => new Tabnav(tab));

// nav expanded javascript
const hamburger = document.querySelector('.burgerMenu img');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(event) {
    let close = 'close';
    if (hamburger.src.includes(close)) {
        hamburger.src = './img/nav-hamburger.png';
    } else {
        hamburger.src = './img/nav-hamburger-close.png';
    }
    menu.classList.toggle('expand');
})


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
