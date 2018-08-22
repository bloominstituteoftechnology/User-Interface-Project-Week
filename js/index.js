let navBtn = document.querySelector('.btn-nav');
let overlay = document.querySelectorAll('.overlay');
let navClose = document.querySelector('.btn-close');

navBtn.addEventListener('click', showNav);

function showNav(){
	overlay[0].classList.remove('hide-nav')
	overlay[0].classList.add('show-nav');
	navBtn.style.display = "none";
	navClose.style.display = "block";
}

navClose.addEventListener('click', function(){
	overlay[0].classList.add('hide-nav');
	navBtn.style.display = "block";
	navClose.style.display = "none";
	setTimeout(function(){ overlay[0].classList.remove('show-nav') }, 1500);
	navBtn.removeEventListener("click", showNav);
	setTimeout(function(){navBtn.addEventListener('click', showNav)}, 1500);
});


// -----------------------------------------------------------


class TabLink {
	constructor(tab){
		this.tab = tab;
		this.tabData = this.tab.dataset.tab;
		tab.addEventListener('click', () => {this.select(this.tabData)})
	}
	select(data){

		let mainContent = document.querySelectorAll('.main-content');
		let tabs = document.querySelectorAll('.btn-s');

		mainContent.forEach(function(item){
			item.classList.remove("show-tabs");
		});

		tabs.forEach(function(item){
			item.classList.remove('btn-new-back')
		});
		
		switch(data){
			case "1":
				mainContent[0].classList.add("show-tabs");
			break;
			case "2":
				mainContent[1].classList.add("show-tabs");
			break;
			case "3":
				mainContent[2].classList.add("show-tabs");
			break;
			case "4":
				mainContent[3].classList.add("show-tabs");
			break;
		}
		this.tab.classList.add('btn-new-back');
	}
}


let tabLinks = document.querySelectorAll('.btn-s');
tabLinks = Array.from(tabLinks).map(tab => new TabLink(tab));
tabLinks[0].select("1");



