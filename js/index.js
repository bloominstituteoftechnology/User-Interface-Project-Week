// JS goes here
let header = document.querySelector('.header')
document.addEventListener('scroll', () => header.classList.add('scroll-style'))

let menu = document.querySelector('.navigation')
let headerNav = document.querySelector('.header img')
headerNav.addEventListener('click', () => {
  header.classList.toggle('hide')
  menu.classList.toggle('hide')
})
let menuNav = document.querySelector('.navigation img')
menuNav.addEventListener('click', () => {
  menu.classList.toggle('hide')
  header.classList.toggle('hide')
})


// Sections Tabs
class Button {
  constructor(element) {
    this.element = element
    this.data = this.element.dataset.tab

    this.tabData = document.querySelector(`.tab-section[data-tab="${this.data}"]`)
    this.tab = new Tab(this.tabData)

    this.element.addEventListener('click', () => this.select())
  }

  select() {
    let links = document.querySelectorAll('.button')

    Array.from(links).forEach(function(links){
      links.classList.remove('active-button')
    })

    this.element.classList.add('active-button')
    this.tab.select()
  }
}

class Tab {
  constructor(element) {
    this.element = element
    console.log(element)
  }
  select() {
    let tabs = document.querySelectorAll('.tab-section')
    tabs = Array.from(tabs).forEach(function(tabs){
      tabs.classList.remove('active-tab')
    })
    console.log(tabs)
    this.element.classList.add('active-tab')
  }
  deselect() {

  }
}
let links = document.querySelectorAll('.button')
links = Array.from(links).map(links => new Button(links))
