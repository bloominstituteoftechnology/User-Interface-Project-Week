class Carousel {
	constructor(element){
		this.element = element;
		this.elementItems = document.querySelectorAll('.carousel-item');
		let items = Array.from(this.elementItems)
		this.btns = document.querySelectorAll('.btn');
		this.btns[0].addEventListener('click', () => {this.left(this.btns, items)})
		this.btns[1].addEventListener('click', () => {this.right(this.btns, items)})
		this.elementItems[0].classList.add('show-project');
	}
	left(btns, items){
		let index;
		for(let i = 0; i < items.length; i++){
			if(items[i].classList.value.indexOf('show-project') !== -1){
				index = items.indexOf(items[i]);
			}
		}

		if (index === 0){
			TweenMax.to(items[index], 0, {
				onComplete:changeClasses,
				onCompleteParams: [items[index], items[4]]
			});
		} else {
			TweenMax.to(items[index], 0, {
				onComplete:changeClasses,
				onCompleteParams: [items[index], items[index - 1]]
			});
		}

		function changeClasses(currentItem, nextItem){
			currentItem.classList.remove('show-project');
			nextItem.classList.add('show-project');
			TweenMax.from(nextItem, 2.5, {opacity: 0.5, x:100});
		}
	}//end of left

	right(btns, items){
		let index;
		for(let i = 0; i < items.length; i++){
			if(items[i].classList.value.indexOf('show-project') !== -1){
				index = items.indexOf(items[i]);
			}
		}

		if (index === 4){
			TweenMax.to(items[index], 0, {
				onComplete:changeClasses,
				onCompleteParams: [items[index], items[0]]
			});
		} else {
			TweenMax.to(items[index], 0, {
				onComplete:changeClasses,
				onCompleteParams: [items[index], items[index + 1]]
			});
		}

		function changeClasses(currentItem, nextItem){
			currentItem.classList.remove('show-project');
			nextItem.classList.add('show-project');
			TweenMax.from(nextItem, 2.5, {opacity: 0.5, x:-100});
		}
	}//end of left


}//end of class Carousel



let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(element => new Carousel(element));



// -----------------------------------------------------------

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

// -----------------------------------------------------------














