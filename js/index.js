// JS goes here


let menuOpenButton = document.querySelector(".openOpenButton");
console.log(menuOpenButton);

let menuOpenBackground = document.querySelector('.openNavBackground');
console.log(menuOpenBackground);

let menuLinks = document.querySelector(".navLinks");

let burgerOpen = document.querySelector(".openOpenButton");
let burgerClose = document.querySelector(".openCloseButton");
let siteLogo = document.querySelector(".siteLogo");

function toggleMenuOpenButton () {
 menuOpenBackground.classList.toggle("openMenu");
 menuLinks.classList.toggle("openMenu");
 burgerOpen.style.display = "none";
 burgerClose.style.display = "block";
}
function toggleMenuCloseButton () {
    menuOpenBackground.classList.toggle("openMenu");
    burgerOpen.style.display = "block";
    burgerClose.style.display = "none";
}

burgerOpen.addEventListener('click', () => {toggleMenuOpenButton();});
burgerClose.addEventListener('click', () => {toggleMenuCloseButton();});