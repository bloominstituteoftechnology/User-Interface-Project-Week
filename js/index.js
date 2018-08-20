// JS goes here
class Dropdown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');
        this.content = this.element.querySelector('.dropdown-content');

        this.button.addEventListener('click', () => { this.toggleContent(); });

    }

    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');

        if (this.content.classList.contains('dropdown-hidden')) {
            this.button.src = '../img/nav-hamburger.png';
        }
        else {
            this.button.src = '../img/nav-hamburger-close.png';
        }
        

    }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));