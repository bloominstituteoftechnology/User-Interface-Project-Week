// JS goes here
class Menu {
    constructor(element) {
        this.element = element;
        this.open = false;
        
        this.element.style.display = 'none';
    }

    toggleMenu() {
        
        if(this.open === false){
            this.element.style.display = 'flex';
        } else {
            this.element.style.display = 'none';
        }

        
        this.open = !this.open;
        
        
    }
}

function init() {
    let menu = new Menu(document.querySelector('.nav-items'));


    let navButtons = document.querySelectorAll('.nav-button');
    Array.from(navButtons).forEach(navButton => navButton.addEventListener('click', () => menu.toggleMenu()));
}

window.addEventListener('load', init());