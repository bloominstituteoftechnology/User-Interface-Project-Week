document.addEventListener("DOMContentLoaded", function(event) {
    let menuIcon = document.querySelector('.menu__icon');
    let extendedNav = document.querySelector('.menu__expanded');
    extendedNav.style.display = "none";




    menuIcon.addEventListener('click', () => {
        if (extendedNav.style.display === "none") {
            extendedNav.style.display = "block";
            menuIcon.src = "img/nav-hamburger-close.png";
        } else {
            extendedNav.style.display = "none";
            menuIcon.src = "img/nav-hamburger.png";
            console.log('hi');
        }
    })
 






})