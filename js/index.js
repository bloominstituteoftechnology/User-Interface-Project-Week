// JS goes here

// ==================== Navigation

document.querySelector(".hamburger").addEventListener("click", function() {
    TweenLite.to(".navbar", .5, {className:"expanded-navbar"});
});

document.querySelector(".hamburger-close").addEventListener("click", function() {
    TweenLite.to(".expanded-navbar", .5, {className:"navbar"});
});

// ==================== Services Tabs

class Tab {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.content = document.querySelector(`.tab-content[data-tab="${this.data}"]`);

        this.element.addEventListener("click", () => this.select());

        document.querySelectorAll(".tab-content").forEach((content) => content.style.display = "none");

    }

    select() {
        document.querySelectorAll(".tab-content").forEach((content) => content.style.display = "none");

        this.content.style.display = "flex";

        document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("selected-tab"))

        this.element.classList.add("selected-tab");
    }
}

document.querySelectorAll(".tab").forEach((element) => new Tab(element));

class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        
        this.leftButton = this.carouselElement.querySelector(".left-button");
        
        this.rightButton = this.carouselElement.querySelector(".right-button");

        this.images = document.querySelectorAll(".carousel-img");

        this.currentImage = 0;

        this.images.forEach(image => image.style.display = "none");

        this.images[this.currentImage].style.display = "block";

        setInterval(() => this.moveRight(), 6000);
    }

    moveLeft() {
        this.images.forEach(image => image.style.display = "none");

        if (this.currentImage === 0) {
            this.currentImage = this.images.length - 1;
        } else { 
            this.currentImage = this.currentImage - 1;
        }

        this.images[this.currentImage].style.display = "block";
    }

    moveRight() {
        this.images.forEach(image => image.style.display = "none");

        if (this.currentImage ===   this.images.length - 1) {
            this.currentImage = 0;
            this.nextImage = 1;
        } else { 
            this.currentImage = this.currentImage + 1;
            
            if (this.nextImage ===   this.images.length - 1) {this.nextImage = 2} else if (this.nextImage ===   this.images.length - 2) {this.nextImage = 1} else {
                this.nextImage = this.currentImage + 2;
            }
        }
        // this.images[this.currentImage].style.display = "block";

        // TweenLite.fromTo(this.images[this.currentImage], .2, {
        // display: "none",
        // transform: "translate(0px)", 
        // width: "100%",
        // opacity: 1},
        // {display:"inline-block",
        // transform: "translate(1000px)",
        // opacity: 0,
        // width: "100%",
        // overflow: "hidden",
        // })

        TweenLite.fromTo(this.images[this.nextImage], .2, {
        display:"inline-block",
        transform: "translate(-1000px)",
        opacity: 0,
        overflow: "hidden",},
        {
        transform: "translate(0px)", 
        opacity: 1
        })
    }
}


let carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));
