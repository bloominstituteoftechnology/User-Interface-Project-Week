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
            n.style.display = 'none';
        });
        this.link.classList.add('active-link')
        this.content.style.display = null;
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
console.log('pageSections', pageSections);

pageSections = Array.from(pageSections).map(n => new PageSection(n));



