let hamburgerButton = document.querySelector('.hamburger-button');
let navOverlay = document.querySelector('.nav-overlay');
let navVisibility = false;

//////////////////////////////////
// TOGGLE NAVIGATION VISIBILITY //
////////////////////////////////// 
hamburgerButton.addEventListener('click', () => {
	console.log(navOverlay.classList);
	navOverlay.classList.toggle("nav-overlay-hidden");
	hamburgerButton.classList.toggle("hamburger-is-x")
	navVisibility = !navVisibility;
})

//////////////////////////////////////////////////////
// CHANGE HAMBURGER ICON TO X WHILE OVERLAY VISIBLE //
//////////////////////////////////////////////////////
