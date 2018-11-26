class PhotoGalleryAnimations {
    constructor(galleryContainer) {
        //Enture photo gallery
        this.galleryContainer = galleryContainer;

        //Selects the thumbnail div, x button, and design button
        this.imagePreviewDiv = this.galleryContainer.querySelector('.image-preview-div');
        this.closeButton = this.galleryContainer.querySelector('.close-button');
        this.designButton = this.galleryContainer.querySelector('.design-button');
        //When design button is pressed, the image preview div will fade in
        this.designButton.addEventListener('click', this.fadeIn.bind(this));
        //Resets opacity after user presses the x button, which closes the photo gallery
        this.closeButton.addEventListener('click', this.resetOpacity.bind(this));
        //Changes the text when moused over the design button
        this.designButton.addEventListener('mouseover', this.changeText.bind(this));
        this.designButton.addEventListener('mouseout', this.changeBackText.bind(this));

        //Selected next, previous and the div that containers all the images
        this.nextButton = this.galleryContainer.querySelector('.next-button');
        this.previousButton = this.galleryContainer.querySelector('.previous-button');
        this.imgDivContainer = this.galleryContainer.querySelector('.image-div-container');
        //random hex colors
        this.randomColorArray = ['#eccc68', '#ff6b81', '#57606f', '#ffffff', '#2ed573', '#3742fa'];
        //Whenever back or previous button is pressed, the background color will randomly change
        this.previousButton.addEventListener('click', this.changeBackgroundColor.bind(this));
        this.nextButton.addEventListener('click', this.changeBackgroundColor.bind(this));

        //When the back button is pressed, the background color will reset to black
        this.backButton = this.galleryContainer.querySelector('.back-button');
        this.backButton.addEventListener('click', this.backToBlackBackground.bind(this));

        //Changes the background color whenever a thumbnail is pressed
        this.allPreviewImgs = this.galleryContainer.querySelectorAll('.preview-img');
        this.allPreviewImgs.forEach(img => img.addEventListener('click', this.changeBackgroundColor.bind(this)))

    }

    //Causes something to fade in by changing opacity
    fadeIn() {
        TweenMax.to(this.imagePreviewDiv, 2, {opacity: 1});
    }

    //Causes something to fade out, or in this case, resets the opacity to 0
    resetOpacity() {
        TweenMax.to(this.imagePreviewDiv, 1, {opacity: 0});

    }

    //Changes background color by setting the index of this.randomColorArray to a random number. 
    changeBackgroundColor() {
        TweenMax.to(this.imgDivContainer, 1, {backgroundColor: this.randomColorArray[Math.floor(Math.random() * this.randomColorArray.length)]})
    }

    //Changes backgrouund color to black
    backToBlackBackground() {
        TweenMax.to(this.imgDivContainer, 1, {backgroundColor: 'black'});
    }

    //Changes text
    changeText() {
        this.designButton.textContent = 'Click Me!';
    }

    //Rotates button

    changeBackText() {
        TweenMax.to(this.designButton, 1, {rotation: '360'})
    }
}
