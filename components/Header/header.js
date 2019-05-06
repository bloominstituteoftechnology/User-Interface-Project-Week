class Hamburger {
    constructor(element){
        this.element = element;
        this.active = false;
        this.top = this.element.querySelector('.topBar');
        this.middle = this.element.querySelector('.middleBar');
        this.bottom = this.element.querySelector('.bottomBar');
        this.modal = document.querySelector('.modal');
        this.fixedHeader = document.querySelector('.fixed-header');

        this.element.addEventListener('click', () => this.clickFunction());
    }

    clickFunction () {
        if(this.active){
            this.top.classList.toggle('change');
            this.middle.classList.toggle('change');
            this.bottom.classList.toggle('change');
            this.modal.classList.toggle('modal-visible');
            this.fixedHeader.classList.toggle('modalActive');
            this.active = false;
        } else {
            this.top.classList.toggle('change');
            this.middle.classList.toggle('change');
            this.bottom.classList.toggle('change');
            this.modal.classList.toggle('modal-visible');
            this.fixedHeader.classList.toggle('modalActive');
            this.active = true;
        }
    }
}

let hamburger = document.querySelector('.fixed-header-hamburger');
hamburger = new Hamburger(hamburger);