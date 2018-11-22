class OpenPreviewImages {
    constructor(galleryContainer) {
        //Wraps everything
        this.galleryContainer = galleryContainer;
        //View design button
        this.designButton = this.galleryContainer.querySelector('.design-button');
        
        //Grabs all images, preview and single images
        this.imagesContainer = this.galleryContainer.querySelector('.image-div-container');
        //Grabs the preview image div
        this.imagePreviewDiv = this.galleryContainer.querySelector('.image-preview-div');
        //Grabs the X image
        this.closeButton = this.galleryContainer.querySelector('.close-button');
        //Adds event listener design and close buttons to open and close 
        this.designButton.addEventListener('click', this.displayImages.bind(this));
        this.closeButton.addEventListener('click', this.closeImages.bind(this));
        //Passes all images to EnlargeSelectedImage 
        this.EnlargeSelectedImageObject = new EnlargeSelectedImage(this.imagesContainer)
    }

    displayImages() {
        //Adds styling to entire image container. Also shows preview images. Single images still hidden
        this.imagesContainer.classList.add('show-images-container');
        this.imagePreviewDiv.classList.add('show-preview-div')

    }

    closeImages() {
        //removes effects from displayImages() when X button is pressed.
        this.imagesContainer.classList.remove('show-images-container');
        this.imagePreviewDiv.classList.remove('show-preview-div')

    }
}

class EnlargeSelectedImage {
    constructor(imagesContainer) {
        this.imagesContainer = imagesContainer;
        
        this.previewImagesDiv = this.imagesContainer.querySelector('.image-preview-div');
        this.allPreviewImages = this.imagesContainer.querySelectorAll('.preview-img');
        this.allPreviewImages.forEach(image=> image.addEventListener('click', this.enlargeImage.bind(this)))
        
        
        this.selectedImage = document.querySelector(`.carousel-img[data-image ='${this.data}']`);

        this.carouselImagesDiv = this.imagesContainer.querySelector('.carousel-div');
        
        this.backButton = this.imagesContainer.querySelector('.back-button');
        this.backButton.addEventListener('click', this.backToPreview.bind(this));
    }
    enlargeImage() {
        this.previewImagesDiv.classList.remove('show-preview-div');
        this.carouselImagesDiv.classList.add('show-carousel-div');
        this.data = event.target.dataset.image;
        this.selectedCarouselImage = this.imagesContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        
        this.selectedCarouselImage.style.display = 'block';
        this.selectedCarouselImage.style.margin = '0 auto';
    }
    
    backToPreview() {
        this.selectedCarouselImage.style.display = 'none';
        this.carouselImagesDiv.classList.remove('show-carousel-div');
        this.previewImagesDiv.classList.add('show-preview-div');
        
    }
    
}


galleryContainer = document.querySelector('.gallery-container');
galleryContainer = new OpenPreviewImages(galleryContainer);

/*

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
*/












