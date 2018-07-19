// JS goes here
const mainNav = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.add("visibility");
})

closeBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("hidden");
    mainNav.classList.toggle("display-flex");
    closeBtn.classList.remove("visibility");
})

let links = document.querySelectorAll(".link");


class Tab {
    constructor(link) {
        this.link = links;

    }
}
links = Array.from(links).map(link => new Tab(link));