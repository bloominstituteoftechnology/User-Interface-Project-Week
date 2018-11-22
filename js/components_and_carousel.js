class TogglePreviewImages {
    constructor(button, previewImageDivContainer, closeButton) {
        this.previewImageDivContainer = previewImageDivContainer;
        this.button = button;
        this.closeButton = closeButton;
        this.button.addEventListener('click', this.displayImages.bind(this));
        this.closeButton.addEventListener('click', this.closeImages.bind(this));
    }

    displayImages() {
        this.previewImageDivContainer.classList.add('show-preview-images');

    }

    closeImages() {
        this.previewImageDivContainer.classList.remove('show-preview-images');
    }
}

let closeButton = document.querySelector('.close-button');
let designButton = document.querySelector('.design-button');
let previewImageDivContainer = document.querySelector('.image-preview-div-container');
designButton = new TogglePreviewImages(designButton, previewImageDivContainer, closeButton);


class EnlargeImageSelected {
    constructor(previewImagesDiv, currentImage, carouselImageDiv, backButton) {
        this.previewImageDiv = previewImagesDiv;
        this.currentimage = currentImage;
        this.carouselImageDiv = carouselImageDiv;
        
        this.carouselDiv = document.querySelector('.carousel-div-container');
        this.carousel = new Carousel(this.carouselDiv, this.data);
        
        this.backButton = backButton;
        this.data = this.currentimage.dataset.image;

        this.selectedImage = document.querySelector(`.carousel-img[data-image ='${this.data}']`);
        this.currentimage.addEventListener('click', this.enlargeSelectedImage.bind(this));
        this.backButton.addEventListener('click', this.returnToPreview.bind(this));

    }

    enlargeSelectedImage() {
        this.previewImageDiv.style.display = 'none';
        this.carouselImageDiv.classList.add('show-carousel-div');
        this.selectedImage.style.display = 'block';
        this.selectedImage.classList.add('carousel-img-style');
    }

    returnToPreview() {
        this.previewImageDiv.style.display = 'grid';
        this.carouselImageDiv.classList.remove('show-carousel-div');
        this.selectedImage.style.display = 'none';
        this.selectedImage.classList.remove('carousel-img-style');
    }
}

class Carousel {
    constructor(carouselDiv, data) {
        //passes in the carousel node element
        this.carouselDiv = carouselDiv;
        this.data = data;
        

        this.previousButton = this.carouselDiv.querySelector('.previous-button');
        this.nextButton = this.carouselDiv.querySelector('.next-button');

        this.images = this.carouselDiv.querySelectorAll('.carousel-img');
        this.imageLength = this.images.length;


        this.index = 2;
        this.previousButton.addEventListener('click', this.cycleLeft.bind(this));
        this.nextButton.addEventListener('click', this.cycleRight.bind(this))
    }

    cycleLeft() {
        //checks if index is greater than 0. If index is zero, the else statement will reset index to the last image
        if (this.index > 0) {
            console.log(this.index);
            //Hides the current image
            this.images[this.index].style.display = "none";
            //subtracts index to get the previous image
            this.index--;
            console.log(this.index);
            //displays previous image
            //displays the previous image
            this.images[this.index].style.display = "block";
        }
    }

    cycleRight() {
        //checks if index is less than the largest possible index. If index is, the else statement will reset index to 0

        if (this.index < this.imageLength - 1) {
            //hides the current display
            this.images[this.index].style.display = "none";
            //Adds 1 to index
            this.index++;
            //displays the next image
            this.images[this.index].style.display = "block";
        }
        else if(this.index === this.imageLength-1) {
            this.index--
        }

    }
}



let previewImagesDiv = document.querySelector('.image-preview-div');
let previewImages = document.querySelectorAll('.preview-img');
let carouselImageDiv = document.querySelector('.carousel-div-container');
let backButton = document.querySelector('.back-button');
previewImages.forEach(currentImage => new EnlargeImageSelected(previewImagesDiv, currentImage, carouselImageDiv, backButton));













