
class TabImage {
  constructor(element){
    this.element  = element

    this.dataTab = element.dataset.img

    this.element.addEventListener('click', () => this.switch())
  }
  switch() {
    images.slice(0,3).forEach(item => display.classList.remove(item.dataTab))
    display.classList.add(this.dataTab)
  }
}


const display = d.querySelector('.main-img')

let images = d.querySelectorAll('.img')
images = Array.from(images).map(image => new TabImage(image))

console.log(images);
console.log(display);
