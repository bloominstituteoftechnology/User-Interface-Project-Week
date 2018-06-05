let header = document.querySelector(".header")
document.addEventListener("scroll", () => {
  header.classList.add("opacity")
})

let menu = document.querySelector(".menu")
let navbtn = document.querySelector(".header img")
navbtn.addEventListener("click", () => {
  header.classList.toggle("hidden")
})
navbtn.addEventListener("click", () => {
  menu.classList.toggle("hidden")
})
