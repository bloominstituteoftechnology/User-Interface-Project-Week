class Hamburger{
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', () => {
            this.toggleContent();})
    }//end constructor

    toggleContent(){
        
//         let buttons = this.element.querySelectorAll('.menu-button');
//         buttons.forEach(button => {
//             button.classList.remove('selected');
//         })
//         // this.body.classList.toggle('overflow');
        
        this.content.classList.toggle('menu-hidden');
//         // this.element.classList.toggle('selected');
//         this.element.classList.toggle('selected');
        
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
// navMenu[1].toggleContent();


const hamburgerButton = document.querySelector('.span');
const navigation = document.querySelector('.menu-button');
const overflows = document.querySelector('.overflow');
let count = 0;
hamburgerButton.addEventListener('click', () => {
    if (count%2 === 0) {
        navigation.classList.add('show');
        navigation.classList.remove('hide');
        overflows.classList.add('overflow'); 
        overflows.style = 'overflow :hidden';
        hamburgerButton.src = "img/nav-hamburger-close.png"; 
        
        return count++;
    } else {
        navigation.classList.remove('show');
        navigation.classList.add('hide');   
        overflows.classList.remove('overflow');
        overflows.style = 'overflow: scroll';
        hamburgerButton.src = "img/nav-hamburger.png";  
        
        return count++;
    }
});
