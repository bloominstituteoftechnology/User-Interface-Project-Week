// JS goes here
const Button = document.querySelector('.button');
const ButtonClose = document.querySelector('.button-close');


Button.addEventListener("click", () => {
    document.querySelector(".main-nav").style.display = "flex";
    Button.style.display = "none";
    ButtonClose.style.display = "block";
})

ButtonClose.addEventListener("click", () => {
    document.querySelector(".main-nav").style.display = "none";
    Button.style.display = "block";
    ButtonClose.style.display = "none";
})