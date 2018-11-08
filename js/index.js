// JS goes here
class NavDropdown {
	constructor(element) {
		this.element = element;
		this.button = this.element.querySelector('.nav-button');
		this.content = this.element.querySelector('.nav-content');
		this.closeButton = this.element.querySelector('.close-button')
		this.button.addEventListener('click', (event) => {
			this.toggleContent(event)
		});
		this.closeButton.addEventListener('click', (event) => {
			this.toggleContent(event)
		});
	}
	toggleContent() {
		this.content.classList.toggle('nav-hidden');
		this.button.classList.toggle('img-hide');
		this.closeButton.classList.toggle('img-hide');
	}
}
let navDropdowns = document.querySelectorAll('.nav-bar');
navDropdowns = Array.from(navDropdowns).map(navDropdown => new NavDropdown(navDropdown));
class TabLink {
	constructor(element) {
		this.element = element;
		this.data = this.element.dataset.tab;
		this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
		this.tabItem = new TabItem(this.itemElement);
		this.element.addEventListener('click', (event) => {
			this.select(event)
		});
	};
	select() {
		const links = document.querySelectorAll('.tabs-link');
		Array.from(links).forEach((link) => {
			link.classList.remove('tabs-link-selected')
		});
		this.element.classList.add('tabs-link-selected');
		this.tabItem.select();
	}
} 

//failed attempt at animation for the navbar
/*const navButton = document.querySelector('#nav-icon');
const navBar = document.querySelector('.main-nav');
const links = navBar.querySelectorAll('a');

let expanded = false;

function expandNavBar() {
  if (expanded === true) {
    TweenMax.to(navBar, 0.5, { ease: Power4.easeInOut, width: '0vw', height: '0vh' });
    links.forEach(i => TweenMax.to(i, 0.1, {ease: Bounce.easeInOut, opacity: 0}));
    navButton.src = 'img/nav-hamburger.png';
    expanded = false;
  }

  else {
    // navBar.classList.add('fullscreen-nav');
    TweenMax.to(navBar, 0.3, { ease: Power4.easeIn, width: '100vw', height: '100vh' });
    links.forEach(i => TweenMax.to(i, 0.41, {delay: 0.34, ease: Bounce.easeInOut, opacity: 0.9}));
    navButton.src = 'img/nav-hamburger-close.png';
    expanded = true;
  }
}

navButton.addEventListener('click', expandNavBar); */

//tabs
class TabItem {
	constructor(element) {
		this.element = element;
	}
	select() {
		let items = document.querySelectorAll('.tabs-item');
		Array.from(items).forEach((item) => {
			item.classList.remove('tabs-item-selected')
		});
		this.element.classList.add('tabs-item-selected');
	}
}
let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(links => new TabLink(links));
links[0].select();

// carousel js

class Carousel {
    constructor(element) {
        // assign this.element to the element reference
        this.element = element;
        let leftbutton = document.querySelector('.left-button');
        this.leftbutton = leftbutton;
        let rightbutton = document.querySelector('.right-button');
        this.rightbutton = rightbutton;
        let carouselImgs = document.querySelectorAll('.carousel img');
        this.carouselImgs = carouselImgs;
        let index = 0;
        this.index = index;
        this.leftbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselScrollLeft(event);
        });
        this.rightbutton.addEventListener('click', (event) => {
            // Call the select method you define below
            this.CarouselScrollRight(event);
        });
    }
    CarouselScrollLeft(event) {
        if (this.index > 0) {
            this.carouselImgs[this.index].style.display = 'none';
            //decrement through index
            this.index = this.index - 1;
            this.carouselImgs[this.index].style.display = 'flex';
        }
        else {
            this.carouselImgs[this.index].style.display = 'flex';
        }

    }
    CarouselScrollRight(event) {
        if (this.index < 3) {
            this.carouselImgs[this.index].style.display = 'none';
            //increment through index
            this.index = this.index + 1;
            this.carouselImgs[this.index].style.display = 'flex';
        }
        else {
            this.carouselImgs[this.index].style.display = 'flex';
        }
    }
}



