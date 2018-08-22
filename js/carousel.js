class Carousel {
  constructor(element) {
    this.element = element;

    this.leftArrow = this.element.querySelector('.left-button')
    this.rightArrow = this.element.querySelector('.right-button')
    this.images = this.element.querySelectorAll('img')

    this.index = 0

    this.rightArrow.addEventListener('click', () => this.scrollRight())
    this.leftArrow.addEventListener('click', () => this.scrollLeft())

  }

  scrollRight() {
    this.images.forEach ( item => item.classList.remove('carousel-inactive-right',
     'carousel-active-right', 'carousel-inactive-left', 'carousel-active-left')
   )
    this.index++
    this.index %= length;

    this.index == 0 ?
    this.images[length-1].classList.toggle('carousel-inactive-right')
    :
    this.images[this.index-1].classList.toggle('carousel-inactive-right')

    this.images[this.index].classList.add('carousel-active-right')
  }

  scrollLeft() {
    this.images.forEach ( item => item.classList.remove('carousel-inactive-right',
     'carousel-active-right', 'carousel-inactive-left', 'carousel-active-left')
   )
    this.index--
    this.index < 0 ? this.index = length-1 : this.index %= length;

    this.index == length-1 ?
    this.images[0].classList.toggle('carousel-inactive-left')
    :
    this.images[this.index+1].classList.toggle('carousel-inactive-left')

    this.images[this.index].classList.add('carousel-active-left')
  }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel)
var length = carousel.images.length

let slide = true

// setTimeout(function() {return carousel.scrollRight()}, 3000)
// setInterval(carousel.scrollRight(), 9000)
// setInterval(carousel.scrollRight(), 9000)
// setInterval(carousel.scrollRight(), 9000)

// while (slide) {
//   console.log('slide');
//   setInterval(carousel.scrollRight(), 3000)
// }
