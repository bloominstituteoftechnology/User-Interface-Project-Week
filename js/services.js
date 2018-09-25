// Navigation JS
let dropdown = document.querySelector(".dropdown-button");
dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "../img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    let content = document.querySelector(".dropdown-content");
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "../img/nav-hamburger.png";
    }
});