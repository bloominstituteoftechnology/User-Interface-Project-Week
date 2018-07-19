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
const mobButton = document.querySelector(".mob-dropdown-button")

// gets divs containing hidden dropdown
const navButton = document.querySelector(".nav-text-container");
const mobNavButton = document.querySelector(".mob-nav-text-container");

const navBurger = document.querySelector(".nav-burger");
const mobNavBurger = document.querySelector(".mob-nav-burger");

button.addEventListener("click", () => {
        navButton.classList.toggle("dropdown-hidden");
        if (navBurger.src === "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger-close.png") {
            navBurger.src = "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger.png";
        }
        else {
            navBurger.src = "https://raw.githubusercontent.com/szincone/User-Interface-Project-Week/master/img/nav-hamburger-close.png";
        }
})

mobButton.addEventListener("click", () => {
    mobNavButton.classList.toggle("mob-dropdown-hidden");
})





