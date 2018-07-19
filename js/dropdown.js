// class Dropdown {
//     constructor(element) {
//         // assign this.element to the dropdown element
//         this.element = element;
//         console.log(document)
//         // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
//         this.button = this.element.querySelector(".dropdown-button");
//         // assign the reference to the ".dropdown-content" class found in the dropdown element
//         this.content = document.querySelector(".nav-text-container");
//         this.mobContent = document.querySelector(".mob-nav-text-container")

//         // Add a click handler to the button reference and call the toggleContent method.
//         this.button.addEventListener("click",  () => { this.toggleContent() });
//     }

//     toggleContent() {
//         // Toggle the ".dropdown-hidden" class off and on
//         this.content.classList.toggle("dropdown-hidden");
//         this.mobContent.classList.toggle("dropdown-hidden");

//     }
// }


// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));


// below uses no classes
// actual buttons on the nav bars
const button = document.querySelector(".dropdown-button");
const navBurger = document.querySelector(".nav-burger");



// gets divs containing hidden dropdown
const navButton = document.querySelector(".nav-text-container");


// src vars
const navBurgerImgClosed = "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger-close.png";
const navBurgerImgOpen = "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger.png";


button.addEventListener("click", () => {
        navButton.classList.toggle("dropdown-hidden");
        if (navBurger.src === navBurgerImgClosed) {
            navBurger.src = navBurgerImgOpen;
        }
        else {
            navBurger.src = navBurgerImgClosed;
        }
})







