// JS goes here
class Hamburger {
    constructor(element) {
        this.element = element;
        this.parent = document.querySelector('.navContainer');
        this.linksContainer = document.querySelector('.hamContainer')
        this.element.addEventListener('click', () => { this.toggleNav(); });
        this.closed = true;
    }

    toggleNav() {
        console.log(this.linksContainer);
        this.linksContainer.classList.toggle('displayHam');
        this.parent.classList.toggle('navFixed');
        if (this.closed === true) {
            this.closed = false;
            this.element.src = 'img/nav-hamburger-close.png';
        }
        else {
            this.closed = true;
            this.element.src = 'img/nav-hamburger.png';
        }
    }
}


let hamburger = document.querySelector('.hamburger');
hamburger = new Hamburger(hamburger);

console.log(hamburger);