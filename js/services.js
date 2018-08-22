
// @index.js: const d = document

class TabButton {
  constructor(element){
    this.element  = element

    this.dataTab = element.dataset.choice

    this.element.addEventListener('click', () => this.switch())
  }
  switch() {
    options.forEach(item => item.element.classList.remove('active'));
    this.element.classList.add('active')
    title.innerText = event.currentTarget.children[0].innerText
    options.forEach( item => image.classList.remove(item.dataTab))
    image.classList.add(this.dataTab)

  }
}

const title = d.querySelector('h2')
const image = d.querySelector('.img')

let options = d.querySelectorAll('.option')
options = Array.from(options).map(option => new TabButton(option))
// console.log('first:', first);
// console.log(options);
