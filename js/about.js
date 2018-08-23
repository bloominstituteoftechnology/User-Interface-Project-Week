
class TabImage {
  constructor(element){
    this.element  = element

    this.dataTab = element.dataset.img

    this.element.addEventListener('click', () => this.switch())
  }

  switch() {
    let i = Math.floor(images.indexOf(this)/3)
    console.log('i:', i);
    images.forEach(item => display[i].classList.remove(item.dataTab))
    display[i].classList.add(this.dataTab)
    paragraphs.forEach(item => {
      item.classList.add("inactive")
      this.dataTab === item.dataset.paragraph ?
      item.classList.remove('inactive') :
      ""
    }
    )
  }

}


const display = d.querySelectorAll('.main-img')

const paragraphs = d.querySelectorAll('article > p')

let images = d.querySelectorAll('.img')
images = Array.from(images).map(image => new TabImage(image))

console.log(images);
console.log(display);
console.log(paragraphs);
