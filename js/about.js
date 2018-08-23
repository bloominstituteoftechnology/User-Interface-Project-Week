
class TabImage {
  constructor(element){
    this.element  = element

    this.dataTab = element.dataset.img

    this.element.addEventListener('click', () => this.switch())
  }

  switch() {
    let i = Math.floor(images.indexOf(this)/3)
    images.slice(i*3, i*3+3).forEach(item => item.element.classList.remove('selected'))
    this.element.classList.add('selected')

    images.forEach(item => display[i].classList.remove(item.dataTab))
    display[i].classList.add(this.dataTab)

    paragraphs.slice(i*3, i*3+3).forEach(item => {
      item.classList.add("inactive")
      this.dataTab === item.dataset.paragraph ?
      item.classList.remove('inactive') :
      ""
    }
    )
  }

}


let display = Array.from(d.querySelectorAll('.main-img'))
// display = Array.from(display)

let paragraphs = Array.from(d.querySelectorAll('article > p'))
// paragraphs = Array.from(paragraphs)

let images = d.querySelectorAll('.img')
images = Array.from(images).map(image => new TabImage(image))

// console.log(images);
// console.log(display);
// console.log(paragraphs);
