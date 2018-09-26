class Hamburger{
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', () => {
            this.toggleContent();})
    }//end constructor

    toggleContent(){
        
        let buttons = this.element.querySelectorAll('.menu-button');
        buttons.forEach(button => {
            button.classList.remove('selected');
        })
        // this.body.classList.toggle('overflow');
        
        this.content.classList.toggle('menu-hidden');
        // this.element.classList.toggle('selected');
        this.element.classList.toggle('selected');
        
    } //end toggleContent

} // end Hamburger class







let navMenu = document.querySelectorAll('.menu');
navMenu = Array.from(navMenu).map(menu => new Hamburger(menu));

// let body = document.querySelector('.overflow');
// class Button{
//     constructor(element){
//         this.element = element;
//         this.data = element.dataset.button;
//         this.itemElement = document.querySelector(`.menu-button[data-button= "${this.data}"]`);
       
//     }//methods go here:

// }//end Button class



// Array.from(button).forEach(function(element){
//     element.classList.remove('selected');
// });
//     this.element.classList.add('selected');
navMenu[1].toggleContent();
