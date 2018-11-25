class PhotoGalleryAnimations {
    constructor(galleryContainer) {
        this.galleryContainer = galleryContainer;

        this.imagePreviewDiv = this.galleryContainer.querySelector('.image-preview-div');
        this.designButton = this.galleryContainer.querySelector('.design-button');
        this.designButton.addEventListener('click', this.designButtonAnimations.bind(this));
        this.designButton.addEventListener('mouseover', this.changeText.bind(this));
        this.designButton.addEventListener('mouseout', this.changeBackText.bind(this));


        this.nextButton = this.galleryContainer.querySelector('.next-button');
        this.previousButton = this.galleryContainer.querySelector('.previous-button');
        this.imgDivContainer = this.galleryContainer.querySelector('.image-div-container');
        this.randomColorArray = ['#eccc68', '#ff6b81', '#57606f', '#ffffff', '#2ed573', '#3742fa'];
        this.previousButton.addEventListener('click', this.changeBackgroundColor.bind(this));
        this.nextButton.addEventListener('click', this.changeBackgroundColor.bind(this));

        this.backButton = this.galleryContainer.querySelector('.back-button');
        this.backButton.addEventListener('click', this.backToBlackBackground.bind(this));

        this.allPreviewImgs = this.galleryContainer.querySelectorAll('.preview-img');
        this.allPreviewImgs.forEach(img => img.addEventListener('click', this.changeBackgroundColor.bind(this)))

    }

    designButtonAnimations() {
        TweenMax.to(this.imagePreviewDiv, 2, {opacity: 1});

    }

    changeBackgroundColor() {
        TweenMax.to(this.imgDivContainer, 1, {backgroundColor: this.randomColorArray[Math.floor(Math.random() * this.randomColorArray.length)]})
    }

    backToBlackBackground() {
        TweenMax.to(this.imgDivContainer, 1, {backgroundColor: 'black'});
    }

    changeText() {
        this.designButton.textContent = 'Click Me!';
    }

    changeBackText() {
        TweenMax.to(this.designButton, 1, {rotation: '360'})
    }
}
