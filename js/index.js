// JS goes here
class Hamburger {
    constructor(element) {
        this.element = element;
        this.linksContainer = document.querySelector('.hamLinks')
        this.element.addEventListener('click', () => { this.toggleNav(); });
        this.closed = true;
    }

    toggleNav() {
        console.log(this.linksContainer);
        this.linksContainer.classList.toggle('displayHam');
        if (this.closed === true) {
            this.closed = false;
        }
        else {
            this.closed = true;
        }
    }
}


let hamburger = document.querySelector('.hamburger');
hamburger = new Hamburger(hamburger);

console.log(hamburger);