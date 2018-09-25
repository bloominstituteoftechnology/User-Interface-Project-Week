// JS goes here

const menuButton = document.querySelector(".home-page .menu .button-img img");
console.log(menuButton);
const closedURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger.png?raw=true";
const openURL =
  "https://github.com/DaftBeowulf/User-Interface-Project-Week/blob/master/img/nav-hamburger-close.png?raw=true";
const menuNav = document.querySelector(".menu .nav");
menuButton.addEventListener("click", () => {
  if (menuButton.src === closedURL) {
    event.currentTarget.src = openURL;
    menuNav.style.display = "flex";
  } else {
    event.currentTarget.src = closedURL;
    menuNav.style.display = "none";
  }
});
