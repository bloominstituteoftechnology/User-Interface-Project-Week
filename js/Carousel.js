class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.peopleTabs = this.carousel.querySelectorAll('.people-tabs');
    console.log(this.peopleTabs);
    this.leftButton.addEventListener('click', () => {
      this.changeImg('left');
    });
    this.rightButton.addEventListener('click', () => {
      this.changeImg('right');
    });
    this.currentIndex = 0;
    console.log(this.currentIndex);
    this.peopleTabs[0].style.display = 'flex';
  }

  changeImg(direction) {
    console.log(direction);
    const peopleTabs = this.carousel.querySelectorAll('.people-tabs');
    peopleTabs.forEach((peopleTab) => (peopleTab.style.display = 'none'));
    console.log(peopleTabs.length);
    if (direction === 'right') {
      this.currentIndex === peopleTabs.length - 1
        ? (this.currentIndex = 0)
        : (this.currentIndex = this.currentIndex + 1);
      peopleTabs[this.currentIndex].style.display = 'flex';
    } else if (direction === 'left') {
      this.currentIndex === 0
        ? (this.currentIndex = peopleTabs.length - 1)
        : (this.currentIndex = this.currentIndex - 1);
      peopleTabs[this.currentIndex].style.display = 'flex';
    }
    console.log(this.currentIndex);
  }
}

let carousel = document.querySelector('.carousel');
// console.log(carousel);
carousel = new Carousel(carousel);
// console.log(carousel);
