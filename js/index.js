// JS goes here
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabItem[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => {
            this.select();
        })
    }

    select() {
        let links = document.querySelectorAll('.tabs-link');
        links.forEach((link) => {
            link.classList.remove('link-selected');
        });
        this.element.classList.add('link-selected');
        this.tabItem.select(this.itemElement);
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        let items = document.querySelectorAll('.tabItem');
        items.forEach((item) => {
            item.classList.remove('item-selected');
        });
        this.element.classList.add('item-selected');
    }
}

let tabs = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));

// --------------------------- MENU -----------------------------------------

let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {

    if (navigation.classList.toggle('hidden')) {
        hamburger.src = "./img/nav-hamburger.png"
    } else {
        hamburger.src = "./img/nav-hamburger-close.png"
    }
})


// -------------------------- CAROUSEL ---------------------------------------

class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.currentIndex = this.images[0];

        this.leftButton.addEventListener('click', () => {
            this.left();
        })

        this.rightButton.addEventListener('click', () => {
            this.right();
        })

        this.currentIndex.style.display = 'block';
        this.index = 0;
        setInterval(() => this.right(), 4000);
    }

    left() {
        this.images.forEach(image => image.style.display = 'none');
        if (this.index > 0) {
            this.images[this.index].style.display = 'block';
            this.index -= 1;
        } else {
            this.images[this.images.length - 1].style.display = 'block';
            this.index = this.images.length - 1;
        }
    }

    right() {
        this.images.forEach(image => image.style.display = 'none');
        if (this.index < this.images.length) {
            this.images[this.index].style.display = 'block';
            this.index += 1;
        } else {
            this.images[0].style.display = 'block';
            this.index = 0;
        }
    }
}
let carousel = document.querySelector('.carousel');
new Carousel(carousel);