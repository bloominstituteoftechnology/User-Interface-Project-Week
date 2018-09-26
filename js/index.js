class Hamburger{
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', () => {
            this.toggleContent();
            // console.log('youclicked');
        })//end click listener

    }//end constructor

    toggleContent(){
        this.content.classList.toggle('menu-hidden');
    } //end toggleContent

} // end Hamburger class

let navMenu = document.querySelectorAll('.menu');
navMenu = Array.from(navMenu).map(menu => new Hamburger(menu));


