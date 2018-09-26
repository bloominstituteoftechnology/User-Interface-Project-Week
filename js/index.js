function openNav() {
    let expander = document.querySelector(".expander");
    expander.style.display = "block";
    let hamburger = document.querySelector(".menu-button");
    hamburger.style.display = "none";
}

function closeNav() {
    let expander = document.querySelector(".expander");
    expander.style.display = "none";
    let hamburger = document.querySelector(".menu-button");
    hamburger.style.display = "block";
}