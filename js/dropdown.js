class Dropdown {
    constructor(element){
        this.element = element;

        this.content = this.element.querySelector('.dropdown-content');
        this.hamburger = this.element.querySelector('.hamburger');

        this.hamburgerClose = this.element.querySelector('.hamburger-close');

        this.hamburger.addEventListener('click', () => { return this.toggleContent()})

        this.hamburgerClose.addEventListener('click', () => { return this.toggleContent()})

    }
    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
        this.hamburger.classList.toggle('hide');
        this.hamburgerClose.classList.toggle('hide');
    }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));