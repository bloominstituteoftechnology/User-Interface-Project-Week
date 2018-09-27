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

    const tl = new TimelineMax()

    tl.from(menuModal, 0.4, {
      position: 'absolute',
      top: '50vh',
      left: '50vw',
      height: 1,
      width: 1
    })

    tl.staggerFrom(
      menuLinks,
      0.4,
      {
        cycle: {
          left: [500, -500]
        },
        opacity: 0,
        position: 'relative'
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

    const menuModal = document.querySelector('.menu-modal')
    const menuLinks = document.querySelectorAll('.links-wrapper a')

    document.querySelector('.expanded').classList.add('modal-hidden')

    const onComplete = () => {
      menuModal.classList.add('modal-hidden')
    }

    const tl = new TimelineMax()

    tl.staggerTo(
      menuLinks,
      0.4,
      {
        opacity: 0,
        position: 'relative',
        cycle: {
          left: [500, -500]
        }
      },
      0.4
    )

    tl.to(menuModal, 0.4, {
      position: 'absolute',
      top: '50vh',
      left: '50vw',
      height: 1,
      width: 1
    })

    menuLinks.forEach(link => tl.set(link, {
      opacity: 1,
      left: 0
    }))

    tl.set(menuModal, {
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      opacity: 0.95,
      onComplete: onComplete
    })
  }
}

let hamburgerNonExpanded = document.querySelector('header .non-expanded')
let hamburgerExpanded = document.querySelector('header .expanded')

hamburgerNonExpanded = new HamburgerOpen(hamburgerNonExpanded)
hamburgerExpanded = new HamburgerClose(hamburgerExpanded)
