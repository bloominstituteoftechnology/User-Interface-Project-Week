class ExtendNav{
    constructor(element) {
        this.element = element;
        this.hamburger = document.querySelector('.hamburger');
        this.closedHamburger = document.querySelector('.closed-hamburger');
        this.extendedNav = this.element.querySelector('.extended-nav');
        this.hamburger.addEventListener('click', () => {this.extendHamburger()});
        this.closedHamburger.addEventListener('click', () => {this.nonextendHamburger()});

    }

    extendHamburger() {
        this.extendedNav.classList.toggle('hamburger-open');
    }

    nonextendHamburger(){
        this.extendedNav.classList.toggle('hamburger-open')
    }
}


let extendedNavs = document.querySelectorAll('.nonextended-nav')
extendedNavs = Array.from(extendedNavs).map(extendNav => new ExtendNav(extendNav))

