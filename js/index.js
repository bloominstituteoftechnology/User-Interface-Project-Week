// menu model
class HamburgerOpen {
  constructor(element) {
    this.element = element
    this.element.addEventListener('click', () => this.openModal())
  }

  openModal() {
    document.querySelector('.non-expanded').classList.add('modal-hidden')
    document.querySelector('.expanded').classList.remove('modal-hidden')
    document.querySelector('.expanded').classList.remove('modal-hidden')
    document.querySelector('.menu-modal').classList.remove('modal-hidden')
  }
}

class HamburgerClose {
  constructor(element) {
    this.element = element
    this.element.addEventListener('click', () => this.closeModal())
  }

  closeModal() {
    document.querySelector('.non-expanded').classList.remove('modal-hidden')
    document.querySelector('.expanded').classList.add('modal-hidden')
    document.querySelector('.expanded').classList.add('modal-hidden')
    document.querySelector('.menu-modal').classList.add('modal-hidden')
  }
}

let hamburgerNonExpanded = document.querySelector('header .non-expanded')
let hamburgerExpanded = document.querySelector('header .expanded')

hamburgerNonExpanded = new HamburgerOpen(hamburgerNonExpanded)
hamburgerExpanded = new HamburgerClose(hamburgerExpanded)

// services page tabs content
class Tab {
  constructor(element) {
    this.element = element
    this.tabData = this.element.dataset.tab
    this.content = Array.from(document.querySelectorAll('.content')).find(
      item => item.dataset.tab === this.tabData
    )
    this.element.addEventListener('click', () => this.selectTab())
  }

  selectTab() {
    console.log(this.content)
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => tab.classList.remove('active-tab'))
    this.element.classList.add('active-tab')

    const contents = document.querySelectorAll('.content')
    contents.forEach(content => (content.style.display = 'none'))
    this.content.style.display = null
  }
}

let tabs = document.querySelectorAll('.tab')
tabs = Array.from(tabs).map(tab => new Tab(tab))
tabs[0].selectTab()
