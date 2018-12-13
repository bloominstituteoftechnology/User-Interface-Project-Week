class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;

        this.leftButton = carouselElement.querySelector(".projects__carousel__left-button");
        this.rightButton = carouselElement.querySelector(".projects__carousel__right-button");

        this.images = carouselElement.querySelectorAll(".projects__carousel__image");
        this.indicators = carouselElement.querySelectorAll(".projects__carousel__indicators__icon");
        
        this.currentIndex = 0;
        this.images[0].style.display = "block";
        this.indicators[0].style.borderColor = "white";

        this.leftButton.addEventListener("click", e => this.clickedLeft(e));
        this.rightButton.addEventListener("click", e => this.clickedRight(e));

        this.indicators.forEach((indicator, i) => indicator.addEventListener("click", e => this.clickedDot(e, i)));

        this.projectTextItems = document.querySelectorAll(".projects__list__item");
        this.projectTextItems[0].style.display = "block";

        this.projectTextItems.forEach(projectItem => projectItem.addEventListener("click", e => {
            this.openDescription(e);
            e.stopPropagation();
        }));

        this.projectModal = document.querySelector(".projects__list__modal");

        this.projectModalContent = document.querySelector(".projects__list__modal__content");
        this.projectModalContent.addEventListener("click", e => e.stopPropagation());

        this.projectModalDescriptions =  document.querySelectorAll(".projects__list__desc");
        this.projectModalDescriptions[0].style.display = "block";

        this.hasOngoingAnimation = false;
    }

    openDescription(e) {
        this.projectModal.style.display = "block";

        let projectModalTitle = this.projectModalContent.querySelector(".projects__list__modal__content__title");
        let projectModalImage = this.projectModalContent.querySelector(".projects__list__modal__content__image");
        let projectModalText =  this.projectModalContent.querySelector(".projects__list__desc");

        projectModalTitle.textContent = this.projectTextItems[this.currentIndex].textContent;
        projectModalImage.src = this.images[this.currentIndex].src;

        TweenMax.fromTo(this.projectModal, 0.5, {
            opacity: 0
        }, {
            opacity: 0.95
        });

        this.projectModal.addEventListener("click", e => this.closeDescription());
        toggleCarouselAutoSlide();
    }

    closeDescription() {
        TweenMax.fromTo(this.projectModal, 0.5, {
            opacity: 0.95
        }, {
            opacity: 0,
            onComplete: () => this.projectModal.style.display = "none"
        });

        this.projectModal.removeEventListener("click", this.closeDescription);
        toggleCarouselAutoSlide();
    }

    clickedLeft(e) {
        if (!this.hasOngoingAnimation) {
            this.hasOngoingAnimation = true;

            const newIndex = this.currentIndex ?  
                                this.currentIndex - 1 : this.images.length - 1;
                                
            this.images[newIndex].style.display = "block";
            this.images[newIndex].style.opacity = 1;

            this.indicators[this.currentIndex].style.borderColor = "lightgrey";
            this.indicators[newIndex].style.borderColor = "white";

            this.projectModalDescriptions[this.currentIndex].style.display = "none";
            this.projectModalDescriptions[newIndex].style.display = "block"

            const distance = this.images[newIndex].width;

            this.currentProjectName = this.projectTextItems[this.currentIndex]
            this.newProjectName = this.projectTextItems[newIndex];

            this.newProjectName.style.position = "absolute";
            this.newProjectName.style.top = 0;
            this.newProjectName.style.display = "block";
            this.newProjectName.style.opacity = 1;

            const slideAnimation = new TimelineMax();
            slideAnimation.fromTo(this.images[this.currentIndex], 1, {
                x: 0
            }, {
                x: distance,
                onComplete: () => {
                    this.images[this.currentIndex].style.display = "none";
                    this.currentIndex = newIndex;
                    this.hasOngoingAnimation = false;
                }
            }).fromTo(this.images[newIndex], 1, {
                x: -distance
            }, {
                x: 0
            }, 0).fromTo(this.currentProjectName, 1, {
                x: 0
            }, {
                x: distance,
                onComplete: () => {
                    this.newProjectName.style.position = "static";
                    this.newProjectName.style.top = "auto";
                    this.currentProjectName.style.display = "none";
                }
            }, 0).fromTo(this.newProjectName, 1, {
                x: -distance
            }, {
                x: 0
            }, 0);
        }
    }

    clickedRight(e) {
        if (!this.hasOngoingAnimation) {
            this.hasOngoingAnimation = true;

            const newIndex = this.currentIndex + 1 === this.images.length ? 
                                0 : this.currentIndex + 1;

            this.images[newIndex].style.display = "block";
            this.images[newIndex].style.opacity = 1;

            this.indicators[this.currentIndex].style.borderColor = "lightgrey";
            this.indicators[newIndex].style.borderColor = "white";

            this.projectModalDescriptions[this.currentIndex].style.display = "none";
            this.projectModalDescriptions[newIndex].style.display = "block"

            const distance = this.images[newIndex].width;

            this.currentProjectName = this.projectTextItems[this.currentIndex]
            this.newProjectName = this.projectTextItems[newIndex];

            this.newProjectName.style.position = "absolute";
            this.newProjectName.style.top = 0;
            this.newProjectName.style.display = "block";
            this.newProjectName.style.opacity = 1;

            const slideAnimation = new TimelineMax();
            slideAnimation.fromTo(this.images[this.currentIndex], 1, {
                x: 0
            }, {
                x: -distance,
                onComplete: () => {
                    this.images[this.currentIndex].style.display = "none";
                    this.currentIndex = newIndex;
                    this.hasOngoingAnimation = false;
                }
            }).fromTo(this.images[newIndex], 1, {
                x: distance
            }, {
                x: 0
            }, 0).fromTo(this.currentProjectName, 1, {
                x: 0
            }, {
                x: -distance,
                onComplete: () =>  {
                    this.newProjectName.style.position = "static";
                    this.newProjectName.style.top = "auto";
                    this.currentProjectName.style.display = "none";
                }
            }, 0).fromTo(this.newProjectName, 1, {
                x: distance
            }, {
                x: 0
            }, 0);
        }
    }

    clickedDot(e, newIndex) {
        if (!this.hasOngoingAnimation && newIndex != this.currentIndex) {
            this.hasOngoingAnimation = true;

            // this.images[this.currentIndex].style.display = "none";
            this.images[newIndex].style.display = "block";
            this.images[newIndex].style.transform = "matrix(1, 0, 0, 1, 0, 0)";

            this.indicators[this.currentIndex].style.borderColor = "lightgrey";
            this.indicators[newIndex].style.borderColor = "white";

            this.projectModalDescriptions[this.currentIndex].style.display = "none";
            this.projectModalDescriptions[newIndex].style.display = "block"

            this.currentProjectName = this.projectTextItems[this.currentIndex]
            this.newProjectName = this.projectTextItems[newIndex];

            this.newProjectName.style.position = "absolute";
            this.newProjectName.style.top = 0;
            this.newProjectName.style.display = "block";
            this.newProjectName.style.transform = "matrix(1, 0, 0, 1, 0, 0)";

            const slideAnimation = new TimelineMax();
            slideAnimation.to(this.images[this.currentIndex], 1, {
                opacity: 0,
                onComplete: () => {
                    this.images[this.currentIndex].style.display = "none";
                    this.currentIndex = newIndex;
                    this.hasOngoingAnimation = false;
                }
            }).fromTo(this.images[newIndex], 1, {
                opacity: 0
            }, {
                opacity: 1
            }, 0).to(this.currentProjectName, 1, {
                opacity: 0,
                onComplete: () =>  {
                    this.newProjectName.style.position = "static";
                    this.newProjectName.style.top = "auto";
                    this.currentProjectName.style.display = "none";
                }
            }, 0).fromTo(this.newProjectName, 1, {
                opacity: 0
            }, {
                opacity: 1
            }, 0);
        }
    }
}

let carousel = new Carousel(document.querySelector(".projects__carousel"));

let isAutoSlidingCarousel = true;

let autoSlider = window.setInterval(e => carousel.clickedRight(e), 11000);

function toggleCarouselAutoSlide() {
    if (isAutoSlidingCarousel) {
        autoSlider = window.clearInterval(autoSlider);
        isAutoSlidingCarousel = false;
    } else {
        autoSlider = window.setInterval(e => carousel.clickedRight(e), 11000);
        isAutoSlidingCarousel = true;
    }
}