class Carousel {
    constructor(photoCarousel) {
        this.photoCarousel = photoCarousel;
        this.currentIndex = 0;

        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
       
        this.imageContent = document.querySelectorAll('.image');
        this.textContent = document.querySelectorAll('.paragraph');
        
        this.imgArray = [];
        this.imageContent.forEach(image => this.imgArray.push(new Image(image)));
        console.log(this.imgArray[this.currentIndex]);

        this.textArray = [];
        this.textContent.forEach(paragraph => this.textArray.push(new Paragraph(paragraph)));
        console.log(this.textArray[this.currentIndex]);

        this.leftButton.addEventListener('click', () => {this.leftClick()});
        this.rightButton.addEventListener('click', () => {this.rightClick()});

    };

    leftClick() {
        this.imageContent.forEach(picture => picture.classList.remove('active-img'));

        this.textContent.forEach(paragraph => paragraph.classList.remove('active-paragraph'));

        console.log(this.currentIndex);
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.imgArray.length - 1;
            this.currentIndex = this.textArray.length - 1;
        }
        this.imgArray[this.currentIndex].selectImage();
        this.textArray[this.currentIndex].selectParagraph()
            TweenMax.to(".active-paragraph", 1.7, {x: 0});
    }  

    rightClick() {
        this.imageContent.forEach(picture => picture.classList.remove('active-img'));

        this.textContent.forEach(paragraph => paragraph.classList.remove('active-paragraph'));

        console.log(this.currentIndex);
        this.currentIndex++;
        if (this.currentIndex >  this.imgArray.length - 1) {
            this.currentIndex = 0;
        }
       
        this.imgArray[this.currentIndex].selectImage();
        this.textArray[this.currentIndex].selectParagraph();
    }
}


class Image {
    constructor(imageContent) {
        this.imageContent = imageContent;
        console.log('created');
    }

    selectImage() {
        this.imageContent.classList.add('active-img');
    }
}

class Paragraph {
    constructor(textContent) {
        this.textContent = textContent;
        console.log('text created');
    }

    selectParagraph() {
        this.textContent.classList.add('active-paragraph');
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(image => new Carousel(image));