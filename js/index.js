// JS goes here
// Over lay -- Desktop & Mobile
const hamburgerButton = document.querySelector('.menu-button-open');
const closeButton = document.querySelector('.menu-button-close');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', function(event){
	     let target = event.target
	     target.classList.add("button-close");
	     closeButton.classList.add('button-open');
         menu.classList.add("menu-open");
          event.stopPropagation();

        
});
closeButton.addEventListener('click', function(event){
	    let target = event.target;
	    hamburgerButton.classList.remove('button-close');
	    target.classList.remove('button-open');
	    menu.classList.remove("menu-open");
});

// Adding .active class to the anchor elements using - components

class Anchors {
	constructor(el) {
		this.el = el;
		this.el.addEventListener('click', () => {this.clickAnchor()})
	}
	clickAnchor() {
		// const links = menu.querySelectorAll('a');
		// links.forEach(function(element){
		// 	element.classList.remove('active');
		// });
		this.el.classList.add('active');
		console.log('working');
	}
}

let anchors = menu.querySelectorAll('a');

anchors = Array.from(anchors).map(anchor =>{ return new Anchors(anchor)});
console.log(anchors);