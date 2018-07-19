// Carousel for projects.html
class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('img');
        this.images = Array.from(this.images).map(img => new CarouselImage(img));
        this.activeImg = this.images[0];

        this.left = this.carousel.querySelector('.left-button');
        this.left.addEventListener('click', () => this.shiftLeft());
        this.right = this.carousel.querySelector('.right-button');
        this.right.addEventListener('click', () => this.shiftRight());

        this.init();
    }

    init() {
        this.activeImg.activate();
    }

    shiftLeft() {
        this.activeImg.deactivateLeft();

        let length = this.images.length;
        let index = this.activeImg.index;
        if (index == 1) this.activeImg = this.images[length - 1];
        else this.activeImg = this.images[index - 2];

        this.activeImg.activateLeft();
    }
    
    shiftRight() {
        this.activeImg.deactivate();

        let length = this.images.length;
        let index = this.activeImg.index;
        if (index == length) this.activeImg = this.images[0];
        else this.activeImg = this.images[index];

        this.activeImg.activate();
    }
}

class CarouselImage {
    constructor(img) {
        this.img = img;
        this.index = this.img.dataset.tab;
        this.content = document.querySelector(`.content[data-content="${this.img.dataset.content}"]`);
        this.content = new CarouselContent(this.content);
    }

    activate() {
        TweenMax.fromTo(this.img, 2, {x: 1500}, {x: 0, autoAlpha: 1, ease: Power2.easeOut, delay: 1});
        this.img.style.display = 'flex';
        this.content.activate();
    }

    activateLeft() {
        TweenMax.fromTo(this.img, 2, {x: -1500}, {x: 0, autoAlpha: 1, ease: Power2.easeOut, delay: 1});
        this.img.style.display = 'flex';
        this.content.activate();
    }

    deactivate() {
        TweenMax.fromTo(this.img, 2, {x: 0}, {x: -1500, ease: Power4.ease, 
            onComplete: () => this.img.style.display = 'none'});
        this.content.deactivate();
    }

    deactivateLeft() {
        TweenMax.fromTo(this.img, 2, {x: 0, autoAlpha: 1}, {x: 1500, autoAlpha: 0, ease: Power4.ease, 
            onComplete: () => this.img.style.display = 'none'});
        this.content.deactivate();
    }
}

class CarouselContent {
    constructor(content) {
        this.content = content;
    }

    activate() {
        this.content.style.display = 'block';
    }

    deactivate() {
        this.content.style.display = 'none';
    }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));