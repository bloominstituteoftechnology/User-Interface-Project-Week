class Menu {
    constructor() {
        this.button = document.querySelector(".menu-open");
        this.menuContent = document.querySelector(".menu-content");
        this.menuContent.style.display = 'none';
        this.button.addEventListener("click", () => this.toggleMenu());
    }
    toggleMenu() {
        console.log(this.menuContent.style.display)
        if (this.menuContent.style.display == 'none') {
            this.menuContent.style.display = 'flex';
            this.button.src = '../img/nav-hamburger-close.png';
        } else {
            this.menuContent.style.display = 'none';
            this.button.src = '../img/nav-hamburger.png';
        }
    }
}
let menu = new Menu();