class Carousel {
    constructor(props) {
        this.element = props;
        this.upButton = this.element.querySelector(".up-button");
        this.downButton = this.element.querySelector(".down-button");
        this.images = this.element.querySelectorAll("img");
        
        this.upButton.addEventListener("click", () => this.select("up"));
        this.downButton.addEventListener("click", () => this.select("down"));
    }

    findDisplayBlock(item) {
        return item.style.display === "block";
    }

    select(direction) {
        let indexOfBlockImage = Array.from(this.images).findIndex(this.findDisplayBlock);
        
        for (let i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }

        if (direction === "up") {
            if (indexOfBlockImage === this.images.length - 1) {
                this.images[0].style.display = "block";
                TweenMax.fromTo(this.images[0], 1, {y: 100, opacity: 0}, {y: 0, opacity: 1});
            } else {
                this.images[indexOfBlockImage + 1].style.display = "block";
                TweenMax.fromTo(this.images[indexOfBlockImage + 1], 1, {y: 100, opacity: 0}, {y: 0, opacity: 1});
            }
        } else {
            if (indexOfBlockImage === 0) {
                this.images[this.images.length - 1].style.display = "block";
                TweenMax.fromTo(this.images[this.images.length - 1], 1, {y: -100, opacity: 0}, {y: 0, opacity: 1});
            } else {
                this.images[indexOfBlockImage - 1].style.display = "block";
                TweenMax.fromTo(this.images[indexOfBlockImage - 1], 1, {y: -100, opacity: 0}, {y: 0, opacity: 1});
            }
        }
    }
}

let carousel = document.querySelectorAll(".carousel");

carousel = Array.from(carousel).map(item => new Carousel(item));

carousel.forEach(item => {
    for (let i = 0; i < item.images.length; i++) {
        item.images[i].style.display = "none";
    }

    item.images[0].style.display = "block";
});
