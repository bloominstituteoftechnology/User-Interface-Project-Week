// JS goes here

class Nav {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.nav-open');
    this.content = this.element.querySelector('.nav-content');
    this.close = this.element.querySelector('.nav-close');
    this.button.addEventListener('click', event => this.toggleContent(event));
    this.close.addEventListener('click', event => this.toggleContent(event));
  }
  toggleContent() {
    this.content.classList.toggle('hidden');
    this.button.classList.toggle('hidden');
    this.close.classList.toggle('hidden');
  }
}
let links = document.querySelectorAll('.nav');
links = Array.from(links).map(link => new Nav(link));

// Services Tab Component

const buttons = document.querySelectorAll('.tab-link')
const contents = document.querySelectorAll('.tabs-item')

function buttonClick(event) {
  const dataBtn = event.target.dataset.tab;

  for(let i = 0; i < contents.length; i++) {
    const dataContent = contents[i].dataset.tab;

    if(dataBtn === dataContent) {
      contents[i].classList.remove('hidden');
    } else {
      contents[i].classList.add('hidden');
    }
  }
}

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClick);
}