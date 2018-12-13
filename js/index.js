// JS goes here
class ToggleMenu {
    constructor(elem) {
        this.elem = elem;

        // reference for drop down button
        this.button = document.querySelector('.dropdownButton');

        // reference for drop down content
        this.content = document.querySelector('.dropdownContent');

        // reference menu anchor tags
        this.home = document.querySelector('.home');
        this.services = document.querySelector('.services');
        this.contact = document.querySelector('.contact');

        //event listener
        this.button.addEventListener('click', () => this.toggleContent());
    }
    toggleContent() {
        this.content.classList.toggle('dropdownHidden');
        if (!this.content.classList.contains('dropdownHidden')) {
            this.button.src = "../img/nav-hamburger-close.png";
            TweenLite.from(this.content, 1, { ease: Power1.easeIn, opacity: 0 });
            TweenLite.from(this.button, 1, { ease: Back.easeOut.config(1.7), rotation: 360, opacity: 0 });
            TweenLite.from(this.home, 1, { x: -2000, ease: Back.easeOut.config(1.7) })
            TweenLite.from(this.services, 1, { x: -2000, ease: Back.easeOut.config(1.7), delay: .5 })
            TweenLite.from(this.contact, 1, { x: -2000, ease: Back.easeOut.config(1.7), delay: 1 })

        } else {
            this.button.src = "../img/nav-hamburger.png";
            TweenLite.to(this.content, 1);
            TweenLite.from(this.button, 1, { ease: Back.easeOut.config(1.9), rotation: -360, opacity: 0 });
        }
    }
}

// reference to drop down content element
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new ToggleMenu(dropdown));

// ---------------------------------------------------------------------------
// Tab Section For Services Page
class TabLink {
    constructor(elem) {
        // Individual Tabs
        this.elem = elem;

        // Data Attribute
        this.data = this.elem.dataset.tab;

        // Item Selector
        this.itemElem = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);

        // create new instance of TabItem class constructor
        this.itemElem = new TabItem(this.itemElem);

        // event linstener
        this.elem.addEventListener('click', () => this.select())
    }

    select() {
        // reference tabs-links class
        const links = document.querySelectorAll('.tabs-link');

        // removed tabs-link-selected class 
        links.forEach(link => link.classList.remove('tabs-link-selected'));

        // add tabs-link-selected class to selected link
        this.elem.classList.add('tabs-link-selected');

        // call select method from TabItem class construtor
        this.itemElem.selected();
    }
}

class TabItem {
    constructor(itemElem) {
        this.itemElem = itemElem;
    }

    selected() {
        //reference tab items
        const items = document.querySelectorAll('.tabs-item');

        // remove tabs-item-selected class
        items.forEach(item => item.classList.remove('tabs-item-selected'));

        // add tabs-item-selected class to selected tab
        this.itemElem.classList.add('tabs-item-selected');

    }
}


const links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));

// ease in animation for page on load
const body = document.querySelector('body')
TweenLite.from(body, 1.5, { ease: Power1.easeIn, opacity: 0 });

// ease in content on load
const hidden = document.querySelector('.dropdownHidden');
hidden.addEventListener('click', () => {
    TweenLite.to(hidden, 1, { ease: Power1.easeIn, opacity: 0 })
})

// scroll event 
window.addEventListener('scroll', () => {
    const sliderImgs = document.querySelectorAll('.project-content img')
    sliderImgs.forEach(sliderImg => {
        const slideNum = (window.scrollY + window.innerHeight) - sliderImg.height / 2;
        const imgBottom = sliderImg.offsetTop + sliderImg.height;
        const isHalfshow = slideNum > sliderImg.offsetTop;
        const notScrolledPast = window.scrollY < imgBottom;
        if (isHalfshow && notScrolledPast) {
            sliderImg.classList.add('slide');
        } else {
            sliderImg.classList.remove('slider');
        }

    })



})