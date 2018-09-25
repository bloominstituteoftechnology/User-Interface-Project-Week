let toggleMenu = () => {
	menu.classList.toggle('menu-open');
}


let menu = document.querySelector('.menu');
console.log(menu);
//menu-button select
let menuButton = document.querySelector('.menu-button');
// add click event listener on menu-button
menuButton.addEventListener('click', (event) => {
	toggleMenu(event);
});

