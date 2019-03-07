// JS goes here
// class Dropdown {
//   constructor(dropdown) {
//     this.dropdown = dropdown;
//     this.button = this.dropdown.querySelector('.hamburger');
//     this.closeButton = this.dropdown.querySelector('.close');
//     this.content = this.dropdown.querySelector('.site-nav');
//     this.closeBtnContent = document.querySelector('.close');

//     this.button.addEventListner('click', (event) => { this.toggleContent(event) })
//     this.closeButton.addEventListner('click', (event) => { this.closeContent(event) })
//   }

//   toggleContent(event) {
//     this.content.classList.toggle('toggle-on');
//   }
//   closeContent(event) {
//     this.closeBtnContent.classList.toggle('toggle-on');
//   }
// }



// let dropdowns = document.querySelectorAll('.menucontainer');
// dropdowns.Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

class Dropdown {
  constructor(dropdown) {
    this.button = dropdown.querySelector('.hamburger');
    this.closeButton = dropdown.querySelector('.close');
    this.content = dropdown.querySelector('.site-nav');
    this.closeBtnContent = dropdown.querySelector('.close');

    this.button.addEventListner('click', () => this.toggleContent());
    this.closeBtnContent.addEventListner('click', () => this.closeContent());
  }

  toggleContent() {
    this.button.classList.toggle('toggle-on');
    this.content.classList.toggle('toggle-on');
  }

  closeBtnContent() {
    this.closeBtnContent.classList.toggle('toggle-on');
  }
}



const dropdowns = document.querySelectorAll('.menucontainer');
dropdowns.forEach(dropdown => new Dropdown(dropdown));