let hamburgerButton = document.querySelector('.hamburger-button');
let navOverlay = document.querySelector('.nav-overlay');
let navVisibility = false;

//////////////////////////////////
// TOGGLE NAVIGATION VISIBILITY //
////////////////////////////////// 
hamburgerButton.addEventListener('click', () => {
	navOverlay.classList.toggle("nav-overlay-hidden");
	//////////////////////////////////////////////////////
	// CHANGE HAMBURGER ICON TO X WHILE OVERLAY VISIBLE //
	//////////////////////////////////////////////////////	
	hamburgerButton.classList.toggle("hamburger-is-x")
	navVisibility = !navVisibility;
})

/////////////////////////////////////////
// GET THE HEADER TO FADE BG ON SCROLL //
/////////////////////////////////////////
let navBackground = document.querySelector('.my-nav-bar');
window.onscroll = function() {
	if(window.pageYOffset === 0){
		navBackground.classList.remove('nav-background')
	} else {
		navBackground.classList.add('nav-background')
	}
};