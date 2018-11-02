//---image carousel---------------------------------------
class Carousel {
    constructor(carouselEle){
        this.carouselEle = carouselEle;
        this.rightBtn = this.carouselEle.querySelector('.right-button');
        this.leftBtn = this.carouselEle.querySelector('.left-button');
        this.images = this.carouselEle.querySelectorAll('.img-container');
        this.imgIndex = 0;
        this.images[0].classList.add('visible');
        this.leftBtn.addEventListener("click",()=>this.goLeft());
        this.rightBtn.addEventListener("click",()=>this.goRight());
    }
    goLeft(){
        let currentIndex = this.imgIndex;
        if(this.imgIndex <= 0){
            this.imgIndex = this.images.length-1;
        }
        else{
            this.imgIndex--;
        }
        TweenMax.to(this.images[currentIndex],0.5,{opacity:0,ease: Power1.easeIn,onComplete:()=>{
            this.images[currentIndex].classList.remove('visible');
            this.images[currentIndex].removeAttribute("style");
            TweenMax.from(this.images[this.imgIndex],0.5,{opacity:0, ease: Power3.easeIn});
            this.images[this.imgIndex].classList.add('visible');
        }})
    }
    goRight(){
        let currentIndex = this.imgIndex;
        if(this.imgIndex >= this.images.length-1){
            this.imgIndex = 0;
        }
        else{
            this.imgIndex++;
        }
        TweenMax.to(this.images[currentIndex],0.5,{opacity:0,ease: Power1.easeIn,onComplete:()=>{
            this.images[currentIndex].classList.remove('visible');
            this.images[currentIndex].removeAttribute("style");
            TweenMax.from(this.images[this.imgIndex],0.5,{opacity:0,ease: Power3.easeIn});
            this.images[this.imgIndex].classList.add('visible');
        }})
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);