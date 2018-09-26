// JS goes here






class Dropdowner {
    constructor (element) {
        console.log("this?")
        this.element = element;

        this.button = this.element.querySelector('.img-hamburger');

        this.content = this.element.querySelector('.ninja-nav');

        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
    }
    toggleContent(){
        console.log("does this work");
        this.content.classList.toggle('ninja-hidden');
        // this.button.classList.toggle('img-hamburger');
        this.button.classList.toggle('img-x');
    }


}




let dropdown = document.querySelectorAll(".tilted");
console.log(dropdown);
dropdown = Array.from(dropdown).map( dropdowner => new Dropdowner(dropdowner));