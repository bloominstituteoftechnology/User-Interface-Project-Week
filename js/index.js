// JS goes here

let dropdown = document.querySelector(".dropdown-button");
let content = document.querySelector(".dropdown-content");

dropdown.addEventListener('click', function() {
    dropdown.src = "../img/nav-hamburger-close.png";
    content.classList.toggle('dropdown-hidden');

    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "../img/nav-hamburger.png";
    }
});