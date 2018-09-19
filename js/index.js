// JS goes here

/* Nav bar expansion code */
const navButton = document.getElementById("NavImg");
const navExpansion = document.querySelector(".NavExpansion");
console.log(navExpansion.style.display)


navButton.onclick = function (event) {
//Expanded nav display.
    let displayState = navExpansion.style.display;
    switch (displayState) {
        case "flex":
        navExpansion.style.display = "";
        break;

        case "":
        navExpansion.style.display = "flex";
        break;
    }
    console.log (displayState);

//Button icon change.
    switch (navButton.getAttribute('src')) {
        case "/img/nav-hamburger.png":
        this.setAttribute('src', '/img/nav-hamburger-close.png');
        break;

        case "/img/nav-hamburger-close.png":
        this.setAttribute('src', '/img/nav-hamburger.png');
        break;
}
console.log(this.getAttribute('src'));
}