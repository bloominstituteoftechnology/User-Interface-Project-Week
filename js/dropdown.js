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
const button = document.querySelector(".dropdown-button");
const mobButton = document.querySelector(".mob-dropdown-button")
// const mobNavButton = document.querySelector()
const mobNavButton = document.querySelector(".mob-nav-text-container");
const navButton = document.querySelector(".nav-text-container");
button.addEventListener("click", () => {
        navButton.classList.toggle("dropdown-hidden");
        
})

mobButton.addEventListener("click", () => {
    mobNavButton.classList.toggle("mob-dropdown-hidden");
    console.log('this works')
})





