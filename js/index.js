// JS goes here





let nav = document.getElementById("topNav");
let main = document.getElementById("main");
let menu = document.getElementsByClassName("menuitems");
let close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", () => {
  let menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

 function navToggle()  {	
	//to close
	if (nav.style.height <= "400px") {
	nav.style.height = "50px";
	main.style.marginTop = "50px";
	
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};
    	document.body.style.backgroundColor = "rgba(ffffff)";
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "400px";
	main.style.marginTop = "275px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
    	document.body.style.backgroundColor = "rgba(ffffff)";
	
	}

};

class Tabs {
    constructor(element) {
        this.element = element;
        this.buttons = this.element.querySelectorAll('.tabs-button');
        this.buttons = Array.from(this.buttons).map( button => {
            return new TabsButton(button, this);
        });
        this.activeButton = this.buttons[0];       
        this.init();
    }
    init () {
        this.activeButton.select();
    }
    updateActive(newActive) {
        this.activeButton.deselect();
        this.activeButton = newActive;
    }
    getButton(data) {
        return this.element.querySelector(`.tab-content[data-tab='${data}']`);
    }
}
class TabsButton {
    constructor(button, parent) {
        this.button = button;
        this.tabs = parent;
        this.tabsItem = parent.getButton(this.button.dataset.tab);
        this.tabsItem = new TabsContent(this.tabsItem);
        this.button.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }

    select() {
        this.button.classList.add('tabs-button-selected');
        this.tabsItem.select();
    }

    deselect() {
        this.button.classList.remove('tabs-button-selected');
        this.tabsItem.deselect();
    }
}

class TabsContent {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add('tab-content-selected');
    }
    deselect() {
        this.element.classList.remove('tab-content-selected');
    }
}
let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));