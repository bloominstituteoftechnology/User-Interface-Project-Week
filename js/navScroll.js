let stickyNav = document.querySelector(".nav-static");
window.addEventListener("scroll", function() {
    stickyNav.classList.add("navbar-scroll");
    if (Math.round(window.scrollY) === 0) {
    stickyNav.classList.remove("navbar-scroll");
}
});

