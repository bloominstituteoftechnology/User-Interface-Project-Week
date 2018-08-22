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




class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item')
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');

links = Array.from(links).map(link => new TabLink(link));

links[0].select();


























