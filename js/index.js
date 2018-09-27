// expanding nav menu functionality. doesn't specify which page since it needs
//to function similarly on all
const menuButton = document.querySelector(".menu .button-img img");

const closedURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger.png?raw=true";
const openURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger-close.png?raw=true";
const menuNav = document.querySelector(".menu .nav");
menuButton.addEventListener("click", () => {
  //before greensock, this function just toggled .nav's display from 'none' to 'flex' and changed the button's image
  //now it transitions to slide open, with expanding text for the links, and goes in reverse when closed
  if (menuButton.src === closedURL) {
    event.currentTarget.src = openURL;
    menuNav.style.display = "flex";
    TweenMax.to(".nav", 1, { height: "100vh" });
    TweenMax.to(".nav-link", 0.5, { fontSize: "4.8rem" });
    TweenMax.to(".nav-link", 0.5, { lineHeight: "8.5rem" });
  } else {
    event.currentTarget.src = closedURL;
    // menuNav.style.display = "none";
    TweenMax.to(".nav", 1, { height: "0vh" });
    TweenMax.to(".nav", 0.8, { display: "none" });
    TweenMax.to(".nav-link", 1, { fontSize: "0rem" });
    TweenMax.to(".nav-link", 1, { lineHeight: "0rem" });
  }
});

//for contact.html: added function for submit button on contact page. select and radio forms are pre-selected so they cannot be empty,
//but if email or text forms are left empty or unaltered, alert message will be to fill out rest of forms. otherwise, 'thanks for contacting us' alert
function clickAlert() {
  if (true) {
    let email = document.forms["email"]["email"].value;
    let text = document.forms["text"]["text"].value;
    if (email != "Enter email" && email != "" && text != "") {
      alert(
        "Thank you for reaching out to us, we will be contacting you soon!"
      );
    } else {
      alert(
        "Some of the forms are incomplete. Please complete all forms before hitting submit."
      );
    }
  }
}

//added in this function just for fun. window event listener watches keydowns and puts their character codes
//into a string, if the string contains the charcodes for the Konami Code (up up down down left right left right B A), a hidden raptor appears before vanishing back to his start point
let konamiString = "";
function showRaptor() {
  //made the initial opacity 0 since sometimes the image flashes into view on page load otherwise
  //initial position is 49vw to the right (its width) and bottom:0
  TweenMax.to(".hidden-raptor", 0.001, { opacity: "1" });
  TweenMax.to(".hidden-raptor", 0.2, { right: "0vw" });
  TweenMax.to(".hidden-raptor", 3, { delay: 1, bottom: "-70vw" });
  TweenMax.to(".hidden-raptor", 1, { delay: 3, right: "-49vw" });
  TweenMax.to(".hidden-raptor", 1, { delay: 3, bottom: "0" });
  TweenMax.to(".hidden-raptor", 0.001, { delay: 3, opacity: 0 });
}

function konami(e) {
  konamiString += String.fromCharCode(e.keyCode);
  if (konamiString.includes("&&((%'%'BA")) {
    showRaptor();
    konamiString = "";
  }
}

window.addEventListener("keydown", e => {
  konami(e);
});
