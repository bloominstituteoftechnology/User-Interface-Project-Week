	
let btnEply = document.querySelector('.control-btn1');
btnEply.addEventListener('click', generatorEmployess);
btnFire = document.querySelectorAll('.control-btn2');

btnFire[0].addEventListener('click', addFire);
function addFire(){
	let fireRan = Math.floor(Math.random() * 10);
	let toFire = document.querySelectorAll('.fired');

	let bol;

	if (toFire[fireRan].classList.value.indexOf('show-fire') !== -1){
		alert('you already fired this employee');
	} else {
		toFire[fireRan].classList.add('show-fire');
		alert('The customer is always right');
	}
}


function generatorEmployess(){

	btnFire[0].classList.add('show-fire');

	class Employee {
	  constructor(attr){
	  	this.name = attr.name;
	    this.position = attr.position;
	    this.years_company = attr.years_company
	  }
	}

	let names = ['Fred', 'Susan', 'Joe', 'Jessica', 'Emily', 'Bob', 'Ryan', 'Steve', 'Rob', 'Kevin', 'Karen'];
	let positions = ['Janitor', 'Lifter', 'Welder', 'Smith', 'Operator', 'Crane', 'Supervisor', 'Manager', 'Slacker', 'Shift Supervisor'];
	let arr = [];

	for (let i = 0; i < 10; i++){
		let ranName = names[Math.floor(Math.random() * 10)];
		let ranPosish = positions[Math.floor(Math.random() * 10)];
		let yearsCompany = Math.floor(Math.random() * 15);
		let employee = new Employee ({
			'name': ranName,
			'position': ranPosish,
			'years_company': yearsCompany,
		});
		arr.push(employee);
	}


	let eArea = document.querySelectorAll('.emlpoyees-section');

	for (let i = 0; i < eArea.length; i++){
		let picLink;
		switch(arr[i]['name']){
			case 'Fred':
				picLink = 'fred.jpg';
			break;
			case 'Susan':
				picLink = 'susan.jpeg';
			break;
			case 'Joe':
				picLink = 'joe.jpeg';
			break;
			case 'Jessica':
				picLink = 'jessica.jpeg';
			break;
			case 'Emily':
				picLink = 'emily.jpeg';
			break;
			case 'Bob':
				picLink = 'bob.jpeg';
			break;
			case 'Ryan':
				picLink = 'ryan.jpeg';
			break;
			case 'Steve':
				picLink = 'steve.jpeg';
			break;
			case 'Rob':
				picLink = 'rob.jpeg';
			break;
			case 'Kevin':
				picLink = 'kevin.jpeg';
			break;
			case 'Karen':
				picLink = 'karen.jpeg';
			break;

		}

		eArea[i].innerHTML = `<img src="img/employees/${picLink}" class="pic"> <h2>${arr[i]['name']}, Position: ${arr[i]['position']}, ${arr[i]['years_company']} yrs</h2><p>Lorem ipsum dolor siing elitestie tincidunt nisi. Donec volutpat in est quis rutrum. Quisque fermentum mi turpis, at varius erat ullamcorper rutrum. Duis luctus feugiat ante, quis luctus neque. Donec ac lacus vitae velit eleifend tristique. Nam ultrices id enim et sodales. In blandit turpis nunc. Nullam nec fringilla turpis, sit amet pulvinar leo. Sed quis sapien orci.</p><img src="img/employees/fired.png" class="fired">`;
	}

}

// -----------------------------------------------------------

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














