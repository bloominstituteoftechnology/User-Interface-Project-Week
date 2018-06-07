const $ = document.querySelector.bind(document)

const header = $('.header-container-fluid')

window.addEventListener('scroll', (e) => {
  if(window.scrollY === 0 
     && header.classList.contains('header-scrolled')) header.classList.remove('header-scrolled')
  
  if(window.scrollY > 0
     && !header.classList.contains('header-scrolled')){
    header.classList.add('header-scrolled') 
  }
})

const menuBtn = $('.menu-button')
const menuOverlay = $('.menu-overlay')

menuBtn.addEventListener('click', (e) => {
  if(e.target.src.includes('img/nav-hamburger.png')) {
    e.target.src = 'img/nav-hamburger-close.png'
  } else if (e.target.src.includes('img/nav-hamburger-close.png')) {
    e.target.src = 'img/nav-hamburger.png'
  }
  menuOverlay.classList.toggle('menu-overlay-open')
  if(menuOverlay.style.opacity !== '0.9'){
    menuOverlay.style.opacity = '0.9'
  }
  TweenMax.from(menuOverlay, 1, {opacity: 0})

})


class TabsContainer {

  constructor(el) {
    this.el = el
    console.log(this.el)
    this.links = this.el.querySelectorAll('.tab')
    this.links = Array.from(this.links)
                      .map(link => new TabLink(link, this)) 
    this.activeLink = this.links[0]
    this.init()
  }
  
  init() {
    this.activeLink.select()
  }

  updateActive(newActive) {
    this.activeLink.deselect()
    this.activeLink = newActive
  }

  getTabContent(data) {
    return document.querySelector(`.tab-content[data-tab="${data}"]`)
  }
}

class TabLink {
  constructor(el, parent) {
    this.el = el
    this.tabContainer = parent
    this.tabContent = this.tabContainer.getTabContent(this.el.dataset.tab)
    console.log(this.tabContent)
    this.tabContent = new TabContent(this.tabContent)
    this.el.addEventListener('click', () => {
      this.tabContainer.updateActive(this)
      this.select()
    })
  }

  select() {
    this.el.classList.add('tab-selected')
    this.tabContent.select()
  }

  deselect() {
    this.el.classList.remove('tab-selected')
    this.tabContent.deselect()
  }
}

class TabContent {
  constructor(el) {
    this.el = el
  }

  select() {
    this.el.classList.add('tab-content-selected')
  }

  deselect() {
    this.el.classList.remove('tab-content-selected')
  }
}

let tc = document.querySelectorAll('.tabs-container')
tc = Array.from(tc).map(el => new TabsContainer(el))


