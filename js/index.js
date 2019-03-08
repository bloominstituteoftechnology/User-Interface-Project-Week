// JS goes here

class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.hamburger')
    this.closebutton = this.element.querySelector('.close')
    this.content = this.element.querySelector('.nav-content');
    this.closebuttoncontent = document.querySelector('.nav-content');


    this.button.addEventListener('click', (event) => { this.toggleContent(event) })
    this.closebutton.addEventListener('click', (event) => { this.closeContent(event) })

  }

  toggleContent(event) {
    this.content.classList.toggle('hidden');
  }

  closeContent(event) {
    this.closebuttoncontent.classList.toggle('hidden');
  }
}

let dropdowns = document.querySelectorAll('.menucontainer');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
