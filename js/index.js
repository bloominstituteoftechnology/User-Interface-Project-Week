// JS goes here
var last_known_scroll_position = 0;
let myNav = document.querySelector(".navigation");

window.addEventListener('scroll', function() {
    last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position >= 300) {
        myNav.classList.add("nav-bottom")
    } else {
        myNav.classList.remove("nav-bottom")
    }
})