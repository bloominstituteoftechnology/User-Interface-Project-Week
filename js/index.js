// JS goes here
class DropDown {
    constructor(element){
      this.element = element;
    }
  
    speaks(){
      console.log('Bark!');
    }
  }
  
  const lab = new Dog('Labrador');
  const poodle = new Dog('Poodle');

  const buttons = document.querySelectorAll('.button');
  class Button {
    constructor(element){
      this.element = element;
      this.element.addEventListener('click', () => { this.buttonClick() });
    }
    buttonClick(event){
      console.log('button clicked!');
    } 
  }