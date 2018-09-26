class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.nav-hamburger');
        this.closeButton = this.element.querySelector('.nav-hamburger-X')
        this.content = this.element.querySelector('.nav-dropdown');
        console.log(this.closeButton)
        this.button.addEventListener('click', () => {
            this.toggleContent();
        });
        this.closeButton.addEventListener('click', () => {
            this.closeContent();
        })
    }
    toggleContent() {
       this.content.classList.toggle('nav-hidden');
       this.button.classList.toggle('nav-hamburger-hidden')
       this.closeButton.classList.toggle('nav-hamburger-X-visible')
       this.element.style.opacity = ".96"
       
    }
    closeContent() {
        this.content.classList.toggle('nav-hidden')
        this.closeButton.classList.toggle('nav-hamburger-X-visible')
        this.button.classList.toggle('nav-hamburger-hidden')
    }
}























let dropdowns = document.querySelectorAll('.main-nav-header')

dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown))