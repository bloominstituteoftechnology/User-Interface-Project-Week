class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.nav-hamburger');
        this.closeButton = this.element.querySelector('.nav-hamburger-X');
        this.content = this.element.querySelector('.nav-dropdown');
        this.header = this.element.querySelector('.nav-dropdown')

        

    

        this.button.addEventListener('click', () => {
            this.toggleContent();
        });
        this.closeButton.addEventListener('click', () => {
            this.closeContent();
        })
    }
    toggleContent() {
       this.content.classList.toggle('nav-hidden');
       this.button.classList.toggle('nav-hamburger-hidden');
       this.closeButton.classList.toggle('nav-hamburger-X-visible');
       TweenMax.fromTo(this.header, 2, {height: '4.8vh'}, {height: '100vh', ease: Bounce.easeOut, y: '10'})
       TweenMax.fromTo(this.header, 2, {opacity: '1'}, {opacity: '.96'})
      
    }
    closeContent() {
        this.content.classList.toggle('nav-hidden');
        this.closeButton.classList.toggle('nav-hamburger-X-visible');
        this.button.classList.toggle('nav-hamburger-hidden');
        TweenMax.fromTo(this.header, 2, {height: '100vh'}, {height: '0vh', ease: Bounce.easeOut, y: '-10'});
        // TweenMax.fromTo(this.header, 2, {opacity: '.96'}, {opacity: '0'})
    }
}



let dropdowns = document.querySelectorAll('.main-nav-header')

dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown))