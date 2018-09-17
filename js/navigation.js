//Navigation JS
class Navigation {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.nav-button');
        this.content = this.element.querySelector('.nav-content');
        this.close = this.element.querySelector('.close');
        this.button.addEventListener('click', () => { this.toggleContent() });
    }
    toggleContent() {
        this.content.classList.toggle('content-hidden');
        this.button.classList.toggle('nav-button-hidden');
    }
}

let navs = document.querySelectorAll('.navigation');
navs = Array.from(navs).map(item => new Navigation(item));