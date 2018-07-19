
// // Create a reference to the ".custom-menu" class
const menu = document.querySelector(".custom-menu");

let Button = document.querySelector(".open-button");
let ButtonClose = document.querySelector(".close-button");

Button.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    Button.style.display = "none";
    ButtonClose.style.display = "block";
})

ButtonClose.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    Button.style.display = "block";
    ButtonClose.style.display = "none";
})

