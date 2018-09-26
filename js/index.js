const toggleMenu = () => {
    nav.classList.toggle("expand");
    menu.classList.toggle("menu-open");

    if (menu.classList.contains("menu-open")) {
    menuButton.src="./img/nav-hamburger-close.png";
    }
    else {
        menuButton.src="./img/nav-hamburger.png";
    }
}

const menu = document.querySelector(".menu");
const nav = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-button");
// menuButton.src="/img/nav-hamburger.png";

menuButton.addEventListener("click", toggleMenu);