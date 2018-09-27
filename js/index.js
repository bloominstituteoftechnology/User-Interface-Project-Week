// expanding nav menu functionality. doesn't specify home-page or services since it needs
//to function similarly on both
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

//for contact.html: added function for Submit button on page. select and radio forms are pre-selected so they cannot be empty,
//but if email or text forms are left empty or unaltered, alert message will be to fill out rest of forms. otherwise, thanks for contacting us alert
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
