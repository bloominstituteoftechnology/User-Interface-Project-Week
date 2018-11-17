// // JS goes here

// const fadeAbsolutes = () => {
//    h1Home.classList.remove('.h1Home')
// }

// const addAbsolutes  = () => {
// 	h1Home.classList.add('')
// }

// const h1Home = document.querySelector(".")


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
	// close.classList.add("closer--open");
}

const openCloser = () => {
	close.classList.add("closer--open");
}

const closeMenu = () => {
	menu.classList.remove("menu--open");
	// close.classList.remove("closer--open");
}

const closeCloser = () => {
	close.classList.remove("closer--open");
}

const menu = document.querySelector('.menu-content');

const close = document.querySelector('.the-closure');

const menuButton = document.querySelector('.menu-button');

const closeButton = document.querySelector('.close-button')

menuButton.addEventListener('click', () => {
	openMenu();
	console.log("button was clicked")
});

// menuButton.addEventListener('click', () => {
// 	openCloser();
// 	console.log("button was clicked")
// });

closeButton.addEventListener('click', () => {
	closeMenu();
	console.log('menu closed')
});

// closeButton.addEventListener('click', () => {
// 	closeCloser();
// 	console.log('menu closed')
// });



