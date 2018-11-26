// JS goes here
class TabButton {
	constructor(element){
		this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
		this.entry = new TabDisplay(this.itemElement);
		this.element.addEventListener('click', () => this.displayChange());
  }
  
	displayChange(){
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(x => x.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.entry.selectTab();
	}
}

class TabDisplay {
	constructor(element){
		this.element = element;
	}
	selectTab(){
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(x => x.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
	}
}

let links = document.querySelectorAll('.tabs-link').forEach(x => new TabButton(x));

// Navigation
const navBar = document.querySelector('.nav-container');
[logo, navButton, nav] = navBar.children;
navButton.addEventListener('click', () => {
    if (!navBar.classList.contains('active-nav')){
        navBar.classList.add('active-nav');
        logo.style.marginTop = '13px';
        navButton.style.marginTop = '14.5px';
        navButton.src = 'img/nav-hamburger-close.png';
        nav.style.display = 'block';
    } else {
        navBar.classList.remove('active-nav');
        logo.style.marginTop = '0';
        navButton.style.marginTop = '0';
        navButton.src = 'img/nav-hamburger.png';
        nav.style.display = 'none';
    }
});
