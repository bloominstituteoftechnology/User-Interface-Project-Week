class Button {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.content = document.querySelector(`.button-item[data-tab='${this.data}']`);
    this.element.addEventListener('click', () => {this.buttonClick()});
  }

  buttonClick () {
    document.querySelectorAll('.button-item').forEach(content => content.classList.remove('selected'));
    
    this.content.classList.add('selected');
  }
}

// class TabItem {
//   constructor (element) {
//     this.element = element;
//   }

//   buttonClick {
//     const content = document.querySelectorAll('.button-item');

//     content.forEach((item) => {
//       item.classList
//     })
//   }
// }



let buttons = document.querySelectorAll('.button');
buttons.forEach(button => new Button(button));