class Dropdown {
    constructor(element) {
        this.element = document.querySelector('.menu');
        this.button = this.element.querySelector('.menuButton');
        this.hamburgerClose = document.querySelector('.hamburger-close');
        this.content = document.querySelector('.expandMenu');
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
        this.hamburgerClose.addEventListener('click', () => {
            this.toggleContent();
        })

    }

    toggleContent() {
        if(this.content.className === 'expandMenu'){

            this.content.className += ' menu-hidden';
        }

        else {
            this.content.className = 'expandMenu';
           
        }
    }
} 

let dropdown = document.querySelectorAll('.menu');

dropdown = Array.from(dropdown).map(dropdown => new Dropdown(dropdown));
