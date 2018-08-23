let btnEply = document.querySelector('.control-btn1');
btnEply.addEventListener('click', generatorEmployess);
btnFire = document.querySelectorAll('.control-btn2');

btnFire[0].addEventListener('click', addFire);
function addFire(){
	let fireRan = Math.floor(Math.random() * 10);
	let toFire = document.querySelectorAll('.fired');

	if (toFire[fireRan].classList.value.indexOf('show-fire') !== -1){
		let possible = [];
		toFire.forEach(function(employee){
			if (employee.classList.value.indexOf('show-fire') === -1){
				possible.push(employee);
			}
		});
		let newRan = Math.floor(Math.random() * possible.length);
		console.log(newRan);
		console.log(possible);
		possible[newRan].classList.add('show-fire');
		TweenMax.from(possible[newRan], 2.5, {opacity: 0.5, x:100, rotation: 360});
	} else {
		toFire[fireRan].classList.add('show-fire');
		TweenMax.from(toFire[fireRan], 2.5, {opacity: 0.5, x:100, rotation: 360});
	}
}


function generatorEmployess(){

	let employs = document.querySelectorAll('.emlpoyees-section');
	employs.forEach(function(item){
		item.classList.add('show-emps');
		
	})
	TweenMax.staggerFrom(employs, 2, {opacity: 0.5, rotation: 180, scale: -1}, .2);
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
		let yearsCompany = Math.floor(Math.random() * 15) + 1;
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