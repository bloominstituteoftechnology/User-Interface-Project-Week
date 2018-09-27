class Carousel{
    constructor(element){
        this.element = element;

        this.leftArrow = element.querySelector('.left-button');
        console.log(this.leftArrow);
        this.rightArrow = element.querySelector('.right-button');

        this.images = element.querySelectorAll('img');
        console.log(this.images);

        this.currentIndex = 0;
        this.images[0].style.display ='block';

        this.rightArrow.addEventListener('click', (event) => this.rightArrowClick(event));
        this.leftArrow.addEventListener('click', (event) => this.leftArrowClick(event));

    }

    rightArrowClick(){
        this.images[this.currentIndex].style.display='none'
        if (this.currentIndex === this.images.length - 1){
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex +1
        }
        this.images[this.currentIndex].style.display='block'
    }

    leftArrowClick(){
        this.images[this.currentIndex].style.display= 'none'
        if (this.currentIndex === 0){
            this.currentIndex = this.images.length-1
        } else {
            this.currentIndex = this.currentIndex - 1
    } 
    this.images[this.currentIndex].style.display ='block'
}

}




let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);