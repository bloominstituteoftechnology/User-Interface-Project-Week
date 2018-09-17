class Dropdown {
    constructor(element) {
        this.element = document.querySelector('.menu');
        this.button = this.element.querySelector('.menuButton');
        this.hamburger = document.querySelector('.hamburger');
        this.content = document.querySelector('.expandMenu');
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })

    }

    toggleContent() {
        if(this.content.className === 'expandMenu'){

            this.content.className += ' menu-hidden';
            this.hamburger.src ="./img/nav-hamburger.png";
        }

        else {
            this.content.className = 'expandMenu';
            this.hamburger.src ="./img/nav-hamburger-close.png"
        }
    }
} 










let dropdown = document.querySelectorAll('.menu');

dropdown = Array.from(dropdown).map(dropdown => new Dropdown(dropdown));
