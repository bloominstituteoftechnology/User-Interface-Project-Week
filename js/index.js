// menu model
class HamburgerOpen {
  constructor(element) {
    this.element = element
    this.element.addEventListener('click', () => this.openModal())
  }

  openModal() {
    document.querySelector('.non-expanded').classList.add('modal-hidden')
    document.querySelector('.expanded').classList.remove('modal-hidden')
    document.querySelector('.menu-modal').classList.remove('modal-hidden')
    const menuModal = document.querySelector('.menu-modal')
    const menuLinks = document.querySelectorAll('.links-wrapper a')

    TweenMax.from(menuModal, 0.4, {
      position: 'absolute',
      top: '50vh',
      left: '50vw',
      height: 1,
      width: 1
    })

    TweenMax.staggerFrom(
      menuLinks,
      0.4,
      {
        cycle: {
          left: [500, -500]
        },
        opacity: 0,
        position: 'relative',
        delay: 0.4
      },
      0.4
    )
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
    document.querySelector('.menu-modal').classList.add('modal-hidden')
  }
}

let hamburgerNonExpanded = document.querySelector('header .non-expanded')
let hamburgerExpanded = document.querySelector('header .expanded')

hamburgerNonExpanded = new HamburgerOpen(hamburgerNonExpanded)
hamburgerExpanded = new HamburgerClose(hamburgerExpanded)
