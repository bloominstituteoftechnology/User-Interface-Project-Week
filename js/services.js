
// @index.js: const d = document

class TabButton {
  constructor(element){
    this.element  = element

    this.dataTab = element.dataset.choice


  }
}

let options = d.querySelectorAll('.option')
let first = new TabButton(options[0])
console.log('first:', first);
// console.log(options);
console.log(first.dataTab);
