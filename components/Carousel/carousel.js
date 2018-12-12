class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        // Right Button
        this.rightBtn = document.querySelector(".right-button");
        // Left Button
        this.leftBtn = document.querySelector(".left-button");
        // Data
        this.title = document.querySelector(".project-title");
        //Slides
        this.slides = document.querySelectorAll('.caro-img');
        this.headers = document.querySelectorAll('.title');
        //Button Events
        this.rightBtn.addEventListener('click', ()=>{this.plusSlides(1)});
        this.leftBtn.addEventListener('click', ()=>{this.plusSlides(-1)});
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
        console.log(this.slideIndex);
       
    }
    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }
    currentSlide(n){
        showSlides(slideIndex = n);
    }
    showSlides(n){
        let i;
        let slides = document.querySelectorAll(".slide");
        let titles = document.querySelectorAll(".title");
        console.log(slides);
        if (n > slides.length) {
            this.slideIndex = 1
        };
        if (n < 1) {this.slideIndex = slides.length}
        console.log(this.slideIndex);
        for (i = 0; i < slides.length; i++) {
        TweenMax.to(slides[i], 0, {
                display:'none',
                opacity: '1'
        })
        TweenMax.to(titles[i], 0, {
            display:'none',
            opacity: '1'
    })
            // slides[i].style.display = "none"; 
        }
        TweenMax.to(slides[this.slideIndex-1], 1.5, {
            display: "block",
            opacity: '1'
        })
        TweenMax.to(titles[this.slideIndex-1], 1.5, {
            display: "block",
            opacity: '1'
        })
       this.title.textContent= `${(titles[this.slideIndex-1].textContent)}`
        // slides[this.slideIndex-1].style.display = "block";  
        
    }
}

const carousel = document.querySelector(".carousel");
console.log(carousel)
new Carousel(carousel);

