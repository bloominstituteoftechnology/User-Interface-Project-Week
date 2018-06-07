// JS goes here
class ServiceButtonRow {
  constructor(element) {
    this.element = element;
    this.buttons = this.element.querySelectorAll('.service-btn');
    this.buttons = Array.from(this.buttons).map(eachbutton => {
      return new ButtonService(eachbutton, this);
    });
    this.activeLink = this.buttons[0];
    this.init();
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return document.querySelector(`.button-content[data-tab="${data}"]`);

  }

}

class ButtonService {
  constructor(element, parent) {
    this.element = element;
    this.serviceButtonRow = parent;
    this.buttonContent = parent.getTab(this.element.dataset.tab);
    this.buttonContent = new ButtonContent(this.buttonContent);
    this.element.addEventListener('click', () => {
      this.serviceButtonRow.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add('button-selected')
    this.buttonContent.select();
  }

  deselect() {
    this.element.classList.remove('button-selected');
    this.buttonContent.deselect();
  }
}

class ButtonContent {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('button-content-selected');
  }

  deselect() {
    this.element.classList.remove('button-content-selected');
  }
}


let serviceButtonsRow= document.querySelectorAll('.service-btn-row');
serviceButtonsRow  = Array.from(serviceButtonsRow).map( item => new ServiceButtonRow(item));

let hamburgerBtn = document.querySelector('.hamburger-btn');
let navigationExpanded = document.querySelector('.navigation-expanded');
let closeBtn =  document.querySelector('.close-btn');
let navigationBar = document.querySelector('.navigation');

hamburgerBtn.addEventListener("click", function(){
	navigationExpanded.style.display = "block";
});


closeBtn.addEventListener("click", function(){
        navigationExpanded.style.display = "none";
});

document.addEventListener("scroll", (e) => {
	if (window.scrollY > 0) {
		navigationBar.style.background = "#9DA7B1";
		navigationBar.style.opacity = "0.95";
	} else {
		navigationBar.style.background = "transparent";
	}
});



var picture = document.getElementById("picture");
var viewPortWidth = $(window).width();


if (viewPortWidth >= 1024){
TweenLite.to(picture, 4, {width:"750px", height:"750px"});
}

//else{
//TweenLite.to(picture, 1, {width:"300px", height:"300px"});	
//}

