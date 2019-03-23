
// let currentIndex = 0;
// slideShow()

// function slideShow() {
    
//     let images = document.getElementsByClassName("carousel");

//     for (i = 0; i < images.length; i++) {
//         images[i].style.display = "none";  
//     }
//     currentIndex++;

//     if (currentIndex > images.length) {
//         currentIndex = 1;
//     }    
//     images[currentIndex-1].style.display = "block";  
//     setTimeout(slideShow, 4000);
    
// }

class Carousel {
    constructor(wrapperElement) {
        this.wrapperElement = document.querySelector(wrapperElement);
        this.children = this.wrapperElement.children;
        
        this.currentIndex = 0;
        Array.from(this.children).forEach(image => image.style.display = "none");
        this.children[this.currentIndex].style.display = "block";
        let timeLoop = 1000;
        var timer = setInterval(() => this.slide(), timeLoop);
        this.wrapperElement.addEventListener("mouseenter", () => clearInterval(timer))

        this.wrapperElement.addEventListener("mouseleave", () => timer = setInterval(() => this.slide(), timeLoop))
    }

    slide() {
        this.children[this.currentIndex].style.display = "none";
        this.currentIndex++;
        if (this.currentIndex > this.children.length-1) {
            this.currentIndex = 0;
        }
        this.children[this.currentIndex].style.display = "block";
    }
}

window.addEventListener("load", function (){
    new Carousel(".img-desktop");
    new Carousel(".img-mobile");
})
// const carousel = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));