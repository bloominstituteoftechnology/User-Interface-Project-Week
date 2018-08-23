class Carousel {
    constructor(element) {
        // Reference this carousel
        this.element = element;

        // Get both the left and right carousel buttons
        this.leftBtn = document.querySelector('.carousel .left-button');
        this.rightBtn = document.querySelector('.carousel .right-button');

        // Get the carousel images
        this.images = document.querySelectorAll('.carousel img');

        // Set up a current index int
        this.currentIndex = 0;

        this.card = document.querySelector(`.carousel-card[data-img="${this.currentIndex}"`);
        this.card.style = 'display: flex;';

        /**
         * Set up an overall image count int with the value of the max image count of the
         * carousel
         */
        this.imgCount = this.images.length;

        // Add click events to both of the left and right buttons
        this.leftBtn.addEventListener('click', () => {this.selectLeft();});
        this.rightBtn.addEventListener('click', () => {this.selectRight();});
        this.leftBtn.addEventListener('click', () => {this.select();});
        this.rightBtn.addEventListener('click', () => {this.select();});
        this.rightBtn.addEventListener('mouseenter', () => {this.show(this.rightBtn);});
        this.rightBtn.addEventListener('mouseleave', () => {this.hide(this.rightBtn);});
        this.leftBtn.addEventListener('mouseenter', () => {this.show(this.leftBtn);});
        this.leftBtn.addEventListener('mouseleave', () => {this.hide(this.leftBtn);});

        // Play the first image animation
        TweenMax.to(this.images[0], 0.6, {opacity: 1, ease: Power0.easeInOut});
        TweenMax.to(this.card, 0.6, {opacity: 1, ease: Power0.easeInOut});


    }

    show(element) {
        TweenMax.to(element, 0.2, {opacity: 1, ease: Power0.easeInOut});
    }

    hide(element) {
        TweenMax.to(element, 0.2, {opacity: 0, ease: Power0.easeInOut});
    }

    select() {
        clearInterval(myVar);
        myVar = setInterval( function() {carousel.selectRight();}, carouselMs);
    }

    // Selects and displays the previous image
    selectLeft() {
        // Decrease current index
        this.currentIndex--;

        // Check if at the end of the images and then loop to beginning
        if (this.currentIndex <= 0 - 1) {
            // Reset currentIndex to the last image
            this.currentIndex = 3;
        }

        // Loop though the images and set the image index to the current index
        for (let i = 0; i < this.imgCount; i++) {
            if (this.currentIndex === i) {
                // Play current image animation
                TweenMax.to(this.images[i], 0.6, {opacity: 1, ease: Power2.easeIn});

                // Carousel card
                this.card = document.querySelector(`.carousel-card[data-img="${i}"`);
                TweenMax.to(this.card, 0.6, {opacity: 1, ease: Power2.easeIn});
            }
            else {
                // Reverse every other image animtion
                TweenMax.to(this.images[i], 0.6, {opacity: 0, ease: Power2.easeIn});

                // Carousel card
                this.card = document.querySelector(`.carousel-card[data-img="${i}"`);
                TweenMax.to(this.card, 0.6, {opacity: 0, ease: Power2.easeIn});
            }
        }
    }

    // Selects and displays the next image
    selectRight() {
        // Increase current index
        this.currentIndex++;

        // Check if at the end of the images and then loop to beginning
        if (this.currentIndex > this.imgCount - 1) {
            // Reset currentIndex to the first image
            this.currentIndex = 0;
        }

        // Loop though the images and set the image index to the current index
        for (let i = 0; i < this.imgCount; i++) {
            if (this.currentIndex === i) {
                // Play current image animation
                TweenMax.to(this.images[i], 0.6, {opacity: 1, ease: Power2.easeIn});

                // Carousel card
                this.card = document.querySelector(`.carousel-card[data-img="${i}"`);
                TweenMax.to(this.card, 0.6, {opacity: 1, ease: Power2.easeIn});
            }
            else {
                // Reverse every other image animtion
                TweenMax.to(this.images[i], 0.6, {opacity: 0, ease: Power2.easeIn});

                // Carousel card
                this.card = document.querySelector(`.carousel-card[data-img="${i}"`);
                TweenMax.to(this.card, 0.6, {opacity: 0, ease: Power2.easeIn});
            }
        }
    }
}

// Creates a new variable carousel from the CSS class .carousel
let carousel = document.querySelector('.carousel');

// Makes a new Carousel (JS class) of carousel HTML element
carousel = new Carousel(carousel);

// Repeats the carousel images
let carouselMs = 4000;
myVar = setInterval( function() {carousel.selectRight();}, carouselMs);