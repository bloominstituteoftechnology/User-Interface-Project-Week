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

let tabLinks = document.querySelectorAll('.tab-link');

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
        this.title = this.element.querySelector('h2');
        
        this.content = this.element.querySelectorAll('img');
        this.content = Array.from(this.content).map(n => new CarouselChild(n));

        this.hideAll();
        this.content[0].show();
        this.imageIndex = 0;

        this.leftButton.addEventListener('click', e => this.shiftLeft(e));
        this.rightButton.addEventListener('click', e => this.shiftRight(e));

    }

    shiftLeft() {
        const preIndex = this.imageIndex;
        this.imageIndex -= 1;
        if (this.imageIndex < 0) { this.imageIndex = this.content.length - 1};
        
        this.animateTitle();
        this.animate(preIndex, this.imageIndex, 'left');
    }

    shiftRight() {
        const preIndex = this.imageIndex;
        this.imageIndex += 1;
        if (this.imageIndex >= this.content.length) { this.imageIndex = 0 }

        this.animateTitle();
        this.animate(preIndex, this.imageIndex, 'right');
    }

    animateTitle() {
        this.title.style.transition = 'all 300ms ease-in-out';
        this.title.style.transitionDelay = '0ms'
        this.title.style.opacity = '1';

        setTimeout(() => {
            this.title.style.opacity = '0';
        }, 0);
        setTimeout(() => {
            this.title.innerText = this.content[this.imageIndex].data;
            this.title.style.opacity = '1';
        }, 300);
    }

    animate(preIndex, index, direction) {
        const preImg = this.content[preIndex];
        const img = this.content[index];
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

        preImg.e.style.transition = transition;
        preImg.e.style.transform = from;
        
        img.e.style.transform = to;
        img.e.style.transition = transition;
        img.e.style.display = null;

        setTimeout(() => {
            img.e.style.transform = 'translateX(0%)';
            img.e.style.zIndex = -1;
        },0)

        setTimeout(() => {
            this.hideAll();
            img.show();
        }, 600);
    }

    hideAll() {
        this.content.forEach(n => n.hide());
    }
}

class CarouselChild {
    constructor(element) {
        this.e = element;
        this.data = this.e.dataset.project;
        this.content = document.querySelector(`.project-info > .info[data-project='${this.data}']`);
    }

    hide() {
        this.e.style.display = 'none';
        this.e.style.transform = 'translateX(0%)';
        this.e.style.zIndex = -1;
        this.e.style.transition = 'none';

        this.content.style.display = 'none'
    }

    show(){
        this.e.style.display = 'flex';
        this.content.style.display = 'flex'
    }

}



let carousel = document.querySelector('.carousel');

if (carousel) carousel = new Carousel(carousel);
