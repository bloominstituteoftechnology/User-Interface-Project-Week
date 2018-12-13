class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"`);
        this.overlayText = this.content.querySelector('.overlay');
        this.element.addEventListener('click', () => this.select());
    }
    select(){
        const links = document.querySelectorAll('.tab-link');
        links.forEach(el => el.classList.remove('tab-link-selected'));
        this.element.classList.add('tab-link-selected');

        const allContent = document.querySelectorAll('.tab-content');
        allContent.forEach(el => el.classList.add('display-none'));
        this.content.classList.remove('display-none');
        TweenMax.fromTo(this.content, 1.5, {
            opacity: 0
        }, {
            opacity: 1
        })
    }
}

const navigation = document.querySelector('.nav-open');
const navButton = document.querySelector('.nav-button');
const bigX = document.querySelector('.big-x');
const navBar = document.querySelector('nav')

navButton.addEventListener('click', function(){
    // navigation.classList.toggle('display-hidden');
    navButton.classList.toggle('display-hidden');
    bigX.classList.toggle('display-hidden');
    TweenMax.fromTo(navigation, 0.75, {
        y: -1000,
        display: 'none',
    }, {
        y: 0,
        display: 'flex'
    })
});

bigX.addEventListener('click', function(){
    TweenMax.fromTo(navigation, 0.75, {
        y: 0,
        display: 'flex',
    }, {
        display: 'none',
        y: -1000,
    })
    // navigation.classList.toggle('display-hidden');
    navButton.classList.toggle('display-hidden');
    bigX.classList.toggle('display-hidden');
});

tabLink = document.querySelectorAll('.tab-link');
tabLink.forEach(x => new TabLink(x));