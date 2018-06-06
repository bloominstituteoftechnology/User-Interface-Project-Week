// JS goes here

// Services Tabs

class Tabs {
    constructor(element){
        this.element = element;
        this.element.addEventListener("click", function() {
            element.style.backgroundColor = '#5E9FB9';
            element.style.border = "1px solid white";
            element.style.color = "white";
            headerText.textContent = element.textContent;
        });
    }
}



let headerText = document.querySelector('.smc h2');
let tabPicture = document.querySelector('smc-pic');

// Referencing, passing to Tabs
let tabs = document.querySelectorAll(".service-button button");
tabs = Array.from(tabs).map( tab => new Tabs(tab));








// Nav bar
let hamburgerButton = document.querySelector(".hamburger img");
let overlay = document.querySelector('.overlay');

hamburgerButton.addEventListener("click", function() {
    overlay.style.display = "block";
})






