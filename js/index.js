// JS goes here

class TabLink {
    constructor(link){
        this.link = link;
        this.data = this.link.dataset.tab;
        this.content = document.querySelector(`.tab[data-tab='${this.data}']`)

        this.link.addEventListener('click', e => this.tabClicked(e));
    }

    tabClicked(e) {
        document.querySelectorAll('.tab-link').forEach(n => {
            n.classList.remove('active-link');
        });
        document.querySelectorAll('.tab').forEach(n => {
            n.style.transition = 'opacity 0.5s ease-in-out'
            n.style.opacity = '0';
        });
        this.link.classList.add('active-link')
        this.content.style.display = 'flex';
        
        setTimeout(() => {
            this.content.style.opacity = '1';
            this.content.style.transitionDelay = '0.5s';
        },0)
    }
}

let tabLinks = document.querySelectorAll('.tab-links > .tab-link');

if (tabLinks.length > 0){
    tabLinks = Array.from(tabLinks).map(n => new TabLink(n));
    tabLinks[0].tabClicked();
};

let navButton = document.querySelector('.hamburger');
let navBar = document.querySelector('.navigation');

navButton.addEventListener('click', e => {
    navBar.style.transition = "all 300ms ease-in-out"
    navBar.classList.toggle('show-nav');
    navButton.classList.toggle('fa-times');
})

class PageSection {
    constructor(element) {
        this.e = element;
        this.x = this.e.offsetTop;
        this.e.style.opacity = '0';
        this.e.style.transition = 'all 800ms ease-in-out';

        if(window.innerHeight > this.x) this.e.style.opacity = 1;
        window.addEventListener('scroll', e => this.show(e));
    }

    show(e){
        const scrollY = window.scrollY;
        const height = window.innerHeight;
        const total = height + scrollY;

        if (total > this.x + 200) {
            this.e.style.opacity = '1';
        }
    }

}

let pageSections = document.querySelectorAll('.cta > *, .projects > *');
// console.log('pageSections', pageSections);

pageSections = Array.from(pageSections).map(n => new PageSection(n));



class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');

        this.hideAll();
        this.images[0].style.display = null;
        this.imageIndex = 0;

        this.leftButton.addEventListener('click', e => this.shiftLeft(e));
        this.rightButton.addEventListener('click', e => this.shiftRight(e));

    }

    shiftLeft() {
        const preIndex = this.imageIndex;
        this.imageIndex -= 1;
        if (this.imageIndex < 0) { this.imageIndex = this.images.length - 1}

        this.animate(preIndex, this.imageIndex, 'left');
    }

    shiftRight() {
        const preIndex = this.imageIndex;
        this.imageIndex += 1;
        if (this.imageIndex >= this.images.length) { this.imageIndex = 0 }

        this.animate(preIndex, this.imageIndex, 'right');
    }

    animate(preIndex, index, direction) {
        const preImg = this.images[preIndex];
        const img = this.images[index];
        const transition = 'all 600ms ease-in-out';
        let from = '';
        let to = ''

        if (direction === 'left') {
            from = 'translateX(100%)';
            to = 'translateX(-100%)'
        } else if (direction === 'right') {
            from = 'translateX(-100%)';
            to = 'translateX(100%)'
        }

        preImg.style.transition = transition;
        preImg.style.transform = from;
        
        img.style.transform = to;
        img.style.transition = transition;
        img.style.display = null;

        setTimeout(() => {
            img.style.transform = 'translateX(0%)';
            img.style.zIndex = -1;
        },0)

        setTimeout(() => {
            this.hideAll();
            img.style.display = null;
        }, 600);
    }

    hideAll() {
        this.images.forEach(n => {
            n.style.display = 'none';
            n.style.transform = 'translateX(0%)';
            n.style.zIndex = -1;
            n.style.transition = 'none';
        });
    }

}

let carousel = document.querySelector('.carousel');

if (carousel) carousel = new Carousel(carousel);
