// JS goes here
/************Expanded Menu********** */
class Menu{
  constructor(element){
    this.element = element;
    this.button = document.querySelector('header img');
    this.button.addEventListener('click', () =>{this.expand()});
  }

  expand(){
   this.element.classList.toggle('show');
  }
}

let nav = document.querySelector('nav')
nav = new Menu(nav)