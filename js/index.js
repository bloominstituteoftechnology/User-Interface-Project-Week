button = document.querySelector(".menuButton");
nav = document.querySelector(".nav");
button.addEventListener("click", () => {
    nav.classList.toggle("hidden");
})