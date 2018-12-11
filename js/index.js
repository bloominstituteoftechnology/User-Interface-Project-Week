// JS goes here

window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName(".top-bar");

var sticky = topbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}