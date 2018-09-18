// JS goes here
class Dropdown {
    constructor (element) {

    this.element = element;
    this.button = this.element.querySelector(".dropdown-button");
    this.closeButton = this.element.querySelector(".close-button");
    this.content = this.element.querySelector(".full-menu");
    this.hideHeader = this.element.querySelector('header');
    this.closeButton.addEventListener('click', () => {this.toggleContent()});
    this.button.addEventListener('click', () => {this.toggleContent()})};
    
    toggleContent() {
        this.content.classList.toggle("dropdown-hidden");
        this.hideHeader.classList.toggle("dropdown-hidden");
    }
}

// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

let dropdown = document.querySelector('body');
dropdown = new Dropdown(dropdown);