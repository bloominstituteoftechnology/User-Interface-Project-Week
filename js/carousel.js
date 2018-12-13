//carousel
class Carousel {
    constructor(element) {
        this.element = element;
        this.rightButton = document.querySelector(".right-button");
        this.rightButton.addEventListener("click", () => {this.clickRight()});
        this.leftButton = document.querySelector(".left-button");
        this.leftButton.addEventListener("click", () => {this.clickLeft()});
        this.currentIndex = 0
        this.images = document.querySelectorAll(".carousel img")
        this.images[this.currentIndex].classList.add("current-img")
    }
    clickRight() {
        this.images[this.currentIndex].classList.remove("current-img")
        this.currentIndex += 1;
        if (this.currentIndex === this.images.length) {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].classList.add("current-img")
    }
    clickLeft() {
        this.images[this.currentIndex].classList.remove("current-img")
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length-1;
        }
        this.images[this.currentIndex].classList.add("current-img")     
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel();