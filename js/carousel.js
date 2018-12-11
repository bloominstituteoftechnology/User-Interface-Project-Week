class Carousel {
    constructor() {
        //Get our carousel element
        this.carousel = document.querySelector('.carousel');
        //Get our carousel left and right buttons
        this.leftBtn = this.carousel.querySelector('.left');
        this.rightBtn = this.carousel.querySelector('.right');
        //Add event listeners to our left and right buttons
        this.leftBtn.addEventListener('click', () => this.moveLeft());
        this.rightBtn.addEventListener('click', () => this.moveRight());
        //Retrieve all of our images/slides for desktop and mobile view. As we want the carousel to use images based on size to keep it mobile responsive.
        this.desktopSlides = this.carousel.querySelectorAll('.desktop-slides .slide');
        this.mobileSlides = this.carousel.querySelectorAll('.mobile-slides .slide');
    }
}

//Create instance of Carousel
let pageCarousel = new Carousel();