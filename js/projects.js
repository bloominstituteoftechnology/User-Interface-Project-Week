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