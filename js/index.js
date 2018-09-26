let nav = document.querySelector(".navImg")
let bar = document.querySelector(".top-bar")
let expanded = document.querySelector(".expanded")
nav.addEventListener("click", (event) => {
    bar.classList.toggle("drop");
    expanded.classList.toggle("open")
    nav.classList.toggle("x")
})