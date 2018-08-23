// JS goes here
class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => { this.toggleContent()});
  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }

}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

let image_tracker = 'h';
function change() {
	let image = document.getElementById('hamb');
	if(image_tracker === 'h') {
		image.src = 'img/nav-hamburger-close.png';
		image_tracker = 'c';
	} else {
		image.src = 'img/nav-hamburger.png';
		image_tracker = 'h';
	}
	

}






























