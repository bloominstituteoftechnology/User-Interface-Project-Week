class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.dropdown-button');
        this.content = this.element.querySelector('.dropdown-content');
        this.button.addEventListener('click', () => {
            return this.toggleContent();
        })
    }
    toggleContent() {
        this.content.classList.toggle('dropdown-hidden')
    }
}



let dropdowns = document.querySelectorAll('.dropdown')
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

var newsrc = "./img/nav-hamburger.png";

//hamburger function img change
function changeImage() {
  if ( newsrc == "./img/nav-hamburger.png" ) {
    document.images["pic"].src = "./img/nav-hamburger-close.png";
    document.images["pic"].alt = "Close";
    newsrc  = "./img/nav-hamburger-close.png";
  } else if (newsrc == "./img/nav-hamburger-close.png") { 
    document.images["pic"].src = "./img/nav-hamburger.png";
    document.images["pic"].alt = "Open";
    newsrc  = "./img/nav-hamburger.png";
  } 
}