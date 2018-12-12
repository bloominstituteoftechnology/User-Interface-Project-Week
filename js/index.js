class Dropdown {
    constructor(navbar) {
        this.navbar = navbar;
        this.hamburger = this.navbar.querySelector('.Hamburger');
        this.closemenu = this.navbar.querySelector('.CloseMenu');
        this.content = document.querySelector('.NavContainer');
        this.hamburger.addEventListener('click', () => {this.togglecontent()});
        this.closemenu.addEventListener('click', () => {this.togglecontent()});
    }
    togglecontent() {
        this.hamburger.classList.toggle('ButtonToggle');
        this.closemenu.classList.toggle('ButtonToggle');
        this.content.classList.toggle('NavToggle');
    }
}

let dropdown = new Dropdown(document.querySelector('.HeaderBar'));