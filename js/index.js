// JS goes here
const navBar = document.querySelector('.nav-bar');
[logo, navButton, nav] = navBar.children;
navButton.addEventListener('click', () => {
    if (!navBar.classList.contains('active-nav-bar')){
        navBar.classList.add('active-nav-bar');
        logo.style.marginTop = '13px';
        navButton.style.marginTop = '14.5px';
        navButton.src = 'img/nav-hamburger-close.png';
        nav.style.display = 'block';
    } else {
        navBar.classList.remove('active-nav-bar');
        logo.style.marginTop = '0';
        navButton.style.marginTop = '0';
        navButton.src = 'img/nav-hamburger.png';
        nav.style.display = 'none';
    }
});

class TabButton {
	constructor(element){
		this.element = element;
		this.data = this.element.dataset.tab;
		this.entry = new TabDisplay(document.querySelector(`.tab-entry[data-tab='${this.data}']`));
		this.element.addEventListener('click', () => this.displayChange());
	}
	displayChange(){
		if (this.element.classList.contains('active-btn')) return;
		document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active-btn'));
		this.element.classList.add('active-btn');
		this.entry.selectTab();
	}
}

class TabDisplay {
	constructor(element){
		this.element = element;
		this.data = this.element.dataset.tab;
	}
	selectTab(){
		document.querySelectorAll('.tab-entry').forEach(x => x.classList.remove('active-tab'));
		this.element.classList.add('active-tab');
	}
}

const tabButtons = document.querySelectorAll('.tab-btn').forEach(x => new TabButton(x));
