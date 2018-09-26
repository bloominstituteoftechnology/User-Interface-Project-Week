class Carousel {
    constructor(element){
        this.element = element;
        this.pics = document.querySelectorAll('.cImg');

        this.left = this.element.firstElementChild;
        this.left.addEventListener('click', () => {this.goLeft()});

        this.right = this.element.lastElementChild;
        this.right.addEventListener('click', () => {this.goRight()})
        this.i = 0;
    }

    goLeft(){
        if (this.i === 0) {
            this.i = 3;
        }
        else {
            this.i--;
        }
        this.pics.forEach(img => {
            img.style.visibility = 'hidden';
        });
        this.pics[this.i].style.visibility = 'visible';
    };

    goRight(){
        if (this.i === 3) {
            this.i = 0;
        }
        else {
            this.i++;
        }
        this.pics.forEach(img => {
            img.style.visibility = 'hidden';
        });
        this.pics[this.i].style.visibility = 'visible';
    };
}

let carousel = document.querySelector('.carousel');
let imgCarousel = new Carousel(carousel);
imgCarousel.pics.forEach(item => item.visibility = 'hidden');
imgCarousel.pics[0].style.visibility = 'visible';








// Navigation JS -----------------------------------------
let dropdown = document.querySelector(".dropdown-button");
let content = document.querySelector(".dropdown-content");
let header = document.querySelector("header");
content.style.opacity = '0';
content.style.visibility = 'hidden';

dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "./img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "./img/nav-hamburger.png";
        TweenMax.to(content, 0.5, {autoAlpha:0, y:0});
        header.style.opacity = "1";

    }
    else {
        TweenMax.to(content, 0.5, {autoAlpha:0.98, y:0});
        header.style.opacity = "0.98";
    }
});

// Page Load Effect ----------------------------------------
let bkgd = document.querySelector('.hero');
let heroCopy = document.querySelector('.hero-copy');
TweenMax.from(bkgd, .8, {autoAlpha:0, y:-50, ease: Circ.easeOut,});
TweenMax.from(heroCopy, .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});