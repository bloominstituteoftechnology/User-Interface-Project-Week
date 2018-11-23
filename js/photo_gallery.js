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
        this.EnlargeSelectedImageObject = new EnlargeSelectedImage(this.galleryContainer)
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
    constructor(galleryContainer) {
        this.galleryContainer = galleryContainer;

        this.previewImagesDiv = this.galleryContainer.querySelector('.image-preview-div');
        this.allPreviewImages = this.galleryContainer.querySelectorAll('.preview-img');
        this.allPreviewImages.forEach(image => image.addEventListener('click', this.enlargeImage.bind(this)))


        this.carouselImagesDiv = this.galleryContainer.querySelector('.carousel-div');

        this.closeButton = this.galleryContainer.querySelector('.close-button');

        this.backButton = this.galleryContainer.querySelector('.back-button');
        this.backButton.addEventListener('click', this.backToPreview.bind(this));
        
        this.previousButton = this.galleryContainer.querySelector('.previous-button');
        this.nextButton = this.galleryContainer.querySelector('.next-button');
        
        this.previousButton.addEventListener('click', this.cycleLeft.bind(this));
        this.nextButton.addEventListener('click', this.cycleRight.bind(this));
    }

    enlargeImage() {
        this.previewImagesDiv.classList.remove('show-preview-div');
        this.carouselImagesDiv.classList.add('show-carousel-div');
        this.data = event.target.dataset.image;
        this.selectedCarouselImage = this.galleryContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        this.selectedCarouselImage.style.display = 'block';
        this.selectedCarouselImage.style.margin = '0 auto';

        this.closeButton.style.display = 'none';
    }

    backToPreview() {
        this.selectedCarouselImage.style.display = 'none';
        this.carouselImagesDiv.classList.remove('show-carousel-div');
        this.previewImagesDiv.classList.add('show-preview-div');
        this.closeButton.style.display = 'block';
    }
    
    cycleLeft() {
        this.selectedCarouselImage.style.display = 'none';
        if (this.data === "0"){
            this.data = this.allPreviewImages.length;
        }
        this.dataDecrementer = parseInt(this.data) - 1;
        this.data = this.dataDecrementer.toString();
        console.log(this.data);
        this.selectedCarouselImage = this.galleryContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        console.log(this.selectedCarouselImage);
        this.selectedCarouselImage.style.display = 'block';
        this.selectedCarouselImage.style.margin = '0 auto';


    }
    
    cycleRight() {
        this.selectedCarouselImage.style.display = 'none';
        if(this.data === "5") {
            this.data = "-1";
        }
        console.log(this.data);

        this.dataIncrementer = parseInt(this.data) + 1;
        this.data = this.dataIncrementer.toString();
        this.selectedCarouselImage = this.galleryContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        console.log(this.selectedCarouselImage);
        this.selectedCarouselImage.style.display = 'block';
        this.selectedCarouselImage.style.margin = '0 auto';

    }
}



galleryContainer = document.querySelector('.gallery-container');
galleryContainer = new OpenPreviewImages(galleryContainer);













