const toggleMenuOpen = () => {
    //console.log("Toggled menu open.");

    TweenLite.to(menuButton, 1, {rotation:-90});
    menu.classList.toggle('active');
    menuButton.classList.toggle('not-active');
    navLogo.classList.toggle('not-active');
}

const toggleMenuShut = () => {
    //console.log("Toggled menu shut.");

    menu.classList.toggle('active');
    menuButton.classList.toggle('not-active');
    navLogo.classList.toggle('not-active');
    TweenLite.to(menuButton, 1, {rotation:0});
}
  
const menu = document.querySelector('.nav-text-extended');
const menuButton = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.nav-extended-topbar img');
const navLogo = document.querySelector('.nav-logo');

menuButton.addEventListener('click', (e) => {
  
    //console.log("Calling the toggleMenu const.");
    toggleMenuOpen();
});

menuCloseButton.addEventListener('click', (e) => {
  
    //console.log("Calling the toggleMenu const.");
    toggleMenuShut();
});


// Animations
const S_JLogo = document.querySelector('.nav-logo');

window.addEventListener('load', (event) => {
    //console.log("Animating nav logo.");
    TweenMax.to(".nav-logo", 2, {x:50, opacity: 1});
});

window.addEventListener('scroll', (event) => {
    //console.log("Animating nav logo.");
    TweenMax.to(".nav-logo", 2, {x:0, opacity: 1});
});

const hamburger = document.querySelector('.hamburger');
window.addEventListener('load', (event) => {
    //console.log("Animating hamburger.");
    TweenMax.to(".hamburger", 2, {x:-50, opacity: 1});
});

window.addEventListener('scroll', (event) => {
    //console.log("Animating hamburger.");
    TweenMax.to(".hamburger", 2, {x:0, opacity: 1});
});

class AText {
    constructor(aLink){
        this.element = aLink;
        //console.log(this.element);

        this.element.addEventListener('mouseover', (event) => {
            //console.log("Moving nav text.");
            TweenMax.to(this.element, 2, {x:25, opacity: 1});
        });
        
        this.element.addEventListener('mouseleave', (event) => {
            //console.log("Moving nav text back.");
            TweenMax.to(this.element, 2, {x:0, opacity: 1});
        });
    }
  
    moveATag(){
        TweenMax.to(".nav-text-extended a", 2, {x:25, opacity: 1});
    }

    moveATagBack() {
        TweenMax.to(".nav-text-extended a", 2, {x:0, opacity: 1});
    }
  }

let aLinks = document.querySelectorAll('.nav-text-extended a');
aLinks = Array.from(aLinks).map( aLinks => new AText(aLinks));