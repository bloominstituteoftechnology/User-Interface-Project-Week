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
        captions.forEach(item => item.style.visibility="hidden");
        
        this.pics[this.i].style.visibility = 'visible';
        captions[this.i].style.visibility = 'visible';
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
        captions.forEach(item => item.style.visibility="hidden");
        
        this.pics[this.i].style.visibility = 'visible';
        captions[this.i].style.visibility = 'visible';
    };
}

let carousel = document.querySelector('.carousel');
let imgCarousel = new Carousel(carousel);
imgCarousel.pics.forEach(item => item.style.visibility = 'hidden');
imgCarousel.pics[0].style.visibility = 'visible';

let captions = document.querySelectorAll('.caption');
captions.forEach(item => item.style.visibility = 'hidden');
captions[0].style.visibility = 'visible';


// Page Load Effect ----------------------------------------
TweenMax.from('.hero', .8, {autoAlpha:0, y:-50, ease: Circ.easeOut,});
TweenMax.from('.hero-copy', .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});

let tl = new TimelineMax();
tl.from('.intro', .4, {delay: .8 , autoAlpha:0, y:-20, ease: Circ.easeOut,});
tl.from('.carousel', .4, {autoAlpha:0, y:-20, ease: Circ.easeOut,});
tl.from('.captions', .4, {autoAlpha:0, y:-20, ease: Circ.easeOut,});

// Picture Replacement for Mobile ----------------------------
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let bkgd = document.querySelector('.hero');

    if (width <= 500) {
        bkgd.style.backgroundImage = "url('./img/projects/projects-mobile-jumbotron.png')";
    }

    else if (width > 500) {
        bkgd.style.backgroundImage = "url('./img/projects/projects-jumbotron.png')";
    }
});