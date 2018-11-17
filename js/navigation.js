class Navigation {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.icon');
        this.content = this.element.querySelector('.nav-content');
        this.button.addEventListener('click', () => { this.toggleContent() });
    }
    toggleContent() {
        this.content.classList.toggle('content-hidden');
    }
}

let navs = document.querySelectorAll('.nav');
navs = Array.from(navs).map(item => new Navigation(item));