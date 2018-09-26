let toggleMenu = () => {
	//menu.classList.add('menu-open'); 
	//as menu-button click listener was working for single click added styles instead of classList.add();
	menu.style.display = "flex";
	menu.style.flexDirection = "column";
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
