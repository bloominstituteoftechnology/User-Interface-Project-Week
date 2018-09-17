class Dropdown {
    constructor(element) {
        this.element = document.querySelector('.menu');
        this.button = this.element.querySelector('.menuButton');
        this.content = document.querySelector('.expandMenu');
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
    }

    toggleContent() {
        this.content.classList.toggle('menu-hidden');
    }
}










let dropdown = document.querySelectorAll('.menu');

dropdown = Array.from(dropdown).map(dropdown => new Dropdown(dropdown));
