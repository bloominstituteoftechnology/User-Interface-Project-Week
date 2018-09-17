// JS goes here




//-------MOBILE NAV BAR ---------------//

var mobileData = window.matchMedia("(max-width: 500px)");

if(mobileData.matches){
// let menuOpenButtonMobile = document.querySelector(".openOpenButtonMobile");

let menuOpenBackgroundMobile = document.querySelector('.openNavBackgroundMobile');

let menuLinksMobile = document.querySelector(".navLinksMobile");

let burgerOpenMobile = document.querySelector(".openOpenButtonMobile");
let burgerCloseMobile = document.querySelector(".openCloseButtonMobile");
let siteLogoMobile = document.querySelector(".siteLogoMobile");

function toggleMenuOpenButtonMobile () {

 menuOpenBackgroundMobile.classList.toggle("openMenu");
 menuLinksMobile.classList.toggle("openMenu");
 burgerOpenMobile.style.display = "none !important";
 siteLogoMobile.style.left = "161.5px";
 burgerCloseMobile.style = "z-index: +2 !important; display: block; position: relative; left: 40px;";
 menuLinksMobile.style.position = "relative";
 menuLinksMobile.style.right = "260px";
}
function toggleMenuCloseButtonMobile () {
    menuOpenBackgroundMobile.classList.toggle("openMenu");
    menuLinksMobile.classList.toggle("openMenuMobile");
    burgerOpenMobile.style.display = "block";
    burgerCloseMobile.style.display = "none";
    siteLogoMobile.style.left = "50px";
}
burgerOpenMobile.addEventListener('click', () => {toggleMenuOpenButtonMobile();});
burgerCloseMobile.addEventListener('click', () => {toggleMenuCloseButtonMobile();});

}else {
//------------Desktop NavBar---------//

// let menuOpenButton = document.querySelector(".openOpenButton");

let menuOpenBackground = document.querySelector('.openNavBackground');

let menuLinks = document.querySelector(".navLinks");

let burgerOpen = document.querySelector(".openOpenButton");
let burgerClose = document.querySelector(".openCloseButton");
let siteLogo = document.querySelector(".siteLogo");

function toggleMenuOpenButton () {
 menuOpenBackground.classList.toggle("openMenu");
 menuLinks.classList.toggle("openMenu");
 burgerOpen.style.display = "none";
 burgerClose.style.display = "block";
 siteLogo.style.left = "81.5px";
 burgerClose.style.left = "121px";
}
function toggleMenuCloseButton () {
    menuOpenBackground.classList.toggle("openMenu");
    menuLinks.classList.toggle("openMenu");
    burgerOpen.style.display = "block";
    burgerClose.style.display = "none";
    siteLogo.style.left = "-30px";
}

burgerOpen.addEventListener('click', () => {toggleMenuOpenButton();});
burgerClose.addEventListener('click', () => {toggleMenuCloseButton();});
}