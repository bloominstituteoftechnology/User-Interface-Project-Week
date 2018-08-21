
const d = document

const nav = d.getElementsByClassName('nav-bar')[0]
const hamburger = d.getElementsByClassName('hamburger')[0]

hamburger.addEventListener('click', () => {
  nav.classList.toggle('expand')
  nav.classList.length == 1 ?
  event.target.src = "./img/nav-hamburger.png"
  :
  event.target.src = "./img/nav-hamburger-close.png"
})
