// Navigation System
let menu = document.querySelector('.menu');
document.querySelector('.nav-button').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('hidden');
    document.querySelector('.close').classList.toggle('hidden');
    document.querySelector('.nav').classList.toggle('lighten-nav');

    const hideMenu = () => document.querySelector('.menu').classList.add('hidden');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        TweenMax.fromTo('.menu', 1, {height: '1px'}, {height: '100vh'});
        TweenMax.fromTo('.menu-link', 1, {opacity: 0}, {opacity: 1});
    } else {
        TweenMax.fromTo('.menu', 1, {height: '100vh'}, {height: '1px', onComplete: hideMenu});
        TweenMax.fromTo('.menu-link', 1, {opacity: 1}, {opacity: 0});
    }
});

// Services Tab System
class Tab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        console.log(this.data);
        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        console.log(this.content);
        this.content = new TabContent(this.content);
        console.log(this.content);
        this.element.addEventListener('click', () => { this.selectTab() });
    }
    selectTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        this.element.classList.add('active-tab');
        this.content.showContent();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }
    showContent() {
        let contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => content.classList.remove('active-content'));
        console.log(this.element);
        this.element.classList.add('active-content');
    }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new Tab(tab));