// JS goes here

class Menu {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelectorAll('.menu-btn');
    }
}

let menu = document.querySelectorAll('.main-nav');

menu = Array.from(menu).map(menu => new Menu(menu));