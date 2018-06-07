
const header = document.querySelector('.header-container')

window.addEventListener('scroll', (e) => {
  if(window.scrollY === 0 
     && header.classList.contains('header-scrolled')) header.classList.remove('header-scrolled')
  
  if(window.scrollY > 0
     && !header.classList.contains('header-scrolled')){
    header.classList.add('header-scrolled') 
  }
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


