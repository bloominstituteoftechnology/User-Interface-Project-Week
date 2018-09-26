let toggleMenu = () => {
	menu.classList.add('menu-open');
}


let menu = document.querySelector('.menu');
console.log(menu);
//menu-button select
let menuButton = document.querySelector('.menu-button');
// add click event listener on menu-button
menuButton.addEventListener('click', (event) => {
	toggleMenu(event);
});



let closeButton = document.querySelector('span');
console.log(closeButton);

closeButton.addEventListener('click', (event) => {
		menu.style.display = "none";
		console.log("event   :   "+event.target);
});
