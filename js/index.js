//Nav Toggle

const navButtonOn = document.querySelector('.nav-toggle-on');
const navButtonOff = document.querySelector('.nav-toggle-off')
const navMenu = document.querySelector('.nav-menu');

navButtonOn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-toggle', true);
    TweenMax.to('.nav-menu', .5, {
        top: '0vw'
    })
})

navButtonOff.addEventListener('click', () => {
    TweenMax.to('.nav-menu', .2, {
        top: '-100vw'
    })
    setTimeout(() => {
        navMenu.classList.toggle('nav-toggle', false)
    }, 210)

})

//tabs toggle

class TabLink {
    constructor(tablink) {
        this.link = tablink;
        this.data = this.link.dataset.tab;
        this.tabContent = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        this.tabContent = new TabItem(this.tabContent);
        this.link.addEventListener('click', () => this.select());
    }
    select() {
        const links = document.querySelectorAll('.tablink');
        links.forEach(cv => {
            cv.classList.toggle('tab-link-active', false)
        });
        this.link.classList.toggle('tab-link-active', true);
        this.tabContent.select();
    }
}

class TabItem {
    constructor(element) {
        this.tabItem = element;
    }
    select() {
        const tabItems = document.querySelectorAll('.tab-item');
        tabItems.forEach(cv => {
            cv.style.display = 'none'
        });
        this.tabItem.style.removeProperty('display');
    }
}

const tabLinks = document.querySelectorAll('.tablink').forEach(link => new TabLink(link));

//Carousel Projects

class Carousel {
    constructor(carousel) {
        this.element = carousel;
        this.currentIndex = 1;
        this.imageAmount = this.element.querySelectorAll('.slider').length;
        this.leftBTN = this.element.querySelector('.left-button');
        this.rightBTN = this.element.querySelector('.right-button');
        this.leftBTN.addEventListener('click', () => this.left())
        this.rightBTN.addEventListener('click', () => this.right())
    }
    right() {
        this.currentIndex += 1;
        if (this.currentIndex >= this.imageAmount + 1) {
            this.currentIndex = 1
        }
        this.element.querySelectorAll('.slider').forEach((cv) => {
            cv.classList.toggle('active-slider', false)
        })
        this.element.querySelector(`.slider[data-position='${this.currentIndex}']`).classList.toggle('active-slider', true)
    }
    left() {
        this.currentIndex -= 1;
        if (this.currentIndex <= 0) {
            this.currentIndex = this.imageAmount;
        }
        this.element.querySelectorAll('.slider').forEach((cv) => {
            cv.classList.toggle('active-slider', false)
        })
        this.element.querySelector(`.slider[data-position='${this.currentIndex}']`).classList.toggle('active-slider', true)
    }
}

let carousel = document.querySelector('.carousel');

new Carousel(carousel)