class Carousel {
    constructor() {
        //Get our carousel element
        this.carousel = document.querySelector('.carousel');
        //Get our carousel left and right buttons
        this.leftBtn = this.carousel.querySelector('.left');
        this.rightBtn = this.carousel.querySelector('.right');
        //Get our carousel visual timer indicator
        this.timer = this.carousel.querySelector('.timer');
        //Add event listeners to our left and right buttons
        this.leftBtn.addEventListener('click', () => this.moveLeft());
        this.rightBtn.addEventListener('click', () => this.moveRight());
        //Retrieve all of our images/slides for desktop and mobile view. As we want the carousel to use images based on size to keep it mobile responsive.
        this.desktopSlides = this.carousel.querySelectorAll('.desktop-slides .slide');
        this.mobileSlides = this.carousel.querySelectorAll('.mobile-slides .slide');
        //Get Jumbotron text
        this.text = this.carousel.querySelector('h1');
        //Add resize event listener to the window, to make sure the Carousel image is always responsive
        window.addEventListener('resize', () => this.resizeSource());
        //Assign Current Slide by it's index in an array
        this.currentSlide = 0;
        this.startLoop();
    }

    resizeSource() {
        let screenW = window.innerWidth;
        if(screenW > 500) { //If screen size is larger than mobile, set the current image to the desktop version
            this.carousel.style.background = `bottom url("${this.desktopSlides[this.currentSlide].src}")`;
        } else if(screenW <= 500) { //If screen size is mobile, set the current image to the mobile version
            this.carousel.style.background = `bottom / cover url("${this.mobileSlides[this.currentSlide].src}")`;
        }
    }

    startLoop() {
        //Animate Timer, when it hits 100% width, we call the carousel to move right one slide.
        TweenMax.fromTo(this.timer, 5, {
            width: '0%'
        }, {
            width: '100%',
            onComplete: () => {
                this.moveRight();
            }
        });
    }

    moveRight() {
        if(!this.animating) {
            this.animating = true;
            let screenW = window.innerWidth;
            this.currentSlide += 1;
            if(this.currentSlide > this.desktopSlides.length - 1) {
                this.currentSlide = 0;
            }
            //If screen is larger than mobile, lets do a transition to the next Desktop sized slide
            if(screenW > 500) {
                TweenMax.fromTo(this.text, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.style.background = `bottom url("${this.desktopSlides[this.currentSlide].src}")`;
                        TweenMax.to(this.text, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                                this.startLoop();
                            }
                        });
                        TweenMax.to(this.timer, .5, {width: '0%'});
                    }
                })
            } else if(screenW <= 500) { //Else, we do a transition to the next Mobile sized slide
                TweenMax.fromTo(this.text, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.style.background = `bottom / cover url("${this.mobileSlides[this.currentSlide].src}")`;
                        TweenMax.to(this.text, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                                this.startLoop();
                            }
                        });
                    }
                })
            }
        }
        
    }

    moveLeft() {
        if(!this.animating) {
            TweenMax.killAll();
            TweenMax.to(this.timer, 0.3, {width: '0%'});
            this.animating = true;
            let screenW = window.innerWidth;
            this.currentSlide -= 1;
            if(this.currentSlide < 0) {
                this.currentSlide = this.desktopSlides.length - 1;
            }
            //If screen is larger than mobile, lets do a transition to the next Desktop sized slide
            if(screenW > 500) {
                TweenMax.fromTo(this.text, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.style.background = `bottom url("${this.desktopSlides[this.currentSlide].src}")`;
                        TweenMax.to(this.text, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                            }
                        });
                    }
                })
            } else { //Else, we do a transition to the next Mobile sized slide
                TweenMax.fromTo(this.text, .5, {
                    background: `rgba(0, 0, 0, 0)`
                }, {
                    background: `rgba(0, 0, 0, 1)`,
                    onComplete: () => {
                        this.carousel.style.background = `bottom / cover url("${this.mobileSlides[this.currentSlide].src}")`;
                        TweenMax.to(this.text, .5, {
                            background: `rgba(0, 0, 0, 0)`,
                            onComplete: () => {
                                this.animating = false;
                                this.startLoop();
                            }
                        });
                    }
                })
            }
        }
        
    }

    
}

//Create instance of Carousel
let pageCarousel = new Carousel();