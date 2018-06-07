class Carousel {
    constructor(carousel) {
        this.element = carousel;
        this.rightButton = carousel.querySelector('.right-button');
        this.leftButton = carousel.querySelector('.left-button');
        this.images = Array.from(carousel.querySelectorAll('.image'));
        this.images = this.images.map((image) => {
            return new CarouselImage(image, this);
        })
    }
    updateActive(button) {
        // hides current image
        let images = this.images;
        images[0].deactivate();

        // updates Carousel image array based on direction clicked
        if (button === "left") {
            images.push(images[0]);
            images.shift();
            console.log("left");
        } else {
            images[0]
            images.unshift(images[images.length-1]);
            images.pop();
            console.log ("right");
        }
        
        //updates current carousel image
        images[0].activate();

    }
    init() {

        this.images[0].activate();
        this.leftButton.addEventListener("click", this.updateActive.bind(this, "left"));

        this.rightButton.addEventListener("click", this.updateActive.bind(this, "right"));
    }
}

class CarouselImage {
    constructor(image, parent) {
        this.element = image;
        this.parent = parent;
    }
    activate() {
        this.element.classList.add("active");
    }
    deactivate() {
        this.element.classList.remove("active");
    }
}

let carousels = Array.from(document.querySelectorAll('.carousel'));
carousels = carousels.map((carousel) => {
    return new Carousel(carousel)
});

for (let carouselIndex in carousels) {
    carousels[carouselIndex].init();
}