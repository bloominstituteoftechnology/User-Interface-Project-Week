// JS goes here

// class Overlay {
//     constructor(element) {
// 	this.element = element;
// 	this.button = this.element.querySelector('.main-nav');
// 	this.content = this.element.querySelector('.overlay');
// 	this.button.addEventListener('click', () => {
// 	    this.toggleContent();
// 	    console.log('overlay has been toggled');
// 	});
//     }
//     toggleContent() {
// 	this.content.classList.toggle('overlay');
//     }
// }


function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("xmarks").style.display = "block";
    document.getElementById("ham").style.display = "none";
    console.log('should display');
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("xmarks").style.display = "none";
    document.getElementById("ham").style.display = "block";
}
