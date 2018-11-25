class OpenPreviewImages {
    constructor(galleryContainer) {
        //Assigns galleryContainer to this.galleryContainer
        this.galleryContainer = galleryContainer;
        
        //This container holds the preview and carousel images
        this.imagesContainer = this.galleryContainer.querySelector('.image-div-container');
        //Grabs the div with all the preview images
        this.imagePreviewDiv = this.galleryContainer.querySelector('.image-preview-div');

        //Grabs the X image/button
        this.closeButton = this.galleryContainer.querySelector('.close-button');
        //Grabs design button from inside galleryContainer
        this.designButton = this.galleryContainer.querySelector('.design-button');

        //Adds event listener design and close buttons to open and close 
        this.designButton.addEventListener('click', this.displayImages.bind(this));
        this.closeButton.addEventListener('click', this.closeImages.bind(this));
        new Carousel(this.imagesContainer);
        new PhotoGalleryAnimations(this.galleryContainer)
    }

    displayImages() {
        //This is the black background
        this.imagesContainer.classList.add('show-images-container');
        //this displays the preview images in a 2x3 grid
        this.imagePreviewDiv.classList.add('show-preview-div')

    }

    closeImages() {
        //removes everything when x button is pressed
        this.imagesContainer.classList.remove('show-images-container');
        this.imagePreviewDiv.classList.remove('show-preview-div')
    }
}

class Carousel {
    constructor(imagesContainer) {
        //Assigns galleryContainer to this.galleryContainer
        this.imagesContainer = imagesContainer;

        //This container holds the preview and carousel images
        this.previewImagesDiv = this.imagesContainer.querySelector('.image-preview-div');
        //This has all the preview images and makes them clickable
        this.allPreviewImages = this.imagesContainer.querySelectorAll('.preview-img');
        this.allPreviewImages.forEach(image => image.addEventListener('click', this.selectedImage.bind(this)));

        //Do some styling for the carousel images and div when they show up
        this.carouselImagesDiv = this.imagesContainer.querySelector('.carousel-div');
        this.carouselImages = this.imagesContainer.querySelectorAll('.carousel-img');
        this.carouselImages.forEach(image => {
            image.style.display = 'none';
            image.style.margin = '0 auto';
        });
        
        
        

        //The back button brings back the preview images
        this.backButton = this.imagesContainer.querySelector('.back-button');
        this.backButton.addEventListener('click', this.backToPreview.bind(this));

        //Scrolls the carousel 
        this.previousButton = this.imagesContainer.querySelector('.previous-button');
        this.nextButton = this.imagesContainer.querySelector('.next-button');

        this.previousButton.addEventListener('click', this.cycleLeft.bind(this));
        this.nextButton.addEventListener('click', this.cycleRight.bind(this));
        
    }
    //This method displays the selected image
    selectedImage() {
        //This hides the preview images
        this.previewImagesDiv.classList.remove('show-preview-div');
        //This shows the carousel div. Images still hidden
        this.carouselImagesDiv.classList.add('show-carousel-div');
        //The preview image selected had a data-image associated with it. This saves it in this.data
        this.data = event.target.dataset.image;
        //Uses this.data to find the carousel image with the same data-image value
        this.selectedCarouselImage = this.imagesContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        //That image is then displayed
        this.selectedCarouselImage.style.display = 'block';
        
    }

    //This method takes us back to the preview images
    backToPreview() {
        //Hides the carousel image
        this.selectedCarouselImage.style.display = 'none';
        //Hides the carousel div
        this.carouselImagesDiv.classList.remove('show-carousel-div');
        //Shows the preview images div, which also shows the preview images
        this.previewImagesDiv.classList.add('show-preview-div');
    }

    cycleLeft() {
        //Hides the current image
        this.selectedCarouselImage.style.display = 'none';
        //Since can't iterate over negative numbers, if this.data is 0, it will reset 
        //this.data equal to the number of images
        if (this.data === "0") {
            this.data = this.allPreviewImages.length;
        }
        //Subtracts 1 from this.data
        this.data = (parseInt(this.data) - 1).toString();
        //Selected the image associated with this.data-1
        this.selectedCarouselImage = this.imagesContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        //Displays the image
        this.selectedCarouselImage.style.display = 'block';


    }

    cycleRight() {
        //hides the current image
        this.selectedCarouselImage.style.display = 'none';
        //checks if this.data has reached highest possible iteration
        if (this.data === `${this.allPreviewImages.length - 1}`) {
            this.data = "-1";
        }
        
        //adds 1 to this.data
        this.data = (parseInt(this.data) + 1).toString();
        //Finds carousel image associated with this.data+1
        this.selectedCarouselImage = this.imagesContainer.querySelector(`.carousel-img[data-image ='${this.data}']`);
        //displays that image
        this.selectedCarouselImage.style.display = 'block';
    }
}





//Grabs galleryContainer and creates new OpenPreviewImages object
galleryContainer = document.querySelector('.gallery-container');
galleryContainer = new OpenPreviewImages(galleryContainer);













