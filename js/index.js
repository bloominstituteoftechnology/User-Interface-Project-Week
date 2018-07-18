// JS goes here
class Dropdown {
    constructor(element){
        this.element=element;
        this.button=this.element.querySelector('.dropdown-button');
        this.button.addEventListener("click", ()=> {this.toggleContent()});
    }
    toggleContent() {
        this.toggleContent.classList.toggle("dropdown-hidden");

    }
}
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));



  
  