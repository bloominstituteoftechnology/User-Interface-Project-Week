let header = document.querySelector(".header")
document.addEventListener("scroll", () => {
  header.classList.add("opacity")
})

let menu = document.querySelector(".menu")
let navbtn = document.querySelector(".header img")
let menubtn = document.querySelector(".menu img")
navbtn.addEventListener("click", () => {
  header.classList.toggle("hidden")
    menu.classList.toggle("hidden")
})
menubtn.addEventListener("click", () => {
  header.classList.toggle("hidden")
    menu.classList.toggle("hidden")
})
