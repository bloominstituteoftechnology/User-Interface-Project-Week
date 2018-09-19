class Menu {
    constructor(element) {
        this.element = element;
        this.open = false;
        TweenLite.to(this.element, 0, {autoAlpha: 0, display: 'none'});
    }

    toggleMenu() {
        TweenLite.to(this.element, 0.5, {autoAlpha: !this.open ? 1 : 0, display: !this.open ? 'flex' : 'none'});
        this.open = !this.open;
    }
}

function init() {
    let menu = new Menu(document.querySelector('.nav-links'));


    let navButtons = document.querySelectorAll('.nav-button');
    Array.from(navButtons).forEach(navButton => navButton.addEventListener('click', () => menu.toggleMenu()));
}

window.addEventListener('load', init());