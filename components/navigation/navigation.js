class Navigation {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', (e) => this.toggleContent(e));
    }
    toggleContent(e){
        this.content.classList.toggle('menu-hidden');
        if(e.target.src.includes("close")){
            e.target.src = "img/nav-hamburger.png";
        } else {
            e.target.src = "img/nav-hamburger-close.png"
        }
    }
}

let menus = document.querySelectorAll('.navigation').forEach( menu => new Navigation(menu)); 