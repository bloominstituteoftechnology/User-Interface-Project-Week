// // JS goes here

// const openMenu = () => {
// 	menu.classList.add("menu--open");
// }

// const closeMenu = () => {
// 	menu.classList.remove("menu--open");
// }

// // const fadeAbsolutes = () => {
// //    h1Home.classList.remove('.h1Home')
// // }

// // const addAbsolutes  = () => {
// // 	h1Home.classList.add('')
// // }


// const menu = document.querySelector('.menu-content');

// const menuButton = document.querySelector('.menu-button');
// const closeButton = document.querySelector('.close-button');



// menuButton.addEventListener('click', () => {
// 	openMenu();
// 	console.log("button was clicked")
// });

// closeButton.addEventListener('click', () => {
// 	closeMenu();
// 	console.log('menu closed')
// });



const openMenu = () => {
	menu.classList.add("menu--open");

}

const closeMenu = () => {
	menu.classList.remove("menu--open");
}

const menu = document.querySelector('.menu-content');

const menuButton = document.querySelector('.menu-button');

const closeButton = document.querySelector('.close-button')

menuButton.addEventListener('click', () => {
	openMenu();
	console.log("button was clicked")
});

closeButton.addEventListener('click', () => {
	closeMenu();
	console.log('menu closed')
});



