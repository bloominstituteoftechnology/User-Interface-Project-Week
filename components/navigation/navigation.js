class Navigation {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', () => this.toggleContent());
    }
    toggleContent(){
        this.content.classList.toggle('menu-hidden');
    }
}

let menus = document.querySelectorAll('.navigation').forEach( menu => new Navigation(menu)); 