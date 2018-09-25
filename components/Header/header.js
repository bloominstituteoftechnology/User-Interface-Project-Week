class Hamburger {
    constructor(element){
        this.element = element;
        this.active = false;

        this.element.addEventListener('click', () => this.clickFunction());
    }

    clickFunction () {
        if(this.active){
            modal.style.display = 'none';
            this.active = false;
        } else {
            modal.style.display = 'flex';
            this.active = true;
        }
    }
}

let hamburger = document.querySelector('.header-hamburger');
hamburger = new Hamburger(hamburger);
const modal = document.querySelector('.modal');