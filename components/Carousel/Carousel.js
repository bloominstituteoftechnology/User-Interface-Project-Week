class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('#left-arrow')
        this.rightButton = this.carousel.querySelector('#right-arrow');

        this.cardElements = this.carousel.querySelectorAll('.project');
        this.cards = Array.from(this.cardElements).map(card => new CarouselCard(card));

        this.currentIndex = 0;

        this.leftButton.addEventListener('click', () => this.handleLeftClick());
        this.rightButton.addEventListener('click', () => this.handleRightClick());
    }

    // Methods
    handleLeftClick() {
        console.log('left-clicked');

        this.cards.forEach(card => card.hide());

        this.currentIndex === this.cards.length - 1 ? this.currentIndex = 0 : this.currentIndex = this.currentIndex + 1;

        this.cards[this.currentIndex].show();
    }

    handleRightClick() {
        console.log('right-clicked');

        this.cards.forEach(card => card.hide());

        this.currentIndex === 0 ? this.currentIndex = this.cards.length - 1 : this.currentIndex = this.currentIndex - 1;

        this.cards[this.currentIndex].show();
    }
}

class CarouselCard {
    constructor(card) {
        this.card = card;
    }

    // Methods
    hide() {
        this.card.style.display = 'none';
    }

    show() {
        this.card.style.display = 'block';
    }
}

// Initial DOM Reference

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

console.log(carousel);