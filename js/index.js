//NAV
class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.burger');
        this.content = this.element.querySelector('.links');
        this.button.addEventListener('click', () =>
    this.toggleContent())
    }

    toggleContent(event) {
        this.content.classList.toggle('dropdown-hidden'); //links
    }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
